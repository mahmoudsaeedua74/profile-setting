import React from "react";
import UserPassword from "./UserPassword";
import UserDetails from "./UserDetails";
import { useTranslations } from "next-intl";
export default function Setting() {
  const t = useTranslations("UserSetting");
  return (
    <section className="rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white  p-5 shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
      <h3 className="text-[20px] font-semibold"> {t("Setting")}</h3>
      <UserDetails />
      <UserPassword />
    </section>
  );
}
