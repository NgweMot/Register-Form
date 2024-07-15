import React, { useState } from "react";
import {
  ContainerComponent,
  FormComponents,
  ButtonComponent,
} from "../components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) =>
    // console.log(e.target.name, e.target.value);
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
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
            <div className="flex flex-col gap-5 mb-6">
              <FormComponents
                value={formData.email}
                onChange={handleInputChange}
                name={"email"}
                type={"email"}
                label={"Enter Your Email"}
                placeholder={"name@gmail.com"}
              />
              <FormComponents
                value={formData.password}
                onChange={handleInputChange}
                name={"password"}
                type={"password"}
                label={"Password"}
              />
            </div>
            <ButtonComponent type="submit">LOG IN</ButtonComponent>
          </form>
          <p className="mt-5">
            You haven't yet registered.
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
