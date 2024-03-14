import Image from "next/image";
import LandingHeroSection from '/components/section/landing-hero'
import AboutCTASection from '/components/section/about'
import ProductSection from '/components/section/products-section'
import QualitiesSection from '/components/section/qualities'
import FAQSection from '/components/section/faq'

export default function Home() {
  return (
    <div className="home-view">
      <LandingHeroSection />
      <div id="about">
        <AboutCTASection />
      </div>
      <ProductSection />
      <QualitiesSection />
      <FAQSection />
    </div>
  );
}
