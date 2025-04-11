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
      localStorage.removeItem('authToken')
      setTimeout(() => {
        Navigate('/')
      },1000)
  };

  const currentUserData = {
    username: "محمد أحمد",
    jobTitle: "مطور واجهات", 
    profileImageUrl: "/images/default-avatar.png",
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 flex flex-col rtl my-10">
      <div className="text-center mb-8 bg-[#1E3A8A] py-5 rounded-lg shadow">
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-white">حسابي</h1>
        <p className="text-base md:text-lg text-white px-2">
          تابع تفاصيل اشتراكك الحالي والباقات المتاحة
        </p>
      </div>
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg text-right h-fit">
          <div className="flex justify-center mb-4">
            <img
              src={currentUserData.profileImageUrl}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-right">
            {currentUserData.username}
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-4 text-center md:text-right">
            الوظيفة: {currentUserData.jobTitle}
          </p>
          <div className="mb-4">
            <Link
              to="/account-details"
              className="block w-full"
            >
              <button
                type="button"
                className="border p-3 border-blue-500 rounded text-sm text-blue-600 w-full hover:bg-blue-100 hover:text-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                عرض تفاصيل الحساب
              </button>
            </Link>
          </div>
          <div className="mb-4">
            <button
              onClick={handleLogout}
              className="border p-3 border-red-500 rounded text-sm text-red-600 w-full hover:bg-red-100 hover:text-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-lg text-right">
          <h1 className="text-xl md:text-2xl font-bold mb-6">بيانات الحساب</h1>{" "}
          {/* Kept original title */}
          <p className="text-sm font-light mb-6 text-gray-600">
            {/* Kept original description */}
            تحكم في البيانات الأساسية للحساب (الاسم، البريد، الهاتف)
          </p>
          <Formik
            initialValues={{
              username: "",
              email: "",
              mobile: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
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
                        ? "border-red-500 ring-1 ring-red-500"
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
                <div className="flex flex-col sm:flex-row-reverse justify-between items-center mt-6 gap-4">
                  <Link
                    to="/reset-password"
                    className="w-full sm:w-auto order-2 sm:order-1"
                  >
                    <button
                      type="button"
                      className="border p-3 border-red-500 rounded text-sm text-red-600 w-full hover:bg-red-100 hover:text-red-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                      إعادة تعيين كلمة المرور
                    </button>
                  </Link>
                  <AuthButton
                    buttonText="تحديث البيانات"
                    type="submit"
                    className="w-full sm:w-auto order-1 sm:order-2"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
