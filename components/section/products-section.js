"use client"

import { ArrowRight, ChevronUp, MoveUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


const Categories= [
  {
    title: "Door Locks",
    slug: "door-locks",
    img: "/media/rose handle img.jpeg",
  },
  {
    title: "Rose Handles",
    slug: "rose-handles",
    img: "/media/rose handle img.jpeg",
  },
  {
    title: "Mortise Handles",
    slug: "mortise-handles",
    img: "/media/rose handle img.jpeg",
  },
  {
    title: "Door Kit",
    slug: "door-kit",
    img: "/media/rose handle img.jpeg",
  }
]

const ProductSection = () => {

  const handleCategoryClick = (category) => {
    // Redirect to the products page with the selected category
    window.location.href = `/products?category=${category}`;
  };

  return (
    <section className="products-section">
      <div className="my-36 mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <div
          className="flex flex-col justify-center items-center
        max-w-3xl mx-auto
        "
        >
          <h1 className="about-headline text-4xl sm:text-6xl font-semibold sm:leading-[68px] text-center ">
            Best in class locks and home fittings
          </h1>
          <p className="about-description text-center mt-4 max-w-xl text-brown text-lg">
            We have something for everyone, from locks to door handles, and
            everything in between to make your home more secure and beautiful.
          </p>
        </div>
        <div className="product-categories-list flex flex-row items-center justify-center gap-12 my-24 max-xl:grid max-xl:grid-cols-2 max-xl:mx-auto max-xl:w-fit max-lg:grid-cols-1">
          {Categories.map((category, index) => {
            return (
              <motion.div
                className="home-product-card relative w-52 h-52 rounded-xl bg-light flex flex-col items-start justify-end p-6 cursor-pointer hover:shadow-2xl max-lg:w-[280px]"
                style={{ backgroundImage: `url(${category.img})` }}
                key={index}
                initial={{
                  top: 12 * (index),
                  opacity: 0
                }}
                animate={{
                  top: 0,
                  opacity: 1
                }}
                transition={{
                  type: "spring",
                }}
                whileHover={{
                  scale: 0.95
                }}
                onClick={() => handleCategoryClick(category.slug)}
              >
                <p className="font-semibold text-2xl text-brown w-[4ch]">
                  {category.title}
                </p>
                <ChevronUp
                  className="absolute top-6 right-6 text-brown rotate-90"
                />
              </motion.div>
            )
          })}
        </div>{" "}
        <div className=" flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-fit gap-4">
          <Link href="/about-products">
            <button className="btn-brown">
              About our products
            </button>
          </Link>
          <Link href="/products">
            <button className="btn-brown flex justify-center items-center">
              {"Explore Products"}
              <ArrowRight className="w-4 h-auto" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
