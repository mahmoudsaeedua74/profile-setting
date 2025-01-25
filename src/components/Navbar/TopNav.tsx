"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import countryAr from "@/assets/images/egypt.png";
import countryEn from "@/assets/images/kingdom.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export default function TopNav() {
  const t = useTranslations("Navbar");
  const local = useLocale();
  return (
    <nav className="bg-[#292121] dark:bg-[#202020] transition-colors duration-200">
      <div className=" flex justify-between text-white dark:text-white py-5   px-12 ">
        <h1 className="text-h1 font-semibold cursor-pointer">
          {t("User control")}
        </h1>
        <div className="flex gap-3 items-center">
          <Link href={`/${local === "ar" ? "en" : "ar"}`} className={`flex`}>
            <span className={"me-2 "}>{t("language")}</span>
            <Image
              src={local === "ar" ? countryEn : countryAr}
              width={20}
              height={20}
              alt="Egypt Flag"
              className="rounded-full size-5"
            />
          </Link>
          <div className="flex items-center gap-3 cursor-pointer">
            <p className="h1 font-semibold ">{t("User name")}</p>
            <FaUser />
          </div>
        </div>
      </div>
    </nav>
  );
}
