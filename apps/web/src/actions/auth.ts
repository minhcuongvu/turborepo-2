'use server'

import { signIn, signOut } from '@/auth'
import { SignupFormSchema, FormState } from '@/lib/definitions'
// import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'
// import { db } from '@/lib/db'
// import { users } from '@/lib/db/schema'

export async function signup(state: FormState, formData: FormData) {
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // 2. Prepare data for insertion into database
    const { name, email, password } = validatedFields.data
    // e.g. Hash the user's password before storing it
    // const hashedPassword = await bcrypt.hash(password, 10)

    // 3. Insert the user into the database or call an Auth Library's API
    // const data = await db
    //     .insert(users)
    //     .values({
    //         name,
    //         email,
    //         password: hashedPassword,
    //     })
    //     .returning({ id: users.id })

    const user = {
        id: '1',
        name,
        email,
        password,
    }

    if (!user) {
        return {
            message: 'An error occurred while creating your account.',
        }
    }

    console.log(user)

    // Call the provider or db to create a user...

    // Current steps:
    // 4. Create user session
    // await createSession(user.id)
    // 5. Redirect user
    redirect('/profile')
}

export async function signInWithGoogle() {
    "use server";
    await signIn("google");
}

export async function signOutSession() {
    "use server";
    await signOut({
        redirect: false,
    });
    await new Promise(resolve => setTimeout(resolve, 500));
    redirect('/');
}