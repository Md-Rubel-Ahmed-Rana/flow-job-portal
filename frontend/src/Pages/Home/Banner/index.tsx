import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import image1 from "../../../assets/images/slider1.jpg"
import image2 from "../../../assets/images/slider2.jpg"
import image3 from "../../../assets/images/slider3.jpg"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Banner = () => {
  return (
    <div className="relative">
      <Swiper className="h-screen relative"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <img className="w-full" src={image1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-4/5" src={image2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={image3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Banner