import React from "react";

const Alert = ({ alertText }) => {
  return (
    <div className="bg-orange-400 mb-4 block py-1 px-3 font-bold text-center rounded-lg border-2 border-orange-700">
        {alertText}
    </div>
  )
};

export default Alert;
