import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/components/auth/login/login-form";
import { buttonVariants } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const page = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="w-full mx-4 max-w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>To get full access of the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p>
            Don&apos;t have any account?
            <Link
              href={"/register"}
              className={twMerge(
                buttonVariants({ variant: "link" }),
                "p-0 m-0 ml-1"
              )}
            >
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
export default page;
