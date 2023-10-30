import React from "react";

const NotificationContainer = () => {
  return (
    <div className="ring-1 ring-blue-200 rounded px-2 py-3 shadow-sm bg-slate-100 cursor-pointer hover:bg-slate-300">
      <h1 className="text-slate-500 font-semibold ">Critical consumption</h1>
      <small className="text-slate-300">
        Dinning tv consumes more power...
      </small>
    </div>
  );
};

export default NotificationContainer;
