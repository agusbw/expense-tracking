import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/components/auth/register/register-form";
import { buttonVariants } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="w-full mx-4 max-w-[500px]">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>Create your account and explore.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p>
            Already have an account?
            <Link
              href={"/login"}
              className={twMerge(
                buttonVariants({ variant: "link" }),
                "p-0 m-0 ml-1"
              )}
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
export default page;
