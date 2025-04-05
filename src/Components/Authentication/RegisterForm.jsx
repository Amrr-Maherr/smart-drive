import { Link, useNavigate } from "react-router-dom";
import AuthButton from "./AuthButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
export default function SignUpForm() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("الاسم الكامل مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(/^(\+)?(\d{1,3})?(\d{10})$/, "رقم الجوال غير صالح")
      .required("رقم الجوال مطلوب"),
    password: Yup.string()
      .min(6, "يجب أن يتكون الرقم السري من 6 أحرف على الأقل")
      .required("الرقم السري مطلوب"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const response = await axios.post(
          import.meta.env.VITE_REGISTER_END_POINT,
          values
        );
        setLoading(false)
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
      catch (error) {
        toast.error(error.response.data.msg);
        console.log(error);
        
         setLoading(false);
      }
    },
  });

  return (
    <>
      <form className="max-w-md mx-auto px-4" onSubmit={formik.handleSubmit}>
        <h1 className="text-3xl md:text-4xl text-white font-bold text-end mb-12">
          إنشاء حساب
        </h1>

        {/* حقل الاسم */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm md:text-base font-semibold text-white w-full text-end mb-3"
          >
            الاسم الكامل
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-lg text-sm text-end text-white h-9 w-full md:w-[349px] pr-4 bg-white bg-opacity-30 backdrop-blur-lg focus:outline-none"
            placeholder="ادخل اسمك الكامل"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="text-red-500 text-sm mt-1 text-end">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* حقل البريد الإلكتروني */}
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

        {/* حقل الجوال */}
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm md:text-base font-semibold text-white w-full text-end mb-3"
          >
            رقم الجوال
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="rounded-lg text-sm text-end text-white h-9 w-full md:w-[349px] pr-4 bg-white bg-opacity-30 backdrop-blur-lg focus:outline-none"
            placeholder="ادخل رقم الجوال"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone && (
            <div className="text-red-500 text-sm mt-1 text-end">
              {formik.errors.phone}
            </div>
          )}
        </div>

        {/* حقل الرقم السري */}
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

        <div className="flex items-end justify-center flex-col ">
          <div className="mb-7">
            <Link
              to="/login"
              className="text-xs md:text-sm font-medium text-white"
            >
              هل لديك حساب؟ تسجيل دخول
            </Link>
          </div>
          {loading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              <AuthButton buttonText="إنشاء حساب" />
            </div>
          )}
        </div>
      </form>
      <Toaster />
    </>
  );
}
