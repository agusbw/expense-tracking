import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SigninForm from "@/app/auth/signin/_components/signin-form";
import { buttonVariants } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const page = () => {
  return (
    <section>
      <Card className="w-full mx-4 max-w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>To get full access of the app.</CardDescription>
        </CardHeader>
        <CardContent>
          <SigninForm />
        </CardContent>
        <CardFooter>
          <p>
            Don&apos;t have any account?
            <Link
              href={"/auth/register"}
              className={twMerge(
                buttonVariants({ variant: "link" }),
                "p-0 m-0 ml-1",
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
