import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

// اسم المكون الآن يعكس الغرض منه بشكل أفضل
export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      // بيانات اساسيه
      nationalId: "",
      fullName: "",
      qualification: "",
      job: "",
      // بيانات الاقامه
      governorate: "",
      address: "",
      // بيانات التواصل
      mobile: "",
      email: "",
      // بيانات الاشتراك
      username: "",
      password: "",
      confirmPassword: "", // حقل تأكيد كلمة المرور ضروري
    },
    validationSchema: Yup.object({
      // بيانات اساسيه
      nationalId: Yup.string()
        .required("الرقم القومي مطلوب")
        .matches(/^[0-9]{14}$/, "الرقم القومي يجب أن يتكون من 14 رقمًا"), // تحقق من 14 رقمًا
      fullName: Yup.string()
        .required("الاسم الرباعي مطلوب")
        .min(10, "الاسم يبدو قصيرًا جدًا، يرجى إدخال الاسم الرباعي"), // حد أدنى لطول الاسم
      qualification: Yup.string().required("المؤهل مطلوب"),
      job: Yup.string().required("الوظيفة مطلوبة"),
      // بيانات الاقامه
      governorate: Yup.string().required("المحافظة مطلوبة"), // يمكن تحويله لقائمة منسدلة لاحقًا
      address: Yup.string()
        .required("العنوان التفصيلي مطلوب")
        .min(15, "العنوان يبدو قصيرًا جدًا"),
      // بيانات التواصل
      mobile: Yup.string()
        .required("رقم الجوال مطلوب")
        .matches(
          /^(01)[0-9]{9}$/,
          "صيغة رقم الجوال غير صحيحة (مثال: 01xxxxxxxxx)"
        ),
      email: Yup.string()
        .required("البريد الإلكتروني مطلوب")
        .email("صيغة البريد الإلكتروني غير صحيحة"),
      // بيانات الاشتراك
      username: Yup.string()
        .required("اسم المستخدم مطلوب")
        .min(4, "اسم المستخدم يجب أن يكون 4 أحرف على الأقل")
        .matches(
          /^[a-zA-Z0-9_]+$/,
          "اسم المستخدم يمكن أن يحتوي على حروف إنجليزية وأرقام و '_' فقط"
        ), // مثال: قيود على اسم المستخدم
      password: Yup.string()
        .required("كلمة المرور مطلوبة")
        .min(8, "كلمة المرور يجب أن تكون 8 أحرف على الأقل"),
      confirmPassword: Yup.string()
        .required("تأكيد كلمة المرور مطلوب")
        .oneOf([Yup.ref("password"), null], "كلمتا المرور غير متطابقتين"), // التحقق من تطابق كلمتي المرور
    }),
    onSubmit: (values) => {
      // قم بإزالة بيانات تأكيد كلمة المرور قبل الإرسال للسيرفر غالبًا
      const { confirmPassword, ...dataToSend } = values;
      console.log("Registration Data:", dataToSend);
      alert("تم إرسال بيانات التسجيل بنجاح!");
      // هنا يمكنك إرسال dataToSend إلى الـ API
      // formik.resetForm(); // لإعادة تعيين الفورم بعد الإرسال
    },
  });

  const getBorderClass = (fieldName) => {
    return formik.touched[fieldName] && formik.errors[fieldName]
      ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
      : "border-gray-300 focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
  };

  return (
    <div className="py-5 px-4 my-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full mx-auto p-6 md:p-8 text-end bg-white rounded-lg shadow-xl space-y-6"
      >
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold px-2 text-gray-700">
            بيانات أساسية
          </legend>
          <div className="space-y-5 mt-2">
            <div>
              <label
                htmlFor="nationalId"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                الرقم القومي (14 رقم)
              </label>
              <input
                type="text"
                id="nationalId"
                name="nationalId"
                maxLength="14" // تحديد الطول
                placeholder="أدخل الرقم القومي"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.nationalId}
                className={`bg-gray-50 border text-center ltr text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                  "nationalId"
                )}`}
              />
              {formik.touched.nationalId && formik.errors.nationalId && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.nationalId}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                الاسم (الرباعي)
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="أدخل اسمك الرباعي كما في البطاقة"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className={`bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                  "fullName"
                )}`}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="qualification"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  المؤهل الدراسي
                </label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  placeholder="مثال: بكالوريوس هندسة"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.qualification}
                  className={`bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "qualification"
                  )}`}
                />
                {formik.touched.qualification &&
                  formik.errors.qualification && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.qualification}
                    </div>
                  )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="job"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  الوظيفة الحالية
                </label>
                <input
                  type="text"
                  id="job"
                  name="job"
                  placeholder="مثال: مهندس برمجيات"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.job}
                  className={`bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "job"
                  )}`}
                />
                {formik.touched.job && formik.errors.job && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.job}
                  </div>
                )}
              </div>
            </div>
          </div>
        </fieldset>

        {/* --- بيانات الاقامه --- */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold px-2 text-gray-700">
            بيانات الإقامة
          </legend>
          <div className="space-y-5 mt-2">
            <div>
              <label
                htmlFor="governorate"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                المحافظة
              </label>
              {/* يمكنك تحويل هذا إلى Select لاحقًا */}
              <input
                type="text"
                id="governorate"
                name="governorate"
                placeholder="مثال: القاهرة"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.governorate}
                className={`bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                  "governorate"
                )}`}
              />
              {formik.touched.governorate && formik.errors.governorate && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.governorate}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                العنوان بالتفصيل
              </label>
              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="أدخل عنوان سكنك الحالي بالتفصيل"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className={`bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                  "address"
                )}`}
              />
              {formik.touched.address && formik.errors.address && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.address}
                </div>
              )}
            </div>
          </div>
        </fieldset>

        {/* --- بيانات التواصل --- */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold px-2 text-gray-700">
            بيانات التواصل
          </legend>
          <div className="space-y-5 mt-2">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  رقم الجوال
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="01xxxxxxxxx"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.mobile}
                  className={`bg-gray-50 border text-center ltr border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "mobile"
                  )}`}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mobile}
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@domain.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`bg-gray-50 border text-center ltr border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "email"
                  )}`}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>
            </div>
          </div>
        </fieldset>

        {/* --- بيانات الاشتراك --- */}
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold px-2 text-gray-700">
            بيانات الحساب
          </legend>
          <div className="space-y-5 mt-2">
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                اسم المستخدم (إنجليزية وأرقام فقط)
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="اختر اسم مستخدم فريد"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className={`bg-gray-50 border text-center ltr border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                  "username"
                )}`}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.username}
                </div>
              )}
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="8 أحرف على الأقل"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`bg-gray-50 border text-center ltr border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "password"
                  )}`}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="أعد كتابة كلمة المرور"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className={`bg-gray-50 border text-center ltr border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ${getBorderClass(
                    "confirmPassword"
                  )}`}
                />
                {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.confirmPassword}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </fieldset>
        <div className="flex items-center justify-center pt-6">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-[#1E3A8A] rounded-lg text-lg font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-60 transition duration-150 ease-in-out"
          >
            {formik.isSubmitting ? "جاري الاضافه.." : "اضافه"}
          </button>
        </div>
        <div className="text-center mt-4">
          <Link
            to="/special-plates"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            تصفح لوحات السيارات المميزة المعروضة للبيع
          </Link>
        </div>
      </form>
    </div>
  );
}
