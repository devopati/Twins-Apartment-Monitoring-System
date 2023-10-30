import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../pages/WelcomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Consumption from "../pages/Consumption";
import Expenses from "../pages/Expenses";
import Records from "../pages/Records";
import Settings from "../pages/Settings";
import Notifications from "../pages/Notifications";
import MyProfile from "../pages/MyProfile";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="" element={<Consumption />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="records" element={<Records />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
