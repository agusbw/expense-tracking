"use client";

import { sideBarConfig } from "@/config/site-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  function isActive(href: string) {
    //get path after /dashboard
    const path = pathname.split("/");
    if (href === "/dashboard") {
      return path.length === 2;
    }

    return path[2] === href.split("/")[2];
  }

  isActive("/dashboard/expense");

  return (
    <div className={" w-[350px] border-r shadow-sm min-h-screen"}>
      <p className={"text-center text-3xl font-semibold pt-20 mb-16"}>
        Expense App
      </p>
      <div className={"flex flex-col "}>
        {sideBarConfig.map((menu) => (
          <Link
            key={menu.title}
            href={menu.href}
            className={`flex gap-2 px-8 text-md py-5 transition tracking-wide items-center hover:bg-secondary ${
              isActive(menu.href) && "bg-secondary border-r-4 border-primary/50"
            }`}
          >
            <span className={"text-primary"}>{menu.icon}</span>{" "}
            <span
              className={`${
                isActive(menu.href) && "text-primary font-semibold "
              }`}
            >
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
