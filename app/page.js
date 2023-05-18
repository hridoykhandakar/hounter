import Image from "next/image";

import { IoLocationSharp } from "react-icons/io5";
import { FaAngleDown, FaSearchLocation } from "react-icons/fa";
import User from "./Components/User";
export default function Home() {
  return (
    <main className="">
      <div className="top container ">
        <section className="top-right w-2/4">
          <Image
            className="absolute  top-0 right-0 -z-50 "
            src="/Images/hero.png"
            height="820"
            width="720"
            style={{ objectFit: "fill" }}
          ></Image>
          <div className="user h-[104px] bg-[#0606] min-w-[100px] absolute bottom-0 right-0"></div>
        </section>
        <section className="top-left w-2/4 max-w-[500px] mt-24">
          <h1 className="text-heading font-semibold text-[40px] capitalize">
            find the place to <br /> live{" "}
            <span className="stroke ">your dreams</span> <br /> easily here
          </h1>
          <p className="mt-6 text-[#626687] text-base">
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </p>
          <form
            className="flex items-center justify-between border border-[#E0E3EB] rounded-full  my-8"
            action=""
          >
            <section className="flex items-center ml-6 w-full">
              <IoLocationSharp style={{ color: "#F59E0B", fontSize: "24px" }} />
              <input
                type="text"
                placeholder="Search for the location you want!"
                className="outline-none py-4 px-3 max-w-3xl placeholder:text-sm flex-grow"
              />
            </section>
            <button className="flex text-[14px] font-semibold gap-1  items-center text-[#ffff] bg-[#10B981] py-3 px-4 rounded-full mr-1">
              search{" "}
              <FaAngleDown style={{ fontSize: "24px", fontWeight: "300" }} />
            </button>
          </form>
          <h3 className="text-[#888B97]">Our Partnership </h3>
          <ul className="flex gap-8 h-[64px] items-center ">
            <li>
              <Image src="/Images/airbnb_logo 3.png" width="64" height="82" />
            </li>
            <li>
              <Image src="/Images/heroicon2.png" width="64" height="82" />
            </li>
            <li>
              <Image
                src="/Images/traveloka_logo 2.png"
                width="64"
                height="82"
              />
            </li>
            <li>
              <Image src="/Images/airbnb_logo 3.png" width="64" height="82" />
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
