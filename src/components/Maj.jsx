import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"; // npm install react-icons

const Maj = () => {
  return (
    <div className="flex items-center space-x-2 text-yellow-500 font-medium">
      <AiOutlineLoading3Quarters className="animate-spin text-xl" />
      <span>En cours de mise à jour...</span>
    </div>
  );
};

export default Maj;
