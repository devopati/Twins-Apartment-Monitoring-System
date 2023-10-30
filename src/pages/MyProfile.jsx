import React, { useState } from "react";
import ProfileContainer from "../components/ProfileContainer";
import { useNavigate } from "react-router-dom";
import UpdateProfileComponent from "../components/UpdateProfileComponent";

const MyProfile = () => {
  const profileData = JSON.parse(localStorage.getItem("user"));

  const [updateProfileActive, setUpdateProfileActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col ring-slate-200 ring-1 bg-white shadow-md rounded-md px-4 py-5 mx-14 gap-3">
      <h1 className="text-slate-400 my-4 w-max ">My Profile</h1>

      <div className="w-max my-3">
        <ProfileContainer
          text1={"Unique identifier"}
          text2={profileData?._id}
        />
      </div>

      <div className="w-max my-3">
        <ProfileContainer text1={"Email address"} text2={profileData?.email} />
      </div>

      <div className="flex gap-20 my-3">
        <ProfileContainer text1={"Full name"} text2={profileData?.fullName} />
        <ProfileContainer
          text1={"Phone numer"}
          text2={profileData?.phoneNumber}
        />
      </div>

      <div className="w-max my-3">
        <ProfileContainer text1={"Current role"} text2={"System admin"} />
      </div>

      <div className="self-end mt-3">
        <button
          className=" py-1 px-4 rounded-md bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400 "
          onClick={() => setUpdateProfileActive(true)}
        >
          Update profile
        </button>
      </div>

      <div
        className={`absolute w-max left-1/4 top-1/4 transform -translate-x-1/4 -translate-y-1/4 ${
          updateProfileActive ? " z-50" : "z-0"
        }`}
      >
        <UpdateProfileComponent
          visible={updateProfileActive}
          onClosePress={() => setUpdateProfileActive(false)}
          setUpdateProfileActive={setUpdateProfileActive}
        />
      </div>
    </div>
  );
};

export default MyProfile;
