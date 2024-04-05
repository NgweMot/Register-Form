import React, { useState } from "react";
import { ContainerComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const res = await Register(formData);
    console.log(res);
  };
  const nav = useNavigate();
  const handleRegister = () => {
    nav("/");
  };
  return (
    <ContainerComponent>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-[400px] h-auto mx-auto bg-gray-200 p-5 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-lg mb-3">Register Your Account</h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter User Name
              </label>
              <input
                onChange={handleInputChange}
                value={formData.name}
                name="name"
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={"Harry Style"}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Email
              </label>
              <input
                onChange={handleInputChange}
                value={formData.email}
                name="email"
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={"example@gmail.com"}
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your Password
              </label>
              <input
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                type="password"
                id="password"
                placeholder="********"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Your Password
              </label>
              <input
                onChange={handleInputChange}
                value={formData.password_confirmation}
                name="password_confirmation"
                type="password"
                id="password_confirmation"
                placeholder="confirm password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full block mx-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
          </form>
          <p className="mt-5">
            You have already registered.{" "}
            <span>
              <button
                onClick={handleRegister}
                className="underline text-blue-700"
              >
                Login
              </button>
            </span>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default RegisterPage;
