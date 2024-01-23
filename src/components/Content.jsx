import React from "react";
import Plans from "./Plans";
import { BsCupFill } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import MainContent from "./MainContent";

export default function Content() {
  return (
    <div className="flex h-screen flex-col md:flex-row overflow-scroll no-scrollbar">
      <div className="flex-1 md:flex-[0.9] border border-gray-300 p-4 md:px-20 md:py-8 flex justify-center">
        <MainContent />
      </div>
      <div className="flex-[0.3] p-2 border border-gray-300">
        <p className="font-semibold text-lg">Plan</p>
        <Plans Icon={BsCupFill} type="Starter" amount="$79" />
        <Plans Icon={FaRegBell} type="Basic" amount="$149" />
        <Plans Icon={FiTarget} type="Professional" amount="$249" />
      </div>
    </div>
  );
}
