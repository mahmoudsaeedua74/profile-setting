import { ButtonProps } from "@/Types/btn";
import React from "react";
export default function Button({ children, onClick, style }: ButtonProps) {
  const base =
    "inline-block my-6 text-white font-semibold text-black  rounded-[10px] transition-colors duration-300 tracking-wide   focus:outline-none focus:ring   focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "  btnSave ",
    secondary: base + "   btnPas   ",
  };
  return (
    <button type="submit" className={styles[style]} onClick={onClick}>
      {children}
    </button>
  );
}
