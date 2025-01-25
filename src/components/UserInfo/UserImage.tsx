"use client";
import React, { useRef, useState } from "react";
import user from "@/assets/images/avatar-04.png";
import Image, { StaticImageData } from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
export default function UserImage() {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [image, setImage] = useState<string | StaticImageData>(user);
  const t = useTranslations("Image");
  const ref = useRef<HTMLInputElement>(null);
  function handleImageChange() {
    if (ref.current) {
      if (ref.current.files && ref.current.files.length > 0) {
        const file = ref.current.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e && e.target) {
              setImage(e.target.result as string);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }
  }
  return (
    <div className="relative py-12 bg-white dark:bg-[#1E1E1E] dark:text-white   rounded-[20px]  shadow-[0px_2px_4px_rgba(0,0,0,0.30)]">
      <div
        className="absolute top-0 right-0 p-2 cursor-pointer"
        onClick={() => setIsImageOpen(!isImageOpen)}
      >
        <IoSettingsOutline size={25} />
      </div>
      {isImageOpen && (
        <div className="absolute top-6 end-0   cursor-pointer text-mainColor">
          <p className="p-2" onClick={() => ref.current?.click()}>
          {t("Change")} 
          </p>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={ref}
            onChange={handleImageChange}
          />
        </div>
      )}
      <div className="flex justify-center items-center flex-col">
        <div className="rounded-full   border-4">
          <Image
            src={image}
            alt="user"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="text-mainColor text-h5 font-semibold">{t("user")}</p>
          <p className="text-textColor dark:text-white  font-semibold text-h6">
            {" "}
            {t("email")}
          </p>
        </div>
      </div>
    </div>
  );
}
