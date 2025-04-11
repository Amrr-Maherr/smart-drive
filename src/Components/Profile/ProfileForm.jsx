import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthButton from "../Authentication/AuthButton"; // Make sure this path is correct
import { Link, useNavigate } from "react-router-dom"; // Ensure Link is imported

export default function ProfileForm() {
  const Navigate = useNavigate();
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("الاسم مطلوب")
      .min(3, "يجب أن يكون الاسم مكونًا من 3 أحرف على الأقل"),
    email: Yup.string()
      .required("البريد الإلكتروني مطلوب")
      .email("يرجى إدخال بريد إلكتروني صالح"),
    mobile: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9]{10}$/, "رقم الهاتف غير صالح (يجب أن يكون 10 أرقام)"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Updated profile:", values);
    // Simulate API call
    setTimeout(() => {
      alert("تم تحديث البيانات بنجاح!");
      setSubmitting(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setTimeout(() => {
      Navigate("/");
    }, 1000);
  };

  const currentUserData = {
    username: "محمد أحمد",
    jobTitle: "مطور واجهات",
    profileImageUrl: "/images/default-avatar.png",
    // profileImageUrl: null, // Uncomment to test fallback SVG
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 flex flex-col rtl my-10">
      {/* Header Section */}
      <div className="text-center mb-8 bg-[#1E3A8A] py-5 rounded-lg shadow">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">حسابي</h1>
        <p className="text-base md:text-lg text-white px-2">
          تابع تفاصيل اشتراكك الحالي والباقات المتاحة
        </p>
      </div>
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row-reverse gap-6">
        {/* Profile Info Column */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-right h-fit">
          {/* Profile Image Section */}
          <div className="flex justify-center mb-4 relative w-24 h-24 mx-auto">
            {!currentUserData.profileImageUrl ? (
              <img
                src={currentUserData.profileImageUrl}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
              />
            ) : (
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
          {/* Add user name and job title if needed here */}
          <div className="text-center">
            <h2 className="text-lg font-semibold">
              {currentUserData.username}
            </h2>
            <p className="text-sm text-gray-500">{currentUserData.jobTitle}</p>
            <button
              onClick={handleLogout}
              className="mt-4 text-sm text-red-600 hover:text-red-800"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>{" "}
        {/* <-- MISSING CLOSING TAG WAS HERE */}
        {/* Account Form Column */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg text-right">
          <h1 className="text-xl md:text-2xl font-bold mb-6">بيانات الحساب</h1>{" "}
          <p className="text-sm font-light mb-6 text-gray-600">
            تحكم في البيانات الأساسية للحساب (الاسم، البريد، الهاتف)
          </p>
          <Formik
            initialValues={{
              username: currentUserData.username || "", // Pre-fill if desired
              email: "", // Usually pre-filled from API
              mobile: "", // Usually pre-filled from API
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize // Important if initialValues depend on state/props that might change
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                {/* Username Field */}
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    الاسم
                  </label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className={`w-full px-3 py-2 border ${
                      errors.username && touched.username
                        ? "border-red-500 ring-1 ring-red-500" // Enhanced error style
                        : "border-gray-300"
                    } rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150`}
                    placeholder="أدخل اسم المستخدم الجديد"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    البريد الإلكتروني
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-3 py-2 border ${
                      errors.email && touched.email
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150`}
                    placeholder="أدخل البريد الإلكتروني الجديد"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Mobile Field */}
                <div className="mb-6">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <Field
                    type="tel"
                    id="mobile"
                    name="mobile"
                    className={`w-full px-3 py-2 border ${
                      errors.mobile && touched.mobile
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-gray-300"
                    } rounded-md text-right focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150`}
                    placeholder="أدخل رقم الهاتف الجديد (10 أرقام)"
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row-reverse justify-between items-center mt-6 gap-4">
                  {/* Reset Password Link/Button */}
                  <Link
                    to="/reset-password" // Ensure this route exists in your router setup
                    className="w-full sm:w-auto order-2 sm:order-1"
                  >
                    <button
                      type="button" // Important: type="button" prevents form submission
                      className="border p-3 border-red-500 rounded text-sm text-red-600 w-full hover:bg-red-100 hover:text-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      إعادة تعيين كلمة المرور
                    </button>
                  </Link>

                  {/* Submit Button */}
                  <AuthButton
                    buttonText="تحديث البيانات"
                    type="submit"
                    disabled={isSubmitting} // Disable button while submitting
                    className="w-full sm:w-auto order-1 sm:order-2"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>{" "}
        {/* Closes Account Form Column */}
      </div>{" "}
      {/* Closes Main Content Area Flex Container */}
    </div> // Closes Outermost Container
  );
}
