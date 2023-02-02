import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
//import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { data } from "./slides";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.src} alt={item.id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default App;
