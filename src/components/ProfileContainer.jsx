import React from "react";

const ProfileContainer = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col gap-3">
      <small className="text-slate-400 font-semibold">{text1}:</small>
      <div className="bg-slate-50 ring-1 px-6 py-1 rounded shadow-md ring-slate-200">
        <h1 className="text-slate-500 font-semibold">{text2}</h1>
      </div>
    </div>
  );
};

export default ProfileContainer;
