import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server';

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

// https://nextjs.org/docs/app/guides/authentication#session-management

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("10 sec from now")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    if (!input) {
        return null;
    }
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

export async function login(formData: FormData) {
    // Verify credentials && get the user
    const user = { email: formData.get("email"), name: "John" };

    // Create the session
    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    // Save the session in a cookie
    const cookieStore = await cookies()
    cookieStore.set("session", session, { expires, httpOnly: true });
}

export async function logout() {
    // Destroy the session
    const cookieStore = await cookies()
    cookieStore.set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')
    return session
}

export async function updateSession(request: NextRequest) {
    const session = await getSession()
    if (!session) {
        return;
    }
    const parsed = await decrypt(session.value)
    parsed.expires = new Date(Date.now() + 10 * 1000)
    const res = NextResponse.next()
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        secure: true,
        expires: parsed.expires,
    })
    return res
}