import React from "react";

export default function PackageCard() {
  const packageName = "باقه مميزه";
  const providerDescription = "تقدم جمعية مدربي القيادة مجموعة متنوعة";
  const originalPrice = "2000";
  const discountedPrice = "1500";
  const currency = "ج.م";
  const features = [
    "درس قياده لمده 60 دقيقه",
    "درسين للطريق السريع",
    "وقت اضافي",
    "تاجير سيارة لاختبار الطريق",
  ];
  const actionButtonText = "اشترك الآن";

  return (
    <div
      dir="rtl"
      className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden p-6 m-4 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
    >
      <div>
        <h2 className="text-[32px] font-bold text-black">{packageName}</h2>

        <p className="text-[#8D8D8D] text-sm mb-4">{providerDescription}</p>

        <div className="mb-6 text-center flex items-center justify-end flex-row-reverse gap-5">
          <span className="text-sm text-[#8D8D8D] line-through mr-2">
            {originalPrice} {currency}
          </span>
          <span className="text-[16px] font-bold text-[#1E3A8A] rounded-2xl p-4 bg-[#E8EEFF]">
            {discountedPrice} {currency}
          </span>
        </div>

        <ol className="relative border-r border-gray-200 dark:border-gray-700 mr-6 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="mb-5 mr-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-blue-500"></div>
              <p className="text-base font-normal text-gray-700 dark:text-gray-400">
                {feature}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <button className="mx-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out mt-auto">
        {actionButtonText}
      </button>
    </div>
  );
}
