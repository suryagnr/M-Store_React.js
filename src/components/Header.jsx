import { assets } from "../assets/assets";

export default function Header() {
  return (
    <>
      <header className="w-full mx-auto grid grid-cols-2 px-5">
        <div className="sm:row-start-2">
          <div className="text-2xl sm:text-3xl font-bold">Mahiwal</div>
          <div className=" text-4xl sm:text-4xl font-bold text-blue">Sparepart</div>
          <div className="text-sm sm:text-base font-light text-grey">
            Order your Phone Sparepart here!
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-2 sm:row-span-3 aspect-square rounded-[100%]">
          <img
            src={assets.header_image}
            className="h-full w-full object-cover"
          />
        </div>
      </header>
    </>
  );
}
