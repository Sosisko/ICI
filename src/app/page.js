"use client";

// Components
import HeroSection from "./components/Home/HeroSection/HeroSection";
import ServicesSection from "./components/Home/ServicesSection/ServicesSection";
import CatalogSection from "./components/Home/Catalog/CatalogSection";
import InfoSection from "./components/Home/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";

// Styles
import s from "./home.module.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CatalogSection />
      <InfoSection />
      <Footer />
    </>
  );
}
