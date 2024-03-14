import Link from "next/link";

const LandingHeroSection = () => {
  return (
    <main className="landingPage-hero-section my-8 md:my-32 relative">
      <div className="mx-auto w-[1200px] max-2xl:w-[1200px] max-xl:w-[840px] max-lg:w-[650px] max-md:w-[600px] max-sm:w-[360px]">
        <h1 className="landingP-headline text-4xl md:text-7xl font-bold text-center mx-auto">
          Elevate your life, <br /> with better security
        </h1>
        <p className="landingPage-description text-lg md:text-xl font-normal text-neutral-500 max-w-xl text-center mx-auto my-4">
          Elevate your home's security and aesthetic appeal with our premium
          locks and home fittings, elegance in every detail.
        </p>
        <div className="landingPage-cta-wrapper flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-fit gap-4">
          <Link href="/#faq">
            <button className="btn">{"Read FAQs"}</button>
          </Link>
          <Link href="/products">
            <button className="btn">
              {"Explore Products"}
              {/* <ArrowRight className="w-4 h-auto" /> */}
            </button>
          </Link>
        </div>
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 -z-10 h-[150px] w-[150px] animate-pulse rounded-full bg-orange-200 blur-3xl transition-all hidden md:block" />
        <div className="absolute -top-20 left-1/3 transform -translate-x-1/3 -z-10 h-[150px] w-[150px] animate-pulse rounded-full bg-purple-300 blur-3xl transition-all hidden md:block" />
      </div>
    </main>
  );
};

export default LandingHeroSection;
