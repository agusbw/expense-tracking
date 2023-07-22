"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "../darkmode-toggle";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="w-full flex items-center justify-between">
      <Link href="/">
        <p className="font-semibold">ExpenseApp</p>
      </Link>
      <div className="flex gap-2">
        <ModeToggle />
        {session ? (
          <Button onClick={() => signOut()}>Sign out</Button>
        ) : (
          <Button onClick={() => signIn()}>Sign in</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
