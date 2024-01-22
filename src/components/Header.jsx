import React from "react";
import { FaRegBell } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Avatar } from "@mui/material";

export default function Header() {
  return (
    <div className="p-2 flex gap-2 justify-end items-center border border-gray-300">
      <FaRegBell size={23} />
      <CiMail size={23} />
      <Avatar alt="profile" sizes="md" />
      <p className="font-semibold">User</p>
    </div>
  );
}
