"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { AlertCircle, Loader2 } from "lucide-react";
import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const SigninForm = () => {
  const [loginError, setLoginError] = React.useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const callbackUrl = "/dashboard";

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      });

      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setLoginError("Wrong credentials!");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <Form {...form}>
      {loginError && (
        <Alert variant="destructive" className={"mb-4"}>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Sign-in Failed</AlertTitle>
          <AlertDescription>{loginError}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jhon@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <Loader2 className={"animate-spin mr-1"} />
          )}
          Login
        </Button>
      </form>
    </Form>
  );
};
export default SigninForm;
