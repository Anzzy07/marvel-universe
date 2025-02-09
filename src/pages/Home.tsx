import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImage from "../assets/imageCarousel/Hero1.jpg";
import Hero2 from "../assets/imageCarousel/Hero2.jpg";
import Hero3 from "../assets/imageCarousel/hero3.jpg";
import Wolverine from "../assets/imageCarousel/wolverine.jpeg";
import Avenger from "../assets/imageCarousel/main.jpg";
import { CharacterCard } from "../components/CharacterCard";

const slideImages = [
  {
    src: heroImage,
    title: "Marvel's Super Heroes",
    description: "Experience the adventure...",
  },
  { src: Hero2, title: "Epic Battles Await", description: "Join the fight..." },
  {
    src: Hero3,
    title: "Unleash Your Power",
    description: "Discover new abilities...",
  },
  {
    src: Wolverine,
    title: "The Legend Lives On",
    description: "Wolverine slashes through enemies...",
  },
  {
    src: Avenger,
    title: "Avengers Assemble!",
    description: "Earth’s mightiest heroes unite.",
  },
];

const categories = [
  {
    title: "Popular Characters",
    items: [
      { name: "Spider-Man", img: Hero2 },
      { name: "Iron Man", img: Wolverine },
      { name: "Thor", img: Hero3 },
      { name: "Hulk", img: Avenger },
    ],
  },
  {
    title: "Popular Comics",
    items: ["Infinity War", "Secret Wars", "Civil War", "House of M"],
  },
  {
    title: "Popular Series",
    items: ["Loki", "WandaVision", "Daredevil", "Moon Knight"],
  },
];

export const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-6xl p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-[400px] rounded-lg overflow-hidden"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.src}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                  <p className="text-lg mb-4 max-w-2xl">{slide.description}</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Explore Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
