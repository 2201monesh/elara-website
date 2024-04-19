"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

const LandingHeroSection = () => {

   const images = [
    "/media/ElaraHomeImage1.jpg",
    "/media/ElaraHomeImage2.jpg",
    "/media/ElaraHomeImage3.jpg",
    "/media/ElaraHomeImage4.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="landingPage-hero-section py-8 md:py-32 relative"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out"
      }}
    >
    </main>
  );
};

export default LandingHeroSection;
