import React from "react";
import { BiError } from "react-icons/bi";
const ErrorComponent = () => {
  return (
    <div className="flex justify-start items-center gap-3 mb-3">
      <BiError className=" text-red-600" />
      <p className="text-red-600">
        Registration unsuccessful. Please try again
      </p>
    </div>
  );
};

export default ErrorComponent;
