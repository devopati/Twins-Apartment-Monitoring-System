import React from "react";
import logo from "../assets/images/logo.svg";
import { VscGraph } from "react-icons/vsc";
import { PiNotepadFill } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";
import { SiExpensify } from "react-icons/si";
import {
  AiOutlineLogout,
  AiOutlineSearch,
  AiOutlineWifi,
} from "react-icons/ai";
import { IoMdAdd, IoMdBulb, IoMdNotifications } from "react-icons/io";
import { BsThermometerSun } from "react-icons/bs";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-0 divide-x-2 ">
      <div className=" bg-blue-500 text-slate-100   px-5 flex justify-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="h-16 w-16 p-1 rounded-full ring-slate-100 ring-2 mt-5 bg-blue-400 flex items-center justify-center">
            <img src={logo} alt="" className="h-7 w10" />
          </div>
          <div className="flex flex-col gap-10 items-center mt-14">
            <Link
              to={"consumption"}
              className="flex flex-col gap-1 justify-center items-center hover:text-slate-400"
            >
              <VscGraph size={30} className="mt-0 hover:text-slate-400" />
              <small className="font-bold ">Consumption</small>
            </Link>

            <Link
              to={"expenses"}
              className="flex flex-col gap-1 justify-center items-center hover:text-slate-400"
            >
              <SiExpensify size={30} className="mt-0 hover:text-slate-400" />
              <small className="font-bold ">Expenses</small>
            </Link>

            <Link
              to={"records"}
              className="flex flex-col gap-1 justify-center items-center hover:text-slate-400"
            >
              <PiNotepadFill size={30} className="mt-0 hover:text-slate-400" />
              <small className="font-bold ">Records</small>
            </Link>

            <Link
              to={"settings"}
              className="flex flex-col gap-1 justify-center items-center hover:text-slate-400"
            >
              <RiSettings5Fill size={30} className="hover:text-slate-400" />
              <small className="font-bold ">Settings</small>
            </Link>

            <Link className="flex flex-col gap-1 justify-center items-center hover:text-slate-400">
              <AiOutlineLogout size={30} className="hover:text-slate-400" />
              <small className="font-bold ">Logout</small>
            </Link>
          </div>
        </div>
      </div>

      <div className=" bg-slate-100 col-span-8 p-8">
        <p class="text-slate-300 font-semibold mb-6">Dashboard</p>
        <Outlet />
        <br />
      </div>

      <div className=" bg-blue-100 col-span-3 p-8 flex flex-col gap-7 border-slate-300">
        <div className="flex justify-between items-center">
          <div className="relative">
            <IoMdNotifications size={26} className="text-slate-600" />
            <div className=" bg-red-400 h-2 w-2 rounded-full absolute top-0 left-3"></div>
          </div>
          <div className="flex gap-2">
            <HiUserCircle size={42} className="text-slate-600" />
          </div>
        </div>

        <div className="relative">
          <input
            type="serch"
            id="serch"
            name="serch"
            autoComplete="serch"
            required
            placeholder="Search for records"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:to-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-9"
          />
          <AiOutlineSearch className="absolute top-2.5 left-3 text-slate-500" />
        </div>

        <div className="flex justify-between items-center mx-3">
          <div className="flex gap-1 flex-col items-center">
            <BsThermometerSun size={30} className="text-slate-600" />
            <small className="font-semibold text-base text-slate-600">
              Tempreature
            </small>
            <small className="font-bold text-lg text-slate-600">26°</small>
          </div>
          <div className="flex gap-1 flex-col items-center">
            <MdOutlineWaterDrop size={30} className="text-slate-600" />
            <small className="font-semibold text-base text-slate-600">
              Humidity
            </small>
            <small className="font-bold text-lg text-slate-600">20%</small>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-4">
          <small className="text-lg font-semibold text-left">
            Quick access
          </small>

          <div className="flex gap-5 items-center border-slate-400 border-b-2 pb-4">
            <div className="rounded-full bg-slate-700 h-14 w-14 flex items-center justify-center">
              <BiSolidLock className="text-slate-100" size={32} />
            </div>
            <div className="flex flex-col gap-0 items-start">
              <small className="font-semibold text-base">Security</small>
              <small>Partial lock</small>
            </div>
          </div>

          <div className="flex gap-5 items-center border-slate-400 border-b-2 pb-4">
            <div className="rounded-full bg-slate-700 h-14 w-14 flex items-center justify-center">
              <IoMdBulb className="text-slate-100" size={32} />
            </div>
            <div className="flex flex-col gap-0 items-start">
              <small className="font-semibold text-base">Lights</small>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <small className="text-slate-700 font-bold text-2xl">3</small>
                  <small className="font-semibold text-xs">ON</small>
                </div>
                <div className="flex flex-col items-center">
                  <small className="text-slate-700 font-bold text-2xl">
                    10
                  </small>
                  <small className="font-semibold text-xs">OFF</small>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center border-slate-400 border-b-2 pb-4">
            <div className="rounded-full bg-slate-700 h-14 w-14 flex items-center justify-center">
              <AiOutlineWifi className="text-slate-100" size={32} />
            </div>
            <div className="flex flex-col gap-0 items-start">
              <small className="font-semibold text-base">WIFI</small>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <small className="text-slate-700 font-bold text-2xl">8</small>
                  <small className="font-semibold text-xs">Devices</small>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center border-slate-400 border-b-2 pb-4">
            <div className="rounded-full bg-slate-700 h-14 w-14 flex items-center justify-center">
              <IoMdAdd className="text-slate-100" size={32} />
            </div>
            <div className="flex flex-col gap-0 items-start">
              <small className="font-semibold text-base">Add</small>
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  {/* <small className="text-slate-700 font-bold text-2xl">8</small>
                  <small className="font-semibold text-xs">Devices</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
