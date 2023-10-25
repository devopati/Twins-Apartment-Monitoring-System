import React, { useEffect, useRef, useState } from "react";
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
import { RxDashboard } from "react-icons/rx";
import { HiUserCircle } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";
import "./darshboard.css";
import AddDevicePopup from "../components/AddDevicePopup";
import DeviceComponent from "../components/DeviceComponent";
import NewDeviceSpecs from "../components/NewDeviceSpecs";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { DevicesToAdd } from "../Data/DevicesToAdd";
import {
  GetAllDevices,
  GetSingleDevice,
  RemoveDevice,
} from "../redux/slices/DeviceSlice";
import { GetSpecificIcon } from "../utils/GetSpecificIcon";
import NoDevices from "../components/NoDevices";
import ViewDeviceComponent from "../components/ViewDeviceComponent";
import NotifyHanger from "../components/NotifyHanger";

const Dashboard = () => {
  const dispatch = useDispatch();

  const profileData = JSON.parse(localStorage.getItem("user"));

  const [addDeviceVisible, setAddDeviceVisible] = useState(false);
  const [newDeviceVisible, setNewDeviceVisible] = useState(false);
  const [viewDeviceActive, setViewDeviceActive] = useState(false);
  const [notifierActive, setNotifierActive] = useState(false);
  const [deviceIdentifier, setDeviceIdentifier] = useState({});
  const [currentDevice, setCurrentDevice] = useState({});

  const { isLoading, devices, deviceRemoved, removingDevice } = useSelector(
    (state) => state.device
  );

  useEffect(() => {
    (async () => {
      await dispatch(GetAllDevices(profileData?._id));
    })();
  }, []);

  useEffect(() => {
    if (deviceRemoved) {
      setViewDeviceActive(false);
      setNotifierActive(false);
      (async () => {
        await dispatch(GetAllDevices(profileData?._id));
      })();
    }
  }, [dispatch, deviceRemoved, removingDevice]);

  return (
    <div
      className={`grid grid-cols-12 gap-0 divide-x-2 h-screen transition-all`}
    >
      <div
        className={` bg-blue-500 text-slate-100   px-5 flex justify-center `}
      >
        <div className="flex flex-col gap-4 items-center fixed ">
          <div className="h-16 w-16 p-1 rounded-full ring-slate-100 ring-2 mt-5 bg-blue-400 flex items-center justify-center">
            <img src={logo} alt="" className="h-7 w10" />
          </div>
          <div className="flex flex-col gap-10 items-center mt-14">
            <Link
              to={""}
              className="flex flex-col gap-1 justify-center items-center hover:text-slate-400"
            >
              <RxDashboard size={30} className="mt-0 hover:text-slate-400" />
              <small className="font-bold ">Dashboard</small>
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

      <div className={` bg-slate-100 col-span-8 p-8  `}>
        <p class="text-slate-300 font-semibold mb-6">Dashboard</p>

        <div>
          <div
            className={`absolute w-max left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 ${
              addDeviceVisible ? " z-50" : "z-0"
            }`}
          >
            <AddDevicePopup
              visible={addDeviceVisible}
              onClosePress={() => setAddDeviceVisible(false)}
              setDeviceIdentifier={setDeviceIdentifier}
              setNewDeviceVisible={setNewDeviceVisible}
            />
          </div>

          <div
            className={`absolute w-max left-2/3 top-1/4 transform -translate-x-2/3 -translate-y-1/4 ${
              newDeviceVisible ? " z-50" : "z-0"
            }`}
          >
            <NewDeviceSpecs
              visible={newDeviceVisible}
              Icon={deviceIdentifier?.icon}
              identifierName={deviceIdentifier?.name}
              identifier={deviceIdentifier}
              onClosePress={() => setNewDeviceVisible(false)}
              setNewDeviceVisible={setNewDeviceVisible}
              setAddDeviceVisible={setAddDeviceVisible}
            />
          </div>

          <div
            className={`absolute w-max left-1/3 top-2/4 transform -translate-x-1/4 -translate-y-2/4 ${
              notifierActive ? " z-50" : "z-0"
            }`}
          >
            <NotifyHanger
              visible={notifierActive}
              onClosePress={() => setNotifierActive(false)}
              onRemoveDeviceClick={() =>
                (async () => await dispatch(RemoveDevice(currentDevice?._id)))()
              }
            />
          </div>

          <div
            className={`absolute w-max left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 ${
              viewDeviceActive ? " z-40" : "z-0"
            }`}
          >
            <ViewDeviceComponent
              visible={viewDeviceActive}
              onClosePress={() => setViewDeviceActive(false)}
              currentDevice={currentDevice}
              Icon={GetSpecificIcon(currentDevice?.identifier?.name)[0]?.icon}
              onRemoveDeviceClick={() => setNotifierActive(true)}
            />
          </div>

          <Outlet />
        </div>
      </div>

      <div
        className={` bg-blue-100 col-span-3 p-8 flex flex-col gap-7 border-slate-300 overflow-y-auto `}
      >
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
          <div className="flex justify-between items-center">
            <small className="text-lg font-semibold text-left">
              My devices
            </small>
            <div
              className="rounded-full bg-blue-500 h-6 w-6 flex items-center justify-center cursor-pointer"
              onClick={() => {
                window.scrollTo(0, 0);
                setAddDeviceVisible(true);
              }}
            >
              <IoMdAdd className="text-slate-100" size={24} />
            </div>
          </div>
          {devices.length > 0 &&
            !isLoading &&
            devices.map((item) => {
              return (
                <div key={item?._id}>
                  <DeviceComponent
                    name={item?.uniqueName}
                    Icon={GetSpecificIcon(item?.identifier?.name)[0]?.icon}
                    onViewDeviceClick={() => {
                      setCurrentDevice(item);
                      setViewDeviceActive(true);
                      (async () => {
                        await dispatch(GetSingleDevice(item?._id));
                      })();
                    }}
                  />
                </div>
              );
            })}
          {isLoading && <LoadingSpinner />}

          {devices.length < 1 && !isLoading && (
            <NoDevices
              onAddPress={() => setAddDeviceVisible(true)}
              onReloadPress={() =>
                (async () => {
                  await dispatch(GetAllDevices(profileData?._id));
                })()
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
