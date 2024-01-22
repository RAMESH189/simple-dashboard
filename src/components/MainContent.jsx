import React from "react";
import Perks from "./Perks";
import perk from "../../public/perk.png";
import { Skeleton } from "@mui/material";

export default function MainContent() {
  return (
    <div className="w-full flex flex-col gap-3 overflow-scroll no-scrollbar md:overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-2xl px-1">My Workspace</h2>
        <button className="bg-black text-white px-2 py-1 border border-black rounded-md hover:bg-gray-100 hover:text-black">
          + New Table
        </button>
      </div>
      <input
        type="text"
        placeholder="search for any table"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none border-transparent focus:border-transparent focus:ring-0"
      />
      <p className="px-1 font-semibold">Start here</p>
      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between mx-2">
        <Perks
          perk={perk}
          perkType="Training"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
        />
        <Perks
          perk={perk}
          perkType="Personal Recruiter"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
        />
        <Perks
          perk={perk}
          perkType="Find Jobs and Placement"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit.."
        />
      </div>
      <p className="px-1 font-semibold">Intro</p>
      <div className="flex flex-col md:flex-row gap-1 items-center justify-between">
        <Skeleton
          sx={{ bgcolor: "grey.600" }}
          variant="rectangular"
          width={245}
          height={118}
        />
        <Skeleton
          sx={{ bgcolor: "grey.600" }}
          variant="rectangular"
          width={245}
          height={118}
        />
        <Skeleton
          sx={{ bgcolor: "grey.600" }}
          variant="rectangular"
          width={245}
          height={118}
        />
      </div>
    </div>
  );
}
