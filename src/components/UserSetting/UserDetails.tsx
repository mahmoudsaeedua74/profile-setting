"use client";
import { UserValues } from "@/Types/btn";
import Button from "@/Ui/Button";
import axios from "axios";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
export default function UserDetails() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  async function postUser(values: UserValues): Promise<void> {
    toast.loading("loading...");
    setIsSubmitting(true);
    try {
      const { data } = await axios.post("http://localhost:3001/user", values);
      setTimeout(() => {
        toast.dismiss();
        toast.success("success...");
        setIsSubmitting(false);
      }, 1000);
      console.log(data,"user details");
    } catch  {
      setTimeout(() => {
        toast.dismiss();
        toast.error("Server is down or an error occurred.");
        setIsSubmitting(false);
      }, 1000);

    }
  }
  const t = useTranslations("UserSetting");
  function validationSchema() {
    return Yup.object({
      Name: Yup.string().required(t("NameError")),
      LastName: Yup.string().required(t("LastNameError")),
      email: Yup.string().email(t("EmailInvalid")).required(t("EmailError")),
      Number: Yup.string().required(t("NumberInvalid")),
    });
  }
  const formik = useFormik({
    initialValues: {
      Name: "",
      LastName: "",
      email: "",
      Number: "",
    },
    validationSchema,
    onSubmit: (values) => {
      postUser(values);
    },
  });
  return (
    <form
      className='className=" text-h5 space-y-2"'
      onSubmit={formik.handleSubmit}
    >
      <p className="font-semibold text-h5 mt-10 mb-6 ">Details</p>
      <div className="flex  gap-12 flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-col 2xl:flex-row   mb-6">
        <div className="flex flex-col gap-y-2">
          <label className="px-3" htmlFor="name">
            {t("Name")}
          </label>
          <input
            className="bg-[#E8E8E8] dark:bg-[#222222]  rounded-[10px] px-5 py-2 focus:outline-none"
            id="name"
            {...formik.getFieldProps("Name")}
            type="text"
            placeholder={t("putName")}
          />
          {formik.touched.Name && formik.errors.Name ? (
            <p className="formError">{formik.errors.Name}</p>
          ) : (
            formik.touched.Name && <p className="formValid">{t("NameValid")}</p>
          )}
        </div>
        <div className="flex flex-col gap-y-2 ">
          <label className="px-3" htmlFor="">
            {t("LastName")}
          </label>
          <input
            className="bg-[#E8E8E8] dark:bg-[#222222] rounded-[10px] px-5 py-2 focus:outline-none"
            id="LastName"
            {...formik.getFieldProps("LastName")}
            type="text"
            placeholder={t("putNameLasd")}
          />
          {formik.touched.LastName && formik.errors.LastName ? (
            <p className="formError">{formik.errors.LastName}</p>
          ) : (
            formik.touched.LastName && (
              <p className="formValid">{t("LastNameValid")}.</p>
            )
          )}
        </div>
      </div>
      <div className="flex  gap-12 flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-col 2xl:flex-row  mb-6">
        <div className="flex flex-col gap-y-2">
          <label className="px-3" htmlFor="email">
            {t("Email")}
          </label>
          <input
            className="bg-[#E8E8E8] dark:bg-[#222222] rounded-[10px] px-5 py-2 focus:outline-none"
            id="email"
            {...formik.getFieldProps("email")}
            type="email"
            placeholder={t("putEmaill")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="formError">{formik.errors.email}</p>
          ) : (
            formik.touched.email && (
              <p className="formValid">{t("EmailValid")}.</p>
            )
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="px-3" htmlFor="Number">
            {t("Number")}
          </label>
          <input
            className="bg-[#E8E8E8] dark:bg-[#222222] mb-3 rounded-[10px] px-5 py-2 focus:outline-none"
            id="Number"
            {...formik.getFieldProps("Number")}
            type="tel"
            placeholder={t("putNumber")}
          />
          {formik.touched.Number && formik.errors.Number ? (
            <p className="formError">{formik.errors.Number}</p>
          ) : (
            formik.touched.Number && (
              <p className="formValid"> {t("NumberError")}.</p>
            )
          )}
        </div>
      </div>

      <Button style="primary" onClick={() => {}}>
        {isSubmitting ? "loading..." : t("btn")}
      </Button>
    </form>
  );
}
