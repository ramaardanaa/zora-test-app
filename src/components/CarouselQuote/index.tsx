import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { Expert } from "@/utils/type/course";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from 'swiper/react';

type Props = {
  experts: Expert[]
}
function ControllerSlider() {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end gap-4 sticky z-50 bottom-5 pr-5">
      <button onClick={() => swiper.slidePrev()} className="rounded-full bg-red p-2"><IoIosArrowBack color="white" className="text-4xl" /></button>
      <button onClick={() => swiper.slideNext()} className="rounded-full bg-red p-2"><IoIosArrowForward color="white" className="text-4xl" /></button>
    </div>
  )
}
export default function CarouselQuote({ experts }: Props) {

  return (
    <div className="w-[400px] h-[700px] bg-beige-1 rounded-lg relative flex flex-col justify-end">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {experts.map((expert, index) => (
          <SwiperSlide key={index}>
            <div className="p-10 gap-2 flex flex-col h-full pb-36 justify-end">
              <h2 className="font-editorial tracking-tighter text-5xl italic py-10">"{expert.quote}"</h2>
              <div className="flex">
                <div>
                  <Image className="rounded-full" src={expert.avatar} width={80} height={80} alt={expert.name} />
                </div>
                <div className="flex-1 ms-5">
                  <p className="font-semibold text-xl mb-1">{expert.name}</p>
                  <p className="leading-5 text-md ">{expert.title}</p>
                  <p className="leading-5 text-md ">{expert.work}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <ControllerSlider />
      </Swiper>

    </div>
  );
}