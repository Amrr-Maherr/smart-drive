import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faTags } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function ToggleButtons() {
  return (
    <>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <Link to="/buy-car">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-[#1E3A8A] focus:z-10 focus:ring-2 focus:ring-[#1E3A8A] focus:text-[#1E3A8A] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-[#1E3A8A] dark:focus:text-white" // تم تغيير ألوان hover و focus
          >
            <FontAwesomeIcon icon={faCar} className="w-4 h-4 me-2" />
            شراء عربيه
          </button>
        </Link>
        <Link to="/sell-car">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-r border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-[#1E3A8A] focus:z-10 focus:ring-2 focus:ring-[#1E3A8A] focus:text-[#1E3A8A] dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-[#1E3A8A] dark:focus:text-white" // تم تغيير ألوان hover و focus وإضافة border-t/b/r
          >
            <FontAwesomeIcon icon={faTags} className="w-4 h-4 me-2" />
            بيع عربيه
          </button>
        </Link>
      </div>
    </>
  );
}
