import { useState } from "react";
import { motion } from "framer-motion";
import Artist1 from "../images/artist1.jpg";
import Artist2 from "../images/artist2.jpg";

const artists = [
  { name: "Justin Bieber", image: Artist1 },
  { name: "Chayanne", image: Artist2 },
];

export function Artists() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artists.length) % artists.length
    );
  };

  return (
    <div className="p-4 text-center text-xl">
      <h2 className="text-2xl font-bold mb-4">Nuestros Artistas</h2>
      <div className="relative w-full max-w-md mx-auto">
        <motion.div
          key={currentIndex}
          className="flex flex-col items-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={artists[currentIndex].image}
            alt={artists[currentIndex].name}
            className="w-full h-64 object-cover rounded-md"
          />
          <p className="mt-2 text-lg font-semibold">
            {artists[currentIndex].name}
          </p>
        </motion.div>
        <button
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
