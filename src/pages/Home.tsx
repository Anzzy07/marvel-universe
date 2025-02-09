import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { CharacterCard } from "../components/CharacterCard";
import heroImage from "../assets/imageCarousel/Hero1.jpg";
import Hero2 from "../assets/imageCarousel/Hero2.jpg";
import Hero3 from "../assets/imageCarousel/hero3.jpg";
import Wolverine from "../assets/imageCarousel/wolverine.jpeg";
import Avenger from "../assets/imageCarousel/main.jpg";

import { getCharacterData } from "../services/marvelAPI";

const slideImages = [
  { src: heroImage, title: "Marvel's Super Heroes" },
  { src: Hero2, title: "Epic Battles Await" },
  { src: Hero3, title: "Unleash Your Power" },
  { src: Wolverine, title: "The Legend Lives On" },
  { src: Avenger, title: "Avengers Assemble!" },
];

export const Home = () => {
  const [featuredCharacters, setFeaturedCharacters] = useState([]);
  const [featuredComics, setFeaturedComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await getCharacterData("");
        setFeaturedCharacters(response.data.results);
      } catch (error) {
        setError("Failed to show characters");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          className="h-[500px] rounded-lg overflow-hidden"
        >
          {slideImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.src}')` }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <motion.h1
                    className="text-5xl font-bold text-red-500 mb-4"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.button
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded"
                    whileHover={{ scale: 1.1 }}
                  >
                    Explore Now
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full max-w-6xl p-6">
        <h2 className="text-4xl font-bold text-center text-red-500 mb-8">
          Featured Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCharacters.map((hero) => (
            <CharacterCard key={hero.id} heros={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
