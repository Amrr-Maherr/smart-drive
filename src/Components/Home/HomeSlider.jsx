// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // <-- من الأفضل استيراد CSS الخاص بالوحدة إذا كان متاحًا (للإصدارات الأحدث)

// Import Images
import SliderImageOne from "../../assets/image.png";
import SliderImageTwo from "../../assets/pexels-adrian-dorobantu-989175-2127733.jpg";
import SliderImageThree from "../../assets/pexels-pixabay-164634.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper/modules"; // <-- تصحيح: Autoplay بحرف A كبير

export default function HomeSlider() {
  const SliderData = [
    {
      img: SliderImageOne,
      title: "Modern Car Showcase",
      description: "قيادة أسهل، بيع أسرع\nكل شيء في مكان واحد!", // استخدم \n لفاصل الأسطر
    },
    {
      img: SliderImageTwo,
      title: "Scenic Mountain Drive",
      description: "استكشف الطرق بثقة.\nالجودة التي يمكنك الاعتماد عليها.", // استخدم \n لفاصل الأسطر
    },
    {
      img: SliderImageThree,
      title: "Classic Automobile",
      description: "أناقة خالدة، أداء موثوق.\nامتلك قطعة من التاريخ.", // استخدم \n لفاصل الأسطر
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          // <-- تفعيل وإعدادات الـ Autoplay
          delay: 3000, // تغيير التأخير إلى 3000 مللي ثانية (3 ثوانٍ) أو حسب الرغبة
          disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد تفاعل المستخدم
          pauseOnMouseEnter: false, // يتوقف مؤقتًا عند مرور الماوس فوق السلايدر (اختياري ومستحسن)
        }}
        modules={[Pagination, Autoplay]} // <-- تصحيح: إضافة Autoplay هنا
        className="mySwiper h-screen w-full"
        loop={true}
      >
        {SliderData.map((slider, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slider.img}
              alt={slider.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
              {" "}
              {/* إضافة خلفية شفافة للنص */}
              <div className=" p-6 md:p-8 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-2xl">
                {" "}
                {/* صندوق خلفية للنص */}
                {/* تم إزالة العنوان بناءً على الكود الأصلي، يمكنك إضافته إذا أردت */}
                {/* <h2 className="text-white text-3xl md:text-5xl font-bold mb-3">{slider.title}</h2> */}
                <p className="text-white text-lg md:text-4xl font-normal whitespace-pre-line">
                  {" "}
                  {/* تعديل حجم الخط قليلًا */}
                  {slider.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
