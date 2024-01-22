import Image from "next/image";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Perks({ perk, perkType, description }) {
  return (
    <div className="w-full lg:w-[245px] h-[350px] md:h-[300px] border border-gray-300 shadow-md p-2 hover:scale-105 transition-transform duration-200 flex flex-col justify-between">
      <Image src={perk} width={300} height={300} className="w-full" />
      <p className="font-semibold px-1">{perkType}</p>
      <span>{description}</span>
      <button className="w-full border border-gray-300 flex items-center justify-center p-1 rounded-md hover:scale-105 hover:bg-black hover:text-white transition-transform duration-200">
        <IoIosCheckmarkCircle size={18} />
        Select
      </button>
    </div>
  );
}
