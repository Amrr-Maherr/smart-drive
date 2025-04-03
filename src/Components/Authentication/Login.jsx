import React from "react";
import BgImage from "../../assets/unsplash_1rBg5YSi00c.png";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="flex items-center justify-around border-white border-2  p-5 rounded-lg bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
        <LoginForm />
      </div>
    </section>
  );
}
