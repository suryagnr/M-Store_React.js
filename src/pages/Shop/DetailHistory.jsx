import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { part_list, reOrderFromHistory, orderHistory } =
    useContext(StoreContext);

  const formatNumber = (num) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
  };

  const { id } = useParams();

  const selectedHistory = orderHistory.find((item) => item.id === id);

  const reOrder = () => {
    reOrderFromHistory(selectedHistory.item);
  };

  return (
    <div className="h-full w-full px-5 mb-32">
      <h1 className="mb-5 text-center text-lg font-medium ">History</h1>
      <div className="flex flex-col gap-3 ">
        {part_list.map((item, index) => {
          if (selectedHistory.item[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="grid grid-cols-3 grid-rows-2 items-center justify-center rounded-[20px] bg-white px-2 py-1"
              >
                <div className="row-span-2 h-[82px] w-[82px] overflow-hidden rounded-[20px]">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="col-span-2 flex justify-between">
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-grey">
                      {item.tags[0]}, {item.tags[1]}
                    </p>
                  </div>
                  <div>
                    <p>
                      {selectedHistory.item[item._id]}{" "}
                      {selectedHistory.item[item._id] > 1 ? "items" : "item"}
                    </p>
                  </div>
                </div>
                <div className="col-span-2 flex items-center justify-between text-grey">
                  <div className="flex flex-1 items-center justify-between gap-2">
                    <p>
                      total cost : {selectedHistory.item[item._id]} x $
                      {item.price}
                    </p>
                    <h2 className="text-xl font-semibold text-blue">
                      <span className="text-base">$</span>
                      {item.price * selectedHistory.item[item._id]}
                    </h2>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="mt-7 flex flex-col gap-2">
        <div className="flex justify-between text-lg font-medium">
          <h2>Subtotal</h2>
          <h2>
            ${selectedHistory.subTotal}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <h2>Tax and Fees</h2>
          <h2>
            ${selectedHistory.tax}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <h2>Delivery</h2>
          <h2>
            ${selectedHistory.delivery}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <h2>
            Total
            <span className="text-sm text-grey">
              {" "}
              (
              {` ${Object.keys(selectedHistory.item).length} ${Object.keys(selectedHistory.item).length > 1 ? "items" : "item"}`}
              )
            </span>
          </h2>
          <h2>
            ${selectedHistory.total}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="mt-8">
        <div className="flex justify-between text-lg font-medium">
          <h2>Your money</h2>
          <h2>
            ${selectedHistory.money}{" "}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <h2>Total</h2>
          <h2>
            ${selectedHistory.total}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
        <div className="my-2 flex items-center justify-end gap-2">
          <div className="h-[2px] w-20 bg-black"></div>
          <div className="h-[2px] w-2 bg-black"></div>
        </div>
        <div className="flex justify-between text-lg font-medium">
          <h2>Your change</h2>
          <h2>
            ${formatNumber(selectedHistory.money - selectedHistory.total)}
            <span className="ml-1 text-sm text-grey">USD</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink
          to={`/m-store/shop`}
          onClick={() => reOrder()}
          className="fixed bottom-[90px] flex h-[53px] w-[167px] cursor-pointer items-center justify-between rounded-full bg-blue p-2"
        >
          <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest text-white">
            Re-Order
          </div>
        </NavLink>
      </div>
    </div>
  );
}
