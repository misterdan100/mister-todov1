import React from "react";

const Alert = ({ alertText }) => {
  return (
    <div className="bg-orange-400 mt-4 block p-1 font-bold text-center rounded-lg border-2 border-orange-700">
        {alertText}
    </div>
  )
};

export default Alert;
