"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SkeletonComponent from "../Skeleton";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { contentfulClient } from "@/helpers/contentful-client";
import { sliders } from "@/data/data";

// Pake Contentful error terus image nya tidak bisa slide, jadi saya ganti pake data.js

// async function getSliders() {
//   try {
//     const client = contentfulClient();
//     const res = await client.getEntries({ content_type: "slider" });
//     return res.items;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default function Slider() {
  // const sliders = await getSliders();
  return sliders.length === 0 ? (
    <SkeletonComponent
      className="mb-16"
      width="100vw"
      height="calc(100vh - 110px)"
    />
  ) : (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper mb-8 w-full h-[180px] md:h-[calc(100vh-5rem)]"
    >
      {sliders.map((item, key) => (
        <SwiperSlide
          // key={slider.sys.id}
          key={key}
          className="slider_1 md:py-[140px] sm:py-0 px-[0px]"
          style={{
            // backgroundImage: `url(https:${slider.fields.image.fields.file.url})`,
            backgroundImage: `url('${item.image}')`,
            textShadow:
              "rgb(61 61 61) 0px 0px 25px, rgb(61 61 61) 0px 0px 15px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></SwiperSlide>
      ))}
    </Swiper>
  );
}
