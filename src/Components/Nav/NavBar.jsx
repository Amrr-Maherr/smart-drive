import { useState } from "react";
import { Link } from "react-router-dom";
import LogogImage from "../../assets/smart driver LOGO 1.svg";
import AuthButton from "../Authentication/AuthButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const NavLinks = [
    {
      title: "الرئيسيه",
      link: "/home",
    },
    {
      title: "مدربين",
      link: "/trainers",
    },
    {
      title: "اسئله ذكيه",
      link: "/smart-questions",
    },
    {
      title: "بيع سيارات",
      link: "/cars-for-sale",
    },
    {
      title: "بيع اللوحات المميزه",
      link: "/special-plates",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className=" text-white flex items-center justify-between fixed top-0 z-50 w-full px-4 md:px-8 py-3 flex-row-reverse">
        <div className="logo">
          <Link to="/home">
            <img
              src={LogogImage}
              alt="Smart Driver Logo"
              className="h-10 md:h-12"
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <ul className="flex items-center flex-row-reverse gap-x-6 lg:gap-x-10">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  className="text-lg font-medium hover:text-blue-400 transition-colors duration-200"
                  to={link.link}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <AuthButton buttonText="اشتراك" />
          <button className="text-sm md:text-base px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-200">
            دخول
          </button>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white focus:outline-none text-xl p-2 rounded hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          aria-hidden="true"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="font-semibold text-lg">القائمة</span>
          <button
            onClick={toggleSidebar}
            className="text-xl p-1 rounded hover:bg-gray-700"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-2">
          {NavLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors duration-200 text-right"
                to={link.link}
                onClick={toggleSidebar}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
