import React from "react";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#1E3A8A] text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* العمود الأول: وصف */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">عن اكتشف</h4>
            <p className="text-sm">
              هذا نص وهمي يُستخدم لأغراض التصميم والعرض. الغرض منه هو ملء
              المساحات النصية لإظهار الشكل النهائي للتصميم قبل إضافة المحتوى
              الفعلي.
            </p>
          </div>

          {/* العمود الثاني: القائمة والاماكن */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              القائمة الرئيسية
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  اخر اخبارنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  معلومات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  مدربين
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  الاماكن
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: الدعم والموارد */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              الدعم والموارد
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  الدعم
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  بنود
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  اسئله ذكيه
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  الخصوصية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  بيع السيارات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  بيع اللوحات المميزة
                </a>
              </li>
            </ul>
          </div>

          {/* العمود الرابع: اشتراك */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">اشتراك</h4>
            <p className="text-sm mb-3">
              أدخل بريدك الإلكتروني للحصول على آخر التحديثات.
            </p>
            <form>
              <input
                type="email"
                placeholder="الايميل"
                className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-2 text-sm"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
          <p>
            حقوق النشر © اكتشف {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
