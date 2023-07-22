"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RegisterForm from "@/components/auth/register/register-form";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <section className="flex justify-center items-center">
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
            <Button
              variant={"link"}
              onClick={() => signIn()}
            >
              Signin
            </Button>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};
export default page;
