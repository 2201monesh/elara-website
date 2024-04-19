"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const NavigationData = {
  logo: {
    imgURL: "/media/elara-dark.svg",
    title: "Elara Home Fittings Logo",
  },
  options: [
    { value: "About", link: "/#about" },
    { value: "Products", link: "/products" },
    { value: "FAQs", link: "/#faq" },
  ],
};

const MobileMenu = ({ options }) => (
  <div className="mobile-menu bg-white p-4 shadow-lg">
    <ul className="flex flex-col items-center gap-4">
      {options.map((option, index) => (
        <li key={index}>
          <Link href={option.link || "#"}>{option.value}</Link>
        </li>
      ))}
      <li>
        <Link href="tel:">
          <button className="flex justify-center items-center btn-brown">
            <Phone className="w-4 h-auto mr-2" />
            {"Contact us"}
          </button>
        </Link>
      </li>
    </ul>
  </div>
);

const DesktopNavbar = ({ options }) => (
  <ul className="hidden md:flex md:flex-row md:items-center md:justify-end md:gap-4">
    {options.map((option, optionIndex) => (
      <li className="text-base font-medium" key={optionIndex}>
        <Link href={option.link || "#"} aria-description={`Click here to see ${option.value}`}>
          {option.value}
        </Link>
      </li>
    ))}
    <li>
      <Link href="tel:">
        <button className="flex justify-center items-center btn-brown">
          <Phone className="w-4 h-auto mr-2" />
          {"Contact us"}
        </button>
      </Link>
    </li>
  </ul>
);

const NavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-4 navigation">
      <div className="flex items-center justify-between mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <Link href="/" className="w-fit block">
          <div className="navbar-logo-wrapper w-fit h-auto">
            {NavigationData.logo.imgURL ? (
              <Image
                src={NavigationData.logo.imgURL}
                alt={NavigationData.logo.title || "Elara"}
                width={"160"}
                height={"200"} // auto
              />
            ) : (
              <div className="navbar-logo-htmlContent flex flex-col items-start">
                <span className="logo-htmlContent--headlineText font-medium text-xl">
                  {"Elara"}
                </span>
                <span className="logo-htmlContent--descriptionText font-normal text-sm -mt-1">
                  {"Home Fittings"}
                </span>
              </div>
            )}
          </div>
        </Link>

        <div className="md:hidden">
          {/* Hamburger menu icon for small screens */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block text-3xl focus:outline-none"
          >
            <span
              className={`${
                menuOpen ? "hidden" : "block"
              } hamburger-menu-icon`}
            >
              &#9776;
            </span>
            <span
              className={`${
                menuOpen ? "block" : "hidden"
              } close-menu-icon text-3xl`}
            >
              &times;
            </span>
          </button>
        </div>
        {/* Render the desktop navbar options */}
        <DesktopNavbar options={NavigationData.options} />
      </div>
      {/* Render the mobile menu component when menuOpen is true */}
      {menuOpen && <MobileMenu options={NavigationData.options} />}
    </nav>
  );
};

export default NavigationSection;
