import { HomeIcon, BadgeDollarSign } from "lucide-react";
import { SideBarConfig } from "@/types";

const sideBarConfig: SideBarConfig = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: <HomeIcon className={"w-5 h-5"} />,
  },
  {
    title: "Expense",
    href: "/dashboard/expense",
    icon: <BadgeDollarSign className={"w-5 h-5"} />,
  },
];

export { sideBarConfig };
