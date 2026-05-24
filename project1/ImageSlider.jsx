import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  return (
    <Swiper spaceBetween={10} slidesPerView={1}>
      <SwiperSlide><img src="../images/img1.webp" />1</SwiperSlide>
      <SwiperSlide><img src="../images/img2.jpg" />2</SwiperSlide>
      <SwiperSlide><img src="../images/img3.jpg" />3</SwiperSlide>
    </Swiper>
  );
}