import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import {
  BsFillBellFill,
  BsGithub,
  BsSearch,
  BsFillPeopleFill,
  BsStars,
} from "react-icons/bs";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { FaFire } from "react-icons/fa6";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "./MenuItem";
import { CiSettings } from "react-icons/ci";

export default function SideNav() {
  return (
    <div className="flex-[0.2] flex flex-col gap-8 h-screen bg-blue-100 p-2 min-w-[200px]">
      <h3 className="text-2xl font-bold">HireMate.</h3>
      <div className="mb-6">
        <MenuItem Icon={IoHomeOutline} name="Home" />
        <MenuItem Icon={BsFillBellFill} name="What's new?" />
      </div>
      <div className="">
        <div className="flex items-center gap-1 bg-white p-1 rounded-md">
          <BsSearch />
          <input
            type="text"
            placeholder="search"
            className="w-full border-none focus:outline-none border-transparent focus:border-transparent focus:ring-0"
          />
        </div>
        <MenuItem Icon={IoHomeOutline} name="Dashboard" />
        <MenuItem Icon={HiOutlineArrowPathRoundedSquare} name="Job track" />
        <MenuItem Icon={FaFire} name="Hot List" />
        <MenuItem Icon={BsGithub} name="Training" />
        <MenuItem Icon={BsStars} name="Pro-Hotlist" />
        <MenuItem Icon={BsFillPeopleFill} name="Personal recruiter" />
      </div>
      <div className="border border-gray-300"></div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="font-semibold">Free trial</p>
          <p className="font-semibold">6 days left</p>
        </div>
        {/* <div className="p-1 bg-green-500 rounded-md"></div> */}
        <LinearProgress
          color="primary"
          variant="determinate"
          className="p-1 rounded-md"
        />
        <p className="font-semibold">Upgrade plan</p>
      </div>
      <div className="p-1 font-semibold flex-flex-col gap-1">
        <p className="p-1 hover:bg-blue-200 hover:scale-105 transition-transform">
          Feedback
        </p>
        <p className="p-1 hover:bg-blue-200 hover:scale-105 transition-transform">
          Chat with us
        </p>
        <div className="flex items-center p-1 hover:bg-blue-200 hover:scale-105 transition-transform">
          <CiSettings />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
}
