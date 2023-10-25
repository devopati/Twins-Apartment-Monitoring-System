import React from "react";

const DashContainer = ({ background, text, text2, Icon }) => {
  return (
    <div
      className={`flex ${background} w-60 rounded px-3 py-2 items-center gap-2 shadow-lg justify-between`}
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-semibold text-slate-50">{text}</h2>
        <h2 className="text-xl font-semibold text-slate-50 ">{text2}</h2>
      </div>

      <div>{Icon && <Icon size={38} color="white" />}</div>
    </div>
  );
};

export default DashContainer;
