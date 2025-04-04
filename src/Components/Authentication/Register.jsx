import React from "react";
import BgImage from "../../assets/697.png";
import RegisterForm from "../Authentication/RegisterForm";
export default function Register() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-around border-white border-2 p-5 rounded-lg bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
        <RegisterForm />
      </div>
    </section>
  );
}
