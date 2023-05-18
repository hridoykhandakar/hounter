import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container  z-30 flex justify-between mt-20">
      <div className="logo">
        <Link href="/">
          <Image src="/Images/logo.png" width="115" height="35"></Image>
        </Link>
      </div>
      <ul className="flex font-semibold text-sm text-[#F0F3FD] gap-6">
        <li className="px-4 py-2 bg-white/10 rounded-3xl border border-solid border-white/30 flex items-center ">
          <Link href="/">About Us</Link>
        </li>
        <li className="px-4 py-2 bg-white/10 rounded-3xl border border-solid border-white/30 flex items-center ">
          <Link href="/">Article</Link>
        </li>
        <li className="px-4 py-2 bg-white/10 rounded-3xl border border-solid border-white/30 flex items-center ">
          <Link href="/" className="flex gap-2 items-center">
            Property <FaAngleDown size={18} />{" "}
          </Link>
        </li>
        <span className="ml-14 px-6 py-3 bg-[#D1FAE5] rounded-3xl text-[#047857] ">
          <Link href="/">Sign Up!</Link>
        </span>
      </ul>
    </div>
  );
};
export default Navbar;
