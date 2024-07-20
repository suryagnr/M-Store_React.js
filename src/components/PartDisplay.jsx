import { useContext } from "react";
import PartItem from "./PartItem";
import { StoreContext } from "../context/StoreContext";

export default function PartDisplay({ category }) {
  const { part_list } = useContext(StoreContext);
  return (
    <main className="px-5">
      <div>
        {part_list.map((item, index) => {
          if (category === "All" || category === item.category) {
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
    </main>
  );
}
