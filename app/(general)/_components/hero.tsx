"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroPic from "../../assets/insert.svg";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleOnClick = () => {
    if (!session) signIn();

    if (session) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="container h-[calc(100vh-73.6px)]">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 text-center lg:flex-row-reverse">
        <Image
          src={heroPic}
          alt="hero picture"
          className="w-3/4 mx-auto lg:w-4/12"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold">
            Empower Your Finances: Take Control of Your Expense
          </h1>
          <p>
            Welcome to our user-friendly expense management website, where
            financial freedom is just a click away!
          </p>
          <Button onClick={handleOnClick} className="mx-auto">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
