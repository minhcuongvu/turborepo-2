'use client';
import { Dialog, Flex, Separator, Text, TextField, Theme } from "@radix-ui/themes";
import { signInWithEmail, signInWithGoogle, signOutSession } from "@/actions/auth";
import { useActionState, useEffect, useState } from "react";
import { Google } from "@mui/icons-material";
import Link from "next/link";

export default function SignInDialog() {
    const [signInWithEmailFormState, signInWithEmailAction] = useActionState(signInWithEmail, {
        email: '',
        password: '',
        error: '',
    });
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [clickedSignOut, setClickedSignOut] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [clickedSignInWithGoogle, setClickedSignInWithGoogle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Reset spinner states when dialog closes or component unmounts
    useEffect(() => {
        if (!isOpen) {
            setClickedSignIn(false);
            setClickedSignInWithGoogle(false);
            setClickedSignOut(false);
        }
        return () => {
            setClickedSignIn(false);
            setClickedSignInWithGoogle(false);
            setClickedSignOut(false);
        };
    }, [isOpen]);

    // Reset spinner when form state changes (error or success)
    useEffect(() => {
        setClickedSignIn(false);
    }, [signInWithEmailFormState]);

    return (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
            <Dialog.Trigger>
                <button
                    className="cursor-pointer flex items-center gap-1 transition-all 
                duration-200 border-2 border-[var(--accent-5)] dark:border-[var(--accent-5)] rounded-md 
                px-2 py-1 hover:border-[var(--red-10)] dark:hover:border-[var(--red-10)]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    Log In {isHovered ? '' : ''}
                </button>
            </Dialog.Trigger>
            <Theme accentColor='red' panelBackground='translucent' radius='small' >
                <Dialog.Content maxWidth="450px" size="4" style={{ boxShadow: 'none' }} aria-describedby="sign in dialog">
                    <Dialog.Title align="center">Log In To Your Account</Dialog.Title>
                    <Flex direction="column" gap="3">
                        <form
                            action={signInWithEmailAction}
                            onSubmit={() => setClickedSignIn(true)}
                        >
                            <label className="flex flex-col gap-1 mb-4">
                                <Text size="2" weight="bold">
                                    Email
                                </Text>
                                <TextField.Root
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    defaultValue={signInWithEmailFormState.email}
                                    placeholder="Enter your email"
                                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    required
                                />
                            </label>
                            <label className="flex flex-col gap-1 mb-4">
                                <Text size="2" weight="bold">
                                    Password
                                </Text>
                                <TextField.Root
                                    name="password"
                                    type="password"
                                    defaultValue={signInWithEmailFormState.password}
                                    placeholder="Enter your password"
                                    required
                                />
                            </label>
                            {signInWithEmailFormState.error && (
                                <Flex direction="column" gap="1" className="mb-4">
                                    <Text size="2" color="red">
                                        {signInWithEmailFormState.error}
                                    </Text>
                                </Flex>
                            )}
                            <button
                                className='w-full text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md hover:border-[var(--red-10)] relative flex items-center justify-center gap-2'
                                type="submit"
                            >
                                {clickedSignIn ? (
                                    <>
                                        <div className="animate-spin text-[var(--red-10)] h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                                        <span>Logging in</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Log in</span>
                                    </>
                                )}
                            </button>
                        </form>
                        <Flex align='end' justify='end'>
                            <Link href="/forgot-password" className="hover:underline">Forgot your password?</Link>
                        </Flex>
                        <Flex align="center" gap="3" my="2">
                            <Separator size="4" />
                            <Text size="2">OR</Text>
                            <Separator size="4" />
                        </Flex>
                        <form
                            action={signInWithGoogle}
                            onSubmit={() => setClickedSignInWithGoogle(true)}
                        >
                            <button
                                className='w-full text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md hover:border-[var(--red-10)] relative flex items-center justify-center gap-2'
                                type="submit"
                            >
                                {clickedSignInWithGoogle ? (
                                    <>
                                        <div className="animate-spin text-[var(--red-10)] h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                                        <span>Logging in with Google</span>
                                    </>
                                ) : (
                                    <>
                                        <Google />
                                        <span>Log in with Google</span>
                                    </>
                                )}
                            </button>
                        </form>
                        <form
                            action={signOutSession}
                            onSubmit={() => setClickedSignOut(true)}
                        >
                            <button
                                className='w-full text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md hover:border-[var(--red-10)] relative flex items-center justify-center gap-2'
                                type="submit"
                            >
                                {clickedSignOut ? (
                                    <>
                                        <div className="animate-spin text-[var(--red-10)] h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                                        <span>Logging out</span>
                                    </>
                                ) : 'Log out'}
                            </button>
                        </form>
                    </Flex>
                </Dialog.Content>
            </Theme>
        </Dialog.Root>
    );
}