import React from "react";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";

export default function User() {
  return (
    <div className="space-y-8">
      <UserImage />
      <UserInfo />
    </div>
  );
}
