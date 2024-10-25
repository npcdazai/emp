import { HiOutlineNewspaper } from "react-icons/hi";
import { TbBrandMedium, TbSquareRoundedFilled } from "react-icons/tb";
import {
  RiCustomerService2Fill,
  RiLogoutBoxLine,
  RiMoneyDollarBoxLine,
} from "react-icons/ri";
import { RiExchangeBoxLine } from "react-icons/ri";
import { VscSymbolClass } from "react-icons/vsc";
import { FiHome, FiUsers } from "react-icons/fi";
import {MdLogout, MdOutlineEditCalendar, MdOutlinePolicy, MdOutlineTaskAlt, MdWorkspacesOutline } from "react-icons/md";
import {  GrNotification } from "react-icons/gr";
import HomeIcon from "../assets/homeIcon.png"
import { PiReceiptBold } from "react-icons/pi";
import { PiCopySimple } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { MdOutlineLiveHelp } from "react-icons/md";


export const nav = [

  {
    title: "Home",
    Icon: FiHome,
    path: "/home",
    submenu: [
      {
        title: "Report",
        path: "/reports",
        icon: TbSquareRoundedFilled,
        colorCode:"#70a1ff"
      },
      {
        title: "Requests",
        path: "/requests",
        icon: TbSquareRoundedFilled,
        colorCode:"#7bed9f"
      },
    ],
    type: "accordion",
  },

  {
    title: "Expenses",
    type: "single",
    path: "/expenses",
    Icon: PiReceiptBold,
  },
  {
    title: "Benefit",
    type: "single",
    path: "/benefit",
    Icon: PiCopySimple,
  },
  {
    title: "Gifts",
    type: "single",
    path: "/gifts",
    Icon: GoGift,
  },
  {
    title: "Help & Support",
    type: "single",
    path: "/help-support",
    Icon: RiCustomerService2Fill,
  },
  {
    title: "Logout",
    type: "single",
    path: "/",
    Icon: MdLogout,
  },
];

export const nestedNav = [
  {
    title: "MAIN MENU",
    type: "accordion",
    accArray: [
      {
        title: "Master",
        submenu: [
          {
            title: "Sponser",
            path: "/sponser",
            icon: RiMoneyDollarBoxLine,
          },
          {
            title: "Exchange rate",
            path: "/exchange-rate",
            icon: RiExchangeBoxLine,
          },
          {
            title: "Asset classes",
            path: "/view",
            icon: VscSymbolClass,
          },
        ],
        type: "accordion",
        Icon: TbBrandMedium,
      },
      {
        title: "User",
        submenu: [
          {
            title: "Sponser",
            path: "/loop",
            icon: TbBrandMedium,
          },
          {
            title: "Class",
            path: "/class",
            icon: TbBrandMedium,
          },
          {
            title: "View",
            path: "/view",
            icon: TbBrandMedium,
          },
        ],
        type: "accordion",
        Icon: HiOutlineNewspaper,
      },
    ],
  },
  {
    title: "User",
    submenu: [
      {
        title: "Sponser",
        path: "/loop",
        icon: TbBrandMedium,
      },
      {
        title: "Class",
        path: "/class",
        icon: TbBrandMedium,
      },
      {
        title: "View",
        path: "/view",
        icon: TbBrandMedium,
      },
    ],
    type: "accordion",
    Icon: FiUsers,
  },
  {
    title: "SPONSER",
    type: "title",
  },
  {
    title: "Single Link",
    type: "single",
    path: "/",
    Icon: HiOutlineNewspaper,
  },
];
