"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { CgPlayPauseR } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineChartBar, HiOutlineDocumentReport } from "react-icons/hi";
import { IoClose, IoMenu } from "react-icons/io5";
import { PiUserFocusThin } from "react-icons/pi";
export default function Navbar() {
  const [navIsOpen, setNavIsOpen] = useState(true);
  const t = useTranslations("MainNav");
  const pathName = usePathname();
  const params = useParams();
  return (
    <>
      <button
        aria-label="toggle Sidebar"
        className="sm:hidden   p-2 w-full dark:text-white   dark:bg-[#222222] "
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        <IoMenu size={25} />
      </button>
      <aside
        id="default-sidebar"
        className={` 
          ${
            navIsOpen
              ? " -translate-x-[100%]  fixed top-0 bottom-0 sm:translate-x-0 sm:static nav "
              : "sm:translate-x-0 sm:static translate-x-0 fixed nav top-0 bottom-0"
          }
          rounded w-full  sm:h-full  transition-all duration-500
            h-full`}
        aria-label="Sidebar text-textColor "
      >
        <div
          className="  py-4  px-6 pt-4 sm:pt-32 sm:px-10  
             bg-white dark:bg-[#1E1E1E] h-full
           dark:text-white"
        >
          <div className={`  font-medium text-h5 my-5 flex justify-between `}>
            <p
              className={`${
                pathName === `/${params.locale}/dashboard`
                  ? "text-mainColor"
                  : "dart:text-white "
              }
            `}
            >
              {t("General")}
            </p>
            <button
              aria-label="Toggle Sidebar"
              className="sm:hidden sticky nav left-5 nav p-2"
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              <IoClose size={25} />
            </button>
          </div>
          <ul className=" font-medium my-2 ">
            <li>
              <Link
                href={`/${params.locale}/dashboard`}
                onClick={() => setNavIsOpen(!navIsOpen)}
                className="flex  items-center py-3  space-x-4   group text-textColor hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5  group-hover:text-mainColor"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3 "> {t("Dashboard")}</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center py-2     group hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200 text-textColor "
              >
                <span className="  group-hover:text-mainColor">
                  <HiOutlineDocumentReport size={25} />
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {t("Reporte")}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center py-2     group hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200 text-textColor "
              >
                <span className=" group-hover:text-mainColor">
                  <HiOutlineChartBar size={25} />
                </span>
                <span className="flex-1 ms-3 ">{t("Reportes")}</span>
              </Link>
            </li>
          </ul>
          <p
            className={`${
              pathName == `/${params.locale}`
                ? "text-mainColor"
                : " dart:text-white"
            }  font-medium text-h5 my-5 dart:text-white `}
          >
            {t("Usuario")}
          </p>
          <ul className=" font-medium my-2 ">
            <li>
              <Link
                href={"/"}
                onClick={() => setNavIsOpen(!navIsOpen)}
                className="
                  flex items-center  py-2   
                    group hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200 text-textColor "
              >
                <span className=" group-hover:text-mainColor">
                  <FaRegUserCircle size={25} />
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {t("Perfil")}
                </span>
              </Link>
            </li>
          </ul>
          <p className="text-primaryColor font-medium text-h5 my-5">
            {t("Administrador")}
          </p>
          <ul className=" font-medium my-2 ">
            <li>
              <Link
                href={"/"}
                className="flex items-center  py-2     group hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200 text-textColor "
              >
                <span className=" group-hover:text-mainColor">
                  <CgPlayPauseR size={25} />
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {t("Control de rutas")}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="flex items-center  py-2 group hover:bg-[#EFE6FA]  hover:text-black hover:border-e-4 hover:border-mainColor hover:px-3 transition-all duration-200 text-textColor "
              >
                <span className=" group-hover:text-mainColor">
                  <PiUserFocusThin size={25} />
                </span>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {t("Control usuarios")}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
