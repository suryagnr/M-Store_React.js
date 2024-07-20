import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import {
  FaAngleLeft,
  FaHeart,
  FaPlus,
  FaMinus,
  FaShop,
  FaBagShopping,
} from "react-icons/fa6";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function DetailItem() {
  const { part_list, addToFavorite, favoriteItems, addToCart } =
    useContext(StoreContext);
  const [valueCart, setValueCart] = useState(1);
  const { id } = useParams();

  const selectedItem = part_list.find((item) => item._id === id);

  // Periksa apakah item ditemukan
  if (!selectedItem) {
    return <div>Item tidak ditemukan</div>;
  }

  return (
    <div className="flex w-full  flex-col items-center justify-between gap-2 px-5">
      <div className="relative h-[206px] w-full overflow-hidden rounded-xl">
        <div
          onClick={() => addToFavorite(id)}
          className={`absolute right-3 top-3 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-full ${favoriteItems[id] ? "bg-blue text-white" : "bg-grey-50 text-white"} `}
        >
          <FaHeart />
        </div >
        <div className="relative flex h-[200px] items-center justify-center rounded-b-[18px] bg-white">
        <img src={selectedItem.image} className="h-full w-full object-contain" />
        </div>
      </div>
      <h2 className="self-start text-[28px] font-semibold">
        {selectedItem.name}
      </h2>
      <div className="flex w-full justify-between">
        <h1 className="text-3xl font-semibold text-blue">
          <span className="text text-base">$</span>
          {selectedItem.price * valueCart}
        </h1>
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={() => valueCart > 1 && setValueCart(valueCart - 1)}
            className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-blue bg-white text-blue"
          >
            <FaMinus />
          </div>
          <p>{valueCart}</p>
          <div
            onClick={() => setValueCart(valueCart + 1)}
            className="flex h-7 w-7 items-center justify-center rounded-[50%] border border-blue bg-blue text-white"
          >
            <FaPlus />
          </div>
        </div>
      </div>
      <p className="text-base text-grey">{selectedItem.description}</p>
      <div
        onClick={() => addToCart(selectedItem._id, valueCart)}
        className="absolute bottom-[90px] flex h-[53px] w-[167px] cursor-pointer items-center justify-between rounded-full  bg-blue p-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue">
          <FaBagShopping />
        </div>
        <NavLink
          to={`/m-store/`}
          className="flex flex-1 items-center justify-center text-sm text-white"
        >
          ADD TO CART
        </NavLink>
      </div>
    </div>
  );
}
