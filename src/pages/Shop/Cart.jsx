import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { IoIosClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Cart() {
  const {
    part_list,
    cartItems,
    increaseCartItem,
    decreaseCartItem,
    removeFromCart,
    addOrderToHistory,
  } = useContext(StoreContext);

  const [pay, setPay] = useState({
    subTotal: 0,
    taxAndFees: 0,
    delivery: 5.3,
    total: 0,
  });

  useEffect(() => {
    const calculatedSubTotal = part_list.reduce((acc, item) => {
      if (cartItems[item._id] > 0) {
        return acc + item.price * cartItems[item._id];
      }
      return acc;
    }, 0);

    setPay({
      ...pay,
      subTotal: calculatedSubTotal,
      delivery: Object.keys(cartItems).length * 0.5,
      taxAndFees: calculatedSubTotal * 0.1,
      total: calculatedSubTotal + pay.taxAndFees + pay.delivery,
    });
  }, [cartItems, part_list, pay.delivery, pay.taxAndFees]);

  const updateSubTotal = (newSubTotal) => {
    setPay({
      ...pay,
      subTotal: newSubTotal,
    });
  };

  const formatNumber = (num) => {
    return num % 1 === 0 ? num.toFixed(0) : num.toFixed(1);
  };

  const isEmptyCart = Object.keys(cartItems).length === 0;

  const [money, setMoney] = useState(0);

  const moneyCheck = () => {
    const moneyInput = prompt();
    const moneyAmount = parseFloat(moneyInput);

    if (!isNaN(moneyAmount) && moneyAmount >= pay.subTotal) {
      setMoney(moneyAmount);
    } else {
      alert("Invalid input or not enough money.");
    }
  };

  const [yourChange, setYourChange] = useState(0);

  useEffect(() => {
    setYourChange(money - pay.total);
  }, [money, pay.total]);

  const checkOut = () => {
    if (money <= 0) {
      alert("Please add your money first!");
      return;
    }
    addOrderToHistory(
      cartItems,
      formatNumber(pay.subTotal),
      formatNumber(pay.taxAndFees),
      formatNumber(pay.total),
      money,
      formatNumber(pay.delivery),
    );
    Object.keys(cartItems).forEach((itemId) => removeFromCart(itemId));
  };

  return (
    <div className="mb-10 h-full">
      {isEmptyCart ? (
        <div className="mt-72 flex w-full items-center justify-center text-center">
          There is no item in your cart
        </div>
      ) : (
        <div className="mb-32">
          <div className="flex flex-col gap-3 ">
            {part_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
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
                      <div
                        onClick={() => removeFromCart(item._id)}
                        className="hover:te mt-[2px] flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-blue hover:bg-blue hover:text-white"
                      >
                        <IoIosClose className="text-2xl" />
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-between text-blue">
                      <h2 className="mt-2 text-lg font-semibold">
                        <span className="text-base">$</span>
                        {item.price * cartItems[item._id]}
                      </h2>
                      <div className="flex items-center justify-center gap-2">
                        <div
                          onClick={() => decreaseCartItem(item._id)}
                          className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-blue bg-white text-blue"
                        >
                          <FaMinus />
                        </div>
                        <p>{cartItems[item._id]}</p>
                        <div
                          onClick={() => increaseCartItem(item._id)}
                          className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-blue bg-blue text-white"
                        >
                          <FaPlus />
                        </div>
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
                ${formatNumber(pay.subTotal)}
                <span className="ml-1 text-sm text-grey">USD</span>
              </h2>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <h2>Tax and Fees</h2>
              <h2>
                ${formatNumber(pay.taxAndFees)}
                <span className="ml-1 text-sm text-grey">USD</span>
              </h2>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <h2>Delivery</h2>
              <h2>
                ${formatNumber(pay.delivery)}
                <span className="ml-1 text-sm text-grey">USD</span>
              </h2>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <h2>
                Total
                <span className="text-sm text-grey">
                  {" "}
                  (
                  {` ${Object.keys(cartItems).length} ${Object.keys(cartItems).length > 1 ? "items" : "item"}`}
                  )
                </span>
              </h2>
              <h2>
                ${formatNumber(pay.total)}
                <span className="ml-1 text-sm text-grey">USD</span>
              </h2>
            </div>
          </div>
          <hr className="mt-8" />
          <div className="mt-8">
            <div className="flex justify-between text-lg font-medium">
              <h2>Your money</h2>
              <h2>
                {money >= pay.total ? (
                  <>
                    ${formatNumber(money)}{" "}
                    <span className="ml-1 text-sm text-grey">USD</span>
                  </>
                ) : (
                  <button
                    onClick={() => moneyCheck()}
                    className="mr-4 cursor-pointer rounded-full border bg-blue px-2 text-sm text-white"
                  >
                    add
                  </button>
                )}
              </h2>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <h2>Total</h2>
              <h2>
                ${formatNumber(pay.total)}
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
                ${formatNumber(yourChange)}
                <span className="ml-1 text-sm text-grey">USD</span>
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              onClick={() => checkOut()}
              className="fixed bottom-[90px] flex h-[53px] w-[167px] cursor-pointer items-center justify-between rounded-full bg-blue p-2"
            >
              <div className="flex flex-1 items-center justify-center text-sm font-medium tracking-widest text-white">
                CHECKOUT
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
