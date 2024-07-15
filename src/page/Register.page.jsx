import React, { useState } from "react";
import {
  ContainerComponent,
  FormComponents,
  ButtonComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";

const RegisterPage = () => {
  const nav = useNavigate();
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
    const res = await Register(formData);
    console.log(res);
  };

  const handleRegister = () => {
    nav("/");
  };
  return (
    <ContainerComponent>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="w-[400px] h-auto mx-auto bg-gray-200 p-5 rounded-lg">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-lg mb-3">Register Your Account</h1>
            <div className="flex flex-col gap-5 mb-6">
              <FormComponents
                value={formData.name}
                onChange={handleInputChange}
                name={"name"}
                type={"text"}
                label={"Enter Your Name"}
                placeholder={"John Watson"}
              />
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
              <FormComponents
                value={formData.password_confirmation}
                onChange={handleInputChange}
                name={"password_confirmation"}
                type={"password"}
                label={"Confirm Password"}
              />
            </div>
            <ButtonComponent type="submit">REGISTER</ButtonComponent>
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
