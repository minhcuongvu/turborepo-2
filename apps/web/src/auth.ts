import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub, Google({
        authorization: {
            params: {
                prompt: 'consent',
                access_type: 'offline',
                response_type: 'code'
            }
        }
    })],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account && profile) {
                token.googleId = profile.sub; // 👈 Google account ID
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.googleId as string; // 👈 Pass it to client
            return session;
        },
    },    // secret: process.env.NEXTAUTH_SECRET
    session: {
        strategy: 'jwt',
    },
    basePath: '/api/auth',
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error', // Error code passed in query string as ?error=
        verifyRequest: '/auth/verify-request', // (used for check email message)
        newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
});

declare module 'next-auth' {
    interface Session {
        googleId: string;
    }
}