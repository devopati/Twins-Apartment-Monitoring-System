import React from "react";
import NotificationContainer from "../components/NotificationContainer";

const Notifications = () => {
  return (
    <div className="flex flex-col ring-slate-200 ring-1 bg-white shadow-md rounded-md px-4 py-5 mx-14 gap-2">
      <h1 className="text-slate-400 my-4 border-b w-max border-blue-200">
        Notifications
      </h1>
      {/* <NotificationContainer />
      <NotificationContainer />
      <NotificationContainer /> */}

      <small className="text-slate-300 my-10 text-center">
        Notifications will appear here.
      </small>
    </div>
  );
};

export default Notifications;
