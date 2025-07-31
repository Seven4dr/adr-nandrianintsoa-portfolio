import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Maj = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-4 text-purple-600 text-3xl font-semibold">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
        <span>En cours de mise à jour...</span>
      </div>
    </div>
  );
};

export default Maj;
