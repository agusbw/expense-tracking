import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import heroPic from "../../app/assets/insert.svg";

const Hero = () => {
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
          <Button
            asChild
            className="mx-auto"
          >
            <Link href="/login">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
