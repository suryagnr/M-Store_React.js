import { useState } from "react";
import { menu_list } from "../assets/assets";

export default function MenuExplore({ category, setCategory }) {
  return (
    <div className="mt-5 px-5">
      <h2 className="py-3 text-2xl font-bold">What would you like to order</h2>

      <div className="no-scrollbar flex items-center justify-start gap-3 overflow-x-auto">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              className={`flex h-[98px] w-[60px] cursor-pointer flex-col items-center justify-between rounded-full ${category === item.menu_name ? "bg-blue text-white" : "bg-white"} p-1 transition-all`}
            >
              <div className="aspect-square w-[50px] rounded-full bg-white">
                <img src={item.menu_image} className="object-cover" alt="" />
              </div>
              <h3 className="mb-[13px] text-[10px] font-medium">
                {item.menu_name}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
