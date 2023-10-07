import React, { useEffect, useState } from "react";
import reglogo from "../assets/images/register.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginUser,
  SET_ERR_MSG,
  SET_SUCC_MSG,
} from "../redux/slices/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isLoggedIn, isLoading, errMessage, profileData } = useSelector(
    (state) => state.auth
  );

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const [emptyFieldsErr, setEmptyFieldsErr] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      setEmptyFieldsErr(true);
      setTimeout(() => {
        setEmptyFieldsErr(false);
      }, 3000);
      return;
    }

    await dispatch(LoginUser(userData));
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [profileData, dispatch]);
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-16 lg:px-8 ring-1 w-1/2 ring-gray-900/5 shadow-xl rounded-lg ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={reglogo} alt="" className="mx-auto  w-auto h-14" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="my-3 flex justify-center">
          {emptyFieldsErr && (
            <small className="text-center text-red-500">
              All fields are required
            </small>
          )}
        </div>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-600"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={userData.email}
                onChange={onChangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:to-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-600"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-500 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={userData.password}
                onChange={onChangeHandler}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div>
            <button
              onClick={!isLoading && onSubmitHandler}
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLoading ? "Processing..." : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
