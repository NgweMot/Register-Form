import React, { useState, useEffect } from "react";
import {
  ContainerComponent,
  FormComponents,
  ButtonComponent,
  LoadingComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Login } from "../service/auth.service";
import useApi from "../hook/useApi";

const LoginPage = () => {
  const nav = useNavigate();
  const { handleDealApi, loading, error, data } = useApi(Login);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data, nav]);

  const handleInputChange = (e) =>
    setFormData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  const handleSubmit = (e) => {
    e.preventDefault();
    handleDealApi(formData);
    console.log(formData);
  };
  const handleRegister = () => {
    nav("/register");
  };
  return (
      <ContainerComponent>
        <div className="min-h-screen flex items-center justify-center ">
          {loading ? (
            <LoadingComponent />
          ) : (
            <div className="w-[400px] h-auto mx-auto bg-gray-200 p-5 rounded-lg">
              <form onSubmit={handleSubmit}>
                <h1 className="font-bold text-lg mb-3">Login Your Contact</h1>
                {error && <div>You have not account</div>}
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
          )}
        </div>
      </ContainerComponent>
  );
};

export default LoginPage;
