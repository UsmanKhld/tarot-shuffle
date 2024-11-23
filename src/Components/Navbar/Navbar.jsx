import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineBank,
  AiOutlineLineChart,
} from "react-icons/ai";
import { CiBitcoin, CiSettings } from "react-icons/ci";
import { GiCardPickup } from "react-icons/gi";
import { IoAlertCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbCards } from "react-icons/tb";

export const Navbar = () => {
  const menuItems = [
    { title: "Pick Cards", icon: <GiCardPickup size={24} />, path: "/" },
    { title: "Decks", icon: <TbCards size={24} />, path: "/decks" },
    { title: "Settings", icon: <CiSettings size={26} />, path: "/crypto" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen z-10">
      <div className="h-full bg-white shadow-2xl w-20 hover:w-64 transition-all duration-300">
        <div className="p-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-4 text-gray-900 hover:text-black hover:bg-gray-200 p-3 rounded-lg transition-colors duration-200"
                  >
                    <span className="min-w-[24px]">{item.icon}</span>
                    <span className="whitespace-nowrap overflow-hidden">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
