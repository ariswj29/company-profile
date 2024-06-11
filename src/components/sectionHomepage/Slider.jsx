"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SkeletonComponent from '../Skeleton';
import { Autoplay, Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';


export default function Slider() {
    // const link = "http://127.0.0.1:5500/public/assets/";
    const sliders = [
        {
            "id": 2,
            "image": "/assets/images.jpeg",
        },
        {
            "id": 1,
            "image": "/assets/images2.png",
        },
        {
            "id": 3,
            "image": "/assets/images3.jpeg",
        }
    ]
    
    return (
        sliders.length === 0 ? (
            <SkeletonComponent className="mb-16" width="100vw" height="calc(100vh - 110px)" />
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
            modules={[
              Autoplay,
              Navigation,
              Pagination,
              Mousewheel,
              Keyboard
            ]}
              className="mySwiper mb-8 w-full h-[180px] md:h-[calc(100vh-5rem)]"
            > 
              {sliders.map((slider, i) => (
                <SwiperSlide
                  key={i}
                  className="slider_1 md:py-[140px] sm:py-0 px-[0px]"
                  style={{
                    // backgroundImage: `url('${link}${slider.image}')`,
                    backgroundImage: `url('${slider.image}')`,
                    textShadow: "rgb(61 61 61) 0px 0px 25px, rgb(61 61 61) 0px 0px 15px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                    {/* <div className="flex flex-col justify-center items-center h-full">
                        <h1 className="text-white text-4xl font-bold mb-4">Slider {i + 1}</h1>
                        <p className="text-white text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}
                </SwiperSlide>
              ))}
            </Swiper>
          )
    );
}
