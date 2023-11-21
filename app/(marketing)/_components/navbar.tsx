"use client"

import Link from "next/link";

import { useConvexAuth } from "convex/react";
import { SignInButton,UserButton} from "@clerk/clerk-react";

import { useScrollTop } from "@/hooks/use-scroll-top";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

import Logo from "./logo";

const Navbar = () => {
    const scrolled = useScrollTop();
    const {isAuthenticated, isLoading} = useConvexAuth();

    return (
        <div className={cn("dark:bg-[#151515] z-50 bg-background fixed top-0 flex items-center w-full p-6", scrolled && 
            "border-b shadow-sm")}>
            <Logo />

            <div className="md:ml-auto md:justify-end 
                justify-between w-full flex items-center gap-x-2">
                    {isLoading && (
                        <Spinner />
                    )}

                    {!isAuthenticated && !isLoading && (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="ghost" size="sm">
                                    Log in
                                </Button>
                            </SignInButton>

                            <SignInButton mode="modal">
                                <Button size="sm">
                                    Get Notion Free
                                </Button>
                            </SignInButton>
                        </>
                    )}

                    {isAuthenticated && !isLoading && (
                        <>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/documents">
                                    Enter Notion
                                </Link>
                            </Button>
                            
                            <UserButton afterSignOutUrl = "/" />
                        </>
                    )}

                    <ModeToggle />
            </div>
        </div>
    )
}

export default Navbar;