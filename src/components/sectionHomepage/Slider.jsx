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
import Image from "next/image";
import { contentfulClient } from "@/helpers/contentful-client";

// Pake Contentful error terus tidak bisa di slide, jadi saya ganti dengan static image

// async function getSliders() {
//   try {
//     const client = contentfulClient();
//     const res = await client.getEntries({ content_type: "slider" });
//     return res.items;
//   } catch (error) {
//     console.error(error);
//   }
// }

const sliders = [
  {
    id: 1,
    image: "/assets/slider1.png",
  },
  {
    id: 2,
    image: "/assets/slider2.png",
  },
  {
    id: 3,
    image: "/assets/slider3.png",
  },
  {
    id: 4,
    image: "/assets/slider4.png",
  },
];

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
      {sliders.map((slider) => (
        <SwiperSlide
          // key={slider.sys.id}
          key={slider.id}
          className="slider_1 md:py-[140px] sm:py-0 px-[0px]"
          style={{
            // backgroundImage: `url(https:${slider.fields.image.fields.file.url})`,
            backgroundImage: `url('${slider.image}')`,
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
