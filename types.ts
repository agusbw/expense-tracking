import { JSX } from "react";

export type ActionResponse = {
  status: "success" | "error";
  message: string;
};

export type UserRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SideBarConfig = {
  title: string;
  icon: JSX.Element;
  href: string;
}[];
