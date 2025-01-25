import Button from "@/Ui/Button";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import React from "react";
import * as Yup from "yup";
export default function UserPassword() {
  const t = useTranslations("PasswordSetting");
  function validationSchema() {
    return Yup.object({
      password: Yup.string().required(t("PasswordRequired")),
      rePassword: Yup.string()
        .oneOf([Yup.ref("password")], t("rePassword"))
        .required(t("rePasswordRequired")),
      newPassword: Yup.string()
        .min(8, t("passwordMatch"))
        .required(t("rePasswordRequired")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], t("rePassword"))
        .required(t("rePasswordRequired")),
    });
  }

  const formik = useFormik({
    initialValues: {
      password: "",
      rePassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form className="text-h5 space-y-6" onSubmit={formik.handleSubmit}>
      <p className="font-semibold text-h5  mt-6 mb-4">{t("Password")}</p>
      <div>
        <label className="px-3" htmlFor="password">
        {t("ChangePassword")}
        </label>
        <div className="flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-col 2xl:flex-row  flex  gap-12 mt-3">
          <div>
            <input
              className="bg-[#E8E8E8] rounded-[10px] px-5 py-2 focus:outline-none"
              id="password"
              {...formik.getFieldProps("password")}
              type="password"
              placeholder={t("PasswordPut")}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="formError">{formik.errors.password}</p>
            ) : (
              formik.touched.password && (
                <p className="formValid">{t("PasswordValid")}</p>
              )
            )}
          </div>
          <div>
            <input
              className="bg-[#E8E8E8] rounded-[10px] px-5 py-2 focus:outline-none"
              id="rePassword"
              {...formik.getFieldProps("rePassword")}
              type="password"
              placeholder={t("confirmPassword")}
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <p className="formError">{formik.errors.rePassword}</p>
            ) : (
              formik.touched.rePassword && (
                <p className="formValid">{t("confirmPasswordValid")}</p>
              )
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="px-3 " htmlFor="newPassword">
        {t("newPassword")}
        </label>
        <div className="flex  flex-col sm:flex-col md:flex-col  lg:flex-row xl:flex-col 2xl:flex-row   gap-12 mt-2 mb-8">
          <div>
            <input
              className="bg-[#E8E8E8] rounded-[10px] px-5 py-2 focus:outline-none"
              id="newPassword"
              {...formik.getFieldProps("newPassword")}
              type="password"
              placeholder={t("putPassword")}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <p className="formError">{formik.errors.newPassword}</p>
            ) : (
              formik.touched.newPassword && (
                <p className="formValid">{t("PasswordValid")}</p>
              )
            )}
          </div>
          <div>
            <input
              className="bg-[#E8E8E8] rounded-[10px] px-5 py-2 focus:outline-none"
              id="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              type="password"
              placeholder={t("confirmPassword")}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="formError">{formik.errors.confirmPassword}</p>
            ) : (
              formik.touched.confirmPassword && (
                <p className="formValid">{t("PasswordValid")}</p>
              )
            )}
          </div>
        </div>
      </div>
      <Button style="secondary">{t("PasswordValid")}</Button>
    </form>
  );
}
