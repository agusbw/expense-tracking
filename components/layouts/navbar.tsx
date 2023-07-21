import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 py-4 border border-b ">
      <div className="container flex items-center justify-between">
        <p className="font-semibold">ExpenseApp</p>
        <div className="flex gap-2">
          <Link
            href={"/"}
            className={buttonVariants({ variant: "link" })}
          >
            Home
          </Link>
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
