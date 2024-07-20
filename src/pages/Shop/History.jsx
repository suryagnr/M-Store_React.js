import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { GoDotFill } from "react-icons/go";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { part_list, orderHistory } = useContext(StoreContext);

  const { id } = useParams();

  const formatNumber = (num) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
  };

  const isEmptyHistory = Object.keys(orderHistory).length === 0;

  return (
    <div>
      {isEmptyHistory ? (
        <div className="mt-72 flex  w-full items-center justify-center text-center">
          There is no item in your history
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col gap-5 ">
            {orderHistory.map((item) => {
              if (orderHistory) {
                return (
                  <div
                    key={item.id}
                    className="flex flex-wrap items-center  justify-between gap-3 rounded-[20px] bg-white px-2 py-2"
                  >
                    {/* image container */}
                    <div className="row-span-3 h-[90px] w-[90px] overflow-hidden rounded-[20px]">
                      <img
                        src={part_list[Object.keys(item.item)[0] - 1].image}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="flex h-[90px] flex-1 flex-col justify-evenly px-1">
                      {/* 1  */}
                      <div className="col-span-2 flex justify-between">
                        <div className="flex flex-col items-start justify-center text-sm text-grey md:flex-row md:items-center md:gap-2">
                          <p className="">{item.date}</p>
                          <div className="flex items-center justify-start gap-2">
                            <GoDotFill className=" " />
                            <p>
                              {Object.keys(item.item).length}{" "}
                              {Object.keys(item.item).length <= 1
                                ? "item"
                                : "items"}
                            </p>
                          </div>
                        </div>

                        <div className="text-lg font-semibold text-blue">
                          <h2>${item.total}</h2>
                        </div>
                      </div>
                      {/* 2 */}
                      <div>
                        <h2 className="font-semibold">Id : #{item.id}</h2>
                      </div>
                      {/* 3 */}
                      <div className="col-span-2 flex items-center gap-1 text-blue">
                        <GoDotFill />
                        <p>Order delivered</p>
                      </div>
                    </div>

                    {/* 4 */}
                    <div className="col-span-3 flex flex-1 justify-around px-6">
                      <NavLink
                        to={`${item.id}`}
                        className="flex h-[43px] w-full cursor-pointer items-center justify-between rounded-full border border-grey-50 bg-white p-2 text-blue hover:bg-blue hover:text-white sm:min-w-[200px]"
                      >
                        <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest ">
                          See detail
                        </div>
                      </NavLink>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}
