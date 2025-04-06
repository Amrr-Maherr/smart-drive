import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// 2. استورد الصورة الرمزية
import Avatar from "../../assets/avatar.png";

export default function CoachEvaluationsBox() {
  return (
    <>
      <div className="shadow-[-20px_20px_0_0_#8DD3BB66] flex items-end justify-start flex-col p-[34px] relative mx-auto rounded-[20px] text-right bg-white w-[425px]  my-10">
        <img
          className="w-[120px] h-[120px] rounded-full absolute -top-14 right-[34px] object-cover border-2 border-white"
          src={Avatar}
          alt="صورة المدرب الرمزية"
        />
        <div className="mt-10 mb-5 text-[#112211]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          recusandae assumenda modi velit nostrum asperiores dolor deserunt odio
          cumque laborum, harum ab, tenetur necessitatibus enim porro voluptates
          quibusdam, molestias esse?
        </div>
        <div className="stars my-10">
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-400 w-4 h-4 inline-block ml-1"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-400 w-4 h-4 inline-block ml-1"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-400 w-4 h-4 inline-block ml-1"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-yellow-400 w-4 h-4 inline-block ml-1"
          />
        </div>
        <div className="info text-[#767E86]">
          <p className="font-semibold text-lg">احمد على</p>
          <p className="text-sm text-gray-500">محاسب</p>
        </div>
      </div>
    </>
  );
}
