import { Link, useNavigate } from "react-router-dom";
import AuthButton from "./AuthButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string().required("الرقم السري مطلوب"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          import.meta.env.VITE_LOGIN_END_POINT,
          values
        );
        setLoading(false);
        toast.success(response.data.msg || "تم تسجيل الدخول بنجاح!");
        if (response.data && response.data.data && response.data.data.token) {
          localStorage.setItem("authToken", response.data.data.token);
          // setTimeout(() => {
          //   navigate("/dashboard"); 
          // }, 1000);
        } else {
          console.warn(
            "لم يتم استقبال توكن المصادقة أو بيانات المستخدم من الـ API بشكل صحيح."
          );
          toast.error("خطأ في بيانات الاستجابة من الخادم.");
        }
      } catch (error) {
        let errorMessage = "فشل تسجيل الدخول. يرجى التحقق من بياناتك.";
        if (error.response && error.response.data && error.response.data.msg) {
          errorMessage = error.response.data.msg;
        } else if (error.request) {
          errorMessage = "لا يمكن الوصول إلى الخادم. تحقق من اتصالك بالإنترنت.";
        } else {
          errorMessage = error.message;
        }
        toast.error(errorMessage);
        setLoading(false);
      }
    },
  });

  return (
    <>
      <form className="max-w-md mx-auto px-4" onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl md:text-4xl text-white font-bold text-end mb-12">
          تسجيل دخول
        </h1>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm md:text-base font-semibold text-white w-full text-end mb-3"
          >
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-lg text-sm text-end text-white h-9 w-full md:w-[349px] pr-4 bg-white bg-opacity-30 backdrop-blur-lg focus:outline-none"
            placeholder="ادخل عنوان بريدك الإلكتروني"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-red-500 text-sm mt-1 text-end">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="mb-5 my-7">
          <label
            htmlFor="password"
            className="block text-sm md:text-base font-semibold text-white w-full text-end mb-3"
          >
            الرقم السري
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded-lg text-sm text-end text-white h-9 w-full md:w-[349px] pr-4 bg-white bg-opacity-30 backdrop-blur-lg focus:outline-none"
            placeholder="ادخل الرقم السري الخاص بك"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-red-500 text-sm mt-1 text-end">
              {formik.errors.password}
            </div>
          )}
        </div>

        <div className="flex items-end justify-between flex-row-reverse mb-7">
          {loading ? (
            <div role="status" className="flex justify-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <AuthButton buttonText="تسجيل دخول" type="submit" />
          )}

          <div>
            <Link
              to="/forgot-password"
              className="text-xs md:text-sm font-medium text-white hover:text-gray-300"
            >
              هل نسيت الرقم السري؟
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <span className="text-xs md:text-sm font-medium text-white ml-2">
            ليس لديك حساب؟
          </span>
          <Link
            to="/signup"
            className="text-xs md:text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            تسجيل جديد
          </Link>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
