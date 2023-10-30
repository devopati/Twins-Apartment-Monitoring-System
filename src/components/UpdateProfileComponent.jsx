import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import InputField from "./InputField";

const UpdateProfileComponent = ({
  onClosePress,
  visible,
  setUpdateProfileActive,
}) => {
  const profileData = JSON.parse(localStorage.getItem("user"));

  const [fullName, setFullName] = useState(profileData?.fullName);
  const [phoneNumber, setPhoneNumber] = useState(profileData?.phoneNumber);
  return (
    <div
      className={`bg-slate-100 py-3 px-4 w-full shadow-xl rounded flex flex-col gap-4 pb-6 ${
        visible ? "visible" : "invisible"
      }`}
    >
      <div
        className="flex justify-end cursor-pointer hover:rounded-full hover:bg-red-300 p-2 self-end transition-all"
        onClick={onClosePress}
      >
        <AiOutlineClose size={24} className="flex text-red-700" />
      </div>
      <h1 className="text-slate-600 font-bold text-xl px-12">
        Update your profile information
      </h1>

      <div className="flex flex-col gap-4">
        <InputField
          label={"Full name:"}
          value={fullName}
          onChangeHandler={(e) => setFullName(e.target.value)}
        />
        <InputField
          label={"Phone number:"}
          value={phoneNumber}
          onChangeHandler={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="self-end mt-3">
        <button
          className=" py-1 px-4 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400 "
          onClick={() => setUpdateProfileActive(false)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateProfileComponent;
