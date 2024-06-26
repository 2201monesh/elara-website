import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutCTASection = () => {
  return (
    <section className="about-cta-section">
      <div className="mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <div className="about-cta-content-container rounded-2xl overflow-hidden bg-light flex flex-col md:flex-row items-stretch justify-between">
          <div className="about-content-section px-10 pt-10 pb-16 md:w-1/2">
            <h1 className="about-headline text-5xl sm:text-6xl font-semibold text-brown leading-[68px]">
              Your Trusted <br />
              for Source <br />
              Home Security <br />
              and Style
            </h1>
            <div className="about-description text-brown w-full sm:w-[340px] mt-6">
              <p className="">
                Discover a world of premium locks and home fittings tailored to
                your needs.
              </p>
              <p className="mt-3">
                Our commitment to excellence shines through our wide range of
                high-quality products.
              </p>
            </div>
            <Link href="/products">
              <button
                className="btn-brown justify-center items-center mt-12 flex flex-row gap-1 hover:gap-1.5 transition-all"
              >
                Explore Products
                <ArrowRight className="w-4 h-auto" />
              </button>
            </Link>
          </div>
          <div className="action-image-container flex flex-row items-center justify-center overflow-hidden md:w-1/2">
            <Image
              // src="/media/door-kit-img.jpeg"
              src="/media/aboutSectionImageElara.jpg"
              alt="home image"
              width={"600"}
              height={"400"}
              className="h-[100%] transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTASection;
