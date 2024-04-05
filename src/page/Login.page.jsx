import React, { useState } from "react";
import { ContainerComponent } from "../components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const nav = useNavigate();
  const handleRegister = () => {
    nav("/register");
  };
  return (
    <ContainerComponent>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-[400px] h-auto mx-auto bg-gray-200 p-5 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-lg mb-3">Login Your Contact</h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                onChange={handleInputChange}
                value={formData.email}
                name={"email"}
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
                Your password
              </label>
              <input
                value={formData.password}
                onChange={handleInputChange}
                name="password"
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex justify-between items-center">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value={true}
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 me-10 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <p className="mt-5">
            You haven't yet registered.{" "}
            <span>
              <button onClick={handleRegister} className=" text-blue-700">
                Register
              </button>
            </span>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
