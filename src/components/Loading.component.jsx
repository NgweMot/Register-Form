import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const LoadingComponent = () => {
  return (
    <div className=" animate-spin">
      <AiOutlineLoading3Quarters className=" w-6 h-6" />
    </div>
  );
};

export default LoadingComponent;
