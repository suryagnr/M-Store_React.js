import { useContext } from "react";
import PartItem from "../components/PartItem";
import { StoreContext } from "../context/StoreContext";

export default function Favorit() {
  const { favoriteItems, addFavoriteItems, part_list } =
    useContext(StoreContext);

  return (
    <div className="flex min-h-full w-full flex-col items-center justify-start px-5">
      <div className="w-full">
        <h1 className=" text-center text-xl font-medium">Favorite</h1>
      </div>
      <div className="mt-5 h-full w-full">
        {part_list.map((item, index) => {
          if (favoriteItems[item._id]) {
            return (
              <PartItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                tags={item.tags}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
