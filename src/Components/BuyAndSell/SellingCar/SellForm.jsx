import { useFormik } from "formik";
import * as Yup from "yup";

export default function SellForm() {
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      brand: "",
      model: "",
      color: "",
      mileage: "",
      price: "",
      transmission: "",
      additionalInfo: "",
      phone: "",
      location: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("العنوان مطلوب"),
      category: Yup.string().required("الفئة مطلوبة"),
      brand: Yup.string().required("الماركة مطلوبة"),
      model: Yup.string().required("الموديل مطلوب"),
      color: Yup.string().required("اللون مطلوب"),
      mileage: Yup.number()
        .required("عدد الكيلومترات مطلوب")
        .positive("القيمة يجب أن تكون موجبة"),
      price: Yup.number()
        .required("السعر مطلوب")
        .positive("القيمة يجب أن تكون موجبة"),
      transmission: Yup.string().required("ناقل الحركة مطلوب"),
      phone: Yup.string().required("رقم الهاتف مطلوب"),
      location: Yup.string().required("العنوان مطلوب"),
    }),
    onSubmit: (values) => {
      console.log("Form Values:", values);
      alert("تم إرسال النموذج بنجاح!");
    },
  });

  return (
    <div className="py-5 px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full mx-auto p-6 text-end bg-white rounded-lg shadow-lg space-y-5"
      >
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            عنوان الإعلان
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="مثال: هيونداى اكسنت 2020 بحاله ممتازه"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.title}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              الفئة
            </label>
            <select
              id="category"
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">حدد</option>
              <option value="sedan">سيدان</option>
              <option value="suv">SUV</option>
              <option value="hatchback">هاتشباك</option>
            </select>
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.category}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              الماركة
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="مثال: هيونداي"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {formik.touched.brand && formik.errors.brand && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.brand}
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            موديل عام
          </label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="مثال: 2020"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.model}
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {formik.touched.model && formik.errors.model && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.model}
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              لون السيارة
            </label>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="مثال: أسود"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.color}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {formik.touched.color && formik.errors.color && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.color}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="mileage"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              كم عدد الكيلومترات
            </label>
            <input
              type="number"
              id="mileage"
              name="mileage"
              placeholder="مثال: 120000"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.mileage}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {formik.touched.mileage && formik.errors.mileage && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.mileage}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              بكم ستبيع سيارتك؟
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="مثال: 250000"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.price}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2">
            <label
              htmlFor="transmission"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              ناقل الحركة
            </label>
            <select
              id="transmission"
              name="transmission"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.transmission}
              className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">حدد</option>
              <option value="manual">عادي</option>
              <option value="automatic">أوتوماتيك</option>
            </select>
            {formik.touched.transmission && formik.errors.transmission && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.transmission}
              </div>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="additionalInfo"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            معلومات إضافية
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            placeholder="مثال: متجدده بالكامل"
            onChange={formik.handleChange}
            value={formik.values.additionalInfo}
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            رقم الهاتف
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="الهاتف"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.phone}
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            عنوان السيارة
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="مثال: المعادي، القاهرة"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
            className="bg-gray-50 border text-end border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.location}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-3 bg-[#1E3A8A] rounded-[5px] text-xl font-semibold text-white"
          >
            بيع سيارتي الآن
          </button>
        </div>
      </form>
    </div>
  );
}
