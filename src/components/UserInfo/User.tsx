"use client"
import React, { useEffect, useState } from "react";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import axios from "axios";

export default function User() {
  const [user, setUser] = useState({
    Name: "",
    LastName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get("http://localhost:3001/user");
        setUser(data[0]);
      } catch (error) {
        console.error("Server is down. Using initial data.", error);
        setUser({
          Name: "Default Name",
          LastName: "Default Last Name",
          email: "default@example.com",
          phone: "0000000000",
        });
      }
    }
    getUser();
  }, []);
  return (
    <div className="space-y-8">
      <UserImage userInfo={user}/>
      <UserInfo userInfo={user}/>
    </div>
  );
}
