"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-8 mt-10">
        {projects.length > 4 ? (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
            }}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="lg:min-h-[24rem] h-[20rem] flex items-center justify-center sm:w-72 w-[70vw]">
                  <PinContainer
                    title="/ui.aceternity.com"
                    href="https://twitter.com/mannupaaji"
                  >
                    <div className="relative flex items-center justify-center sm:w-72 w-[70vw] overflow-hidden h-[18vh] lg:h-[22vh] mb-6">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img src="/bg.png" alt="bgimg" />
                      </div>
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0"
                      />
                    </div>

                    <h1 className="font-bold lg:text-lg md:text-md text-sm line-clamp-1">
                      {item.title}
                    </h1>

                    <p
                      className="lg:text-md lg:font-normal font-light text-xs line-clamp-2"
                      style={{
                        color: "#BEC1DD",
                        margin: "1vh 0",
                      }}
                    >
                      {item.des}
                    </p>

                    <div className="flex items-center justify-between mt-5 mb-2">
                      <div className="flex items-center">
                        {item.iconLists.map((icon, index) => (
                          <div
                            key={index}
                            className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index + 2}px)`,
                            }}
                          >
                            <img src={icon} alt="icon5" className="p-1" />
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-md md:text-xs text-xs text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-2" color="#CBACF9" />
                      </div>
                    </div>
                  </PinContainer>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          projects.map((item) => (
            <div
              className="lg:min-h-[24rem] h-[20rem] flex items-center justify-center sm:w-72 w-[70vw]"
              key={item.id}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="relative flex items-center justify-center sm:w-72 w-[70vw] overflow-hidden h-[18vh] lg:h-[22vh] mb-6">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-lg md:text-md text-sm line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-md lg:font-normal font-light text-xs line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-5 mb-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-6 h-6 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-1" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-md md:text-xs text-xs text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentProjects;
