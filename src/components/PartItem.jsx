import { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";
import { NavLink } from "react-router-dom";

export default function PartItem({
  id,
  name,
  price,
  description,
  image,
  tags,
}) {
  const { favoriteItems, addToFavorite } = useContext(StoreContext);

  return (
    <div className="mx-auto mt-5 flex h-[247px] flex-col justify-between overflow-hidden rounded-[18px] bg-white">
      <div className="relative flex h-[165px] items-center justify-center rounded-b-[18px] bg-white">
       <img src={image} className="h-full w-full object-contain" alt="" />
        <div className="absolute left-3 top-3 flex h-[34px] w-[72px] items-center justify-center rounded-[121px] bg-white ">
          <p className="font-semibold">
            <span className="text-blue">$</span>
            {price}
          </p>
        </div>
        <div
          onClick={() => addToFavorite(id)}
          className={`absolute right-3 top-3 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full ${favoriteItems[id] ? "bg-blue text-white" : "bg-grey-50 text-white"} `}
        >
          <FaHeart />
        </div>
        <div className="absolute -bottom-[17px] left-3 flex h-[34px] w-[72px] items-center justify-center rounded-[121px] bg-white ">
          <p className="text-[12px] font-semibold">4.5</p>
          <IoMdStar className="relative -top-[2px] text-yellow-80" />
          <p className="text-[8.5px] text-grey">(25+)</p>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col items-start justify-around px-3 py-5">
        <NavLink to={`/m-store/detail/${id}`}>
          <h2 className="text-lg font-semibold">{name}</h2>
        </NavLink>
        <p>
          {tags[0]}, {tags[1]}
        </p>
      </div>
    </div>
  );
}
