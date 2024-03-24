import { LucideFacebook, LucideInstagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
  const socialMediaLinks = [
    {
      name: "Facebook",
      link: "https://facebook.com",
      icon: <LucideFacebook className="w-6 h-6" />,
    },
    {
      name: "Instagram",
      link: "https://instagram.com",
      icon: <LucideInstagram className="w-6 h-6" />,
    },
  ];

  const productsAndServicesLinks = [
    {
      name: "All Products",
      link: "/",
    },
    {
      name: "Locks",
      link: "/",
    },
  ];

  const companyLinks = [
    {
      name: "Contact",
      link: "/",
    },
    {
      name: "Privacy Policy",
      link: "/",
    },
    {
      name: "Terms & Conditions",
      link: "/",
    },
  ];

  return (
    <footer className="footer-section">
      <div className="mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <footer className="bg-white lg:grid lg:grid-cols-5">
          <div className="relative block h-32 lg:col-span-2 lg:h-full">
            <Image
              // src="/media/about-lock.avif"
              src="/media/door-kit-img.jpeg"
              alt="logo"
              layout="fill"
              className="object-cover object-center
              rounded-t-2xl
              "
            />
          </div>

          <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                {" "}
                <div className=" flex flex-col items-start mb-5">
                  <span className="font-medium text-4xl">{"Elara"}</span>
                  <span className="font-normal text-lg text-brown">
                    {"Home Fittings"}
                  </span>
                </div>
                <p>
                  <span className="text-xs uppercase tracking-wide text-brown">
                    Call us
                  </span>

                  <a
                    href="tel:+91-8868861935"
                    className="block text-2xl font-medium text-brown hover:opacity-75 sm:text-3xl"
                  >
                    (+91) 8868861935
                  </a>
                </p>
                <ul className="mt-8 space-y-1 text-sm text-brown">
                  <li>Monday to Friday: 10am - 5pm</li>
                  <li>Weekend: 10am - 3pm</li>
                </ul>
                <ul className="mt-8 flex gap-6">
                  {socialMediaLinks.map((socialMediaLink, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href="/"
                          rel="noreferrer"
                          target="_blank"
                          className="text-brown transition hover:opacity-75"
                        >
                          <span className="sr-only">
                            {socialMediaLink.name}
                          </span>
                          {socialMediaLink.icon}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-medium text-brown">Quicklinks</p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {productsAndServicesLinks.map(
                      (productsAndServicesLink, index) => {
                        return (
                          <li key={index}>
                            <Link
                              href={productsAndServicesLink.link}
                              className="text-brown transition hover:opacity-75"
                            >
                              {productsAndServicesLink.name}
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-brown">
                    Customer Service
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    {companyLinks.map((companyLink, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={companyLink.link}
                            className="text-brown transition hover:opacity-75"
                          >
                            {companyLink.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-100 pt-12">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="">
                  <ul className="flex flex-wrap gap-4 text-xs">
                    <li>
                      <a
                        href="#"
                        className="text-brown transition hover:opacity-75"
                      >
                        Terms & Conditions
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-brown transition hover:opacity-75"
                      >
                        Privacy Policy
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        className="text-brown transition hover:opacity-75"
                      >
                        Cookies
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <p className="mt-8 text-xs text-brown sm:mt-0">
                    This website is built with{" "}
                    <a
                      href="https://nextjs.org/"
                      className="text-brown transition hover:opacity-75 underline"
                    >
                      dunolabs.in
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default FooterSection;
