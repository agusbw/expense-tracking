import "../globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Expense",
  description: "Generated by create next app",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative flex justify-center items-center">
      <Button className={"absolute top-0 left-0 m-5 lg:m-10"} asChild>
        <Link href={"/"}>
          <ChevronLeft className={"w-5"} /> Back
        </Link>
      </Button>
      {children}
    </div>
  );
}
