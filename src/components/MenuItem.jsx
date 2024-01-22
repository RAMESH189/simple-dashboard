import React from "react";

export default function MenuItem({ Icon, name }) {
  return (
    <div className="flex gap-1 items-center p-2 hover:bg-blue-200 hover:scale-105 transition-transform cursor-pointer">
      <Icon size={20} />
      <p className="capitalize text-sm font-semibold">{name}</p>
    </div>
  );
}
