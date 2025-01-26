import React from "react";
import ThemeToggle from "../DarkMode/ThemeToggle";
import { useTranslations } from "next-intl";
import { UserInfoProps } from "@/Types/btn";
export default function UserInfo({ userInfo }: UserInfoProps) {
  const t = useTranslations("Information");
  return (
    <div className="py-14 px-10 rounded-[20px] bg-white dark:bg-[#1E1E1E] dark:text-white shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
      <div className="flex flex-col gap-y-3">
        <h3 className="text-h5 font-semibold">{t("Information")}</h3>
        <div>
          <p className="space-x-4">
            <span className="font-semibold">{t("Name")}:</span>
            <span>{userInfo.Name} {userInfo.LastName}</span>
          </p>
        </div>
        <div>
          <p className="space-x-4">
            <span className="font-semibold">{t("Email")}:</span>
            <span>{userInfo.email}</span>
          </p>
        </div>
        <div>
          <p className="space-x-4">
            <span className="font-semibold">{t("Tel")}</span>
            <span>{userInfo.phone}</span>
          </p>
        </div>
        <div>
          <p className="space-x-4">
            <span className="font-semibold">{t("Plan")}</span>
            <span> {t("PlanEx")}</span>
          </p>
        </div>
        <h3 className="text-h5 font-semibold mt-4"> {t("Preferences")}</h3>
        <div>
          <p className="space-x-4">
            <span className="font-semibold">{t("Plan")}:</span>
            <span> {t("PlanEx")}</span>
          </p>
        </div>
        <div className="flex  gap-4 items-center">
          <span className="font-semibold"> {t("Light/Dark")}:</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
