import React from "react";
import "./index.css";

const message = () => {
  return (
    <div className="messageWrapper">
      <div className="titleCompany">
        One<span className="changeCol font4">NDF</span>.in
      </div>
      <div className="messageCompany">
         Your one location for{" "}
        <span className="changeCol font5-6">10000+opportunities</span>
      </div>
    </div>
  );
};

export default message;
