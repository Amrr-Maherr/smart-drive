// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Images
import SliderImageOne from "../../assets/image.png";
import SliderImageTwo from "../../assets/pexels-adrian-dorobantu-989175-2127733.jpg";
import SliderImageThree from "../../assets/pexels-pixabay-164634.jpg";

// import required modules
import { Pagination } from "swiper/modules";

export default function HomeSlider() {
  const SliderData = [
    {
      img: SliderImageOne,
      title: "Modern Car Showcase",
      description: "قيادة أسهل، بيع أسرع كل شيء في مكان واحد!",
    },
    {
      img: SliderImageTwo,
      title: "Scenic Mountain Drive",
      description: "استكشف الطرق بثقة. الجودة التي يمكنك الاعتماد عليها.",
    },
    {
      img: SliderImageThree,
      title: "Classic Automobile",
      description: "أناقة خالدة، أداء موثوق. امتلك قطعة من التاريخ.",
    },
  ];

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-screen w-full" // Full screen height/width
        loop={true} // Optional: enable looping
        // autoplay={{ delay: 4000, disableOnInteraction: false }} // Optional: enable autoplay
      >
        {SliderData.map((slider, index) => (
          <SwiperSlide key={index} className="relative">
            {" "}
            {/* Slide is relative container */}
            {/* Image filling the slide */}
            <img
              src={slider.img}
              alt={slider.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover" // Image covers slide
            />
            {/* Centered content container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {/* Text background container */}
              <div className=" p-6 md:p-8  max-w-[90%] md:max-w-2xl">
                <h2 className="text-white text-md md:text-3xl font-normal whitespace-pre-line">
                  {" "}
                  {/* Added whitespace-pre-line */}
                  {slider.description}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
