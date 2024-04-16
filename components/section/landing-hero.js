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
      {/* <div className="mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <h1 className="landingP-headline text-black shadow-white stroke-text text-4xl md:text-7xl font-bold text-center mx-auto">
          Elevate your life, <br /> with better security
        </h1>
        <div className="landingPage-cta-wrapper flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-fit gap-4">
          <Link href="/#faq">
            <button className="btn-brown">{"Read FAQs"}</button>
          </Link>
          <Link href="/products">
            <button className="btn-brown">
              {"Explore Products"}
            </button>
          </Link>
        </div>
      </div> */}
    </main>
  );
};

export default LandingHeroSection;
