'use client';
import { Dialog, Flex, Separator, Text, TextField, Theme } from "@radix-ui/themes";
import { signInWithGoogle, signOutSession } from "@/actions/auth";
import { useState } from "react";
import { Google } from "@mui/icons-material";

export default function SignInDialog() {
    const [clickedSignIn, setClickedSignIn] = useState(false);
    const [clickedSignOut, setClickedSignOut] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Dialog.Root>
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
                <Dialog.Content maxWidth="450px" size="4" style={{ boxShadow: 'none' }}>
                    <Flex direction="column" gap="3">
                        <label>
                            <Text size="2" mb="1" weight="bold">
                                Email
                            </Text>
                            <TextField.Root
                                defaultValue=""
                                placeholder="Enter your email"
                            />
                        </label>                        <label>
                            <Text size="2" mb="1" weight="bold">
                                Password
                            </Text>
                            <TextField.Root
                                defaultValue=""
                                placeholder="Enter your password"
                            />
                        </label>
                        <Flex align="center" gap="3">
                            <Separator size="4" />
                            <Text size="2">OR</Text>
                            <Separator size="4" />
                        </Flex>
                        <form
                            action={signInWithGoogle}
                        >
                            <button
                                className='w-full text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md hover:border-[var(--red-10)] relative flex items-center justify-center gap-2'
                                type="submit"
                                onClick={() => setClickedSignIn(true)}
                            >
                                {clickedSignIn ? (
                                    <>
                                        <div className="animate-spin text-[var(--red-10)] h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                                        <span>Logging in</span>
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
                        >
                            <button
                                className='w-full text-black dark:text-white px-4 py-2 border-2 border-black dark:border-white rounded-md hover:border-[var(--red-10)] relative flex items-center justify-center gap-2'
                                type="submit"
                                onClick={() => setClickedSignOut(true)}
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