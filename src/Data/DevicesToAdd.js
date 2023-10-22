import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { BiSolidWasher, BiSolidFridge, BiSolidLock } from "react-icons/bi";
import { MdMicrowave } from "react-icons/md";
import { IoMdAdd, IoMdBulb } from "react-icons/io";
import { BsFillRouterFill } from "react-icons/bs";

export const DevicesToAdd = [
  {
    name: "Lights",
    icon: IoMdBulb,
  },
  {
    name: "Television",
    icon: PiTelevisionSimpleDuotone,
  },
  {
    name: "Routers",
    icon: BsFillRouterFill,
  },
  {
    name: "Fridge",
    icon: BiSolidFridge,
  },
  {
    name: "Microwave",
    icon: MdMicrowave,
  },
  {
    name: "Washing Machine",
    icon: BiSolidWasher,
  },
  {
    name: "Security",
    icon: BiSolidLock,
  },
];
