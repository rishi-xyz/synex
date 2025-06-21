"use client";


import {motion} from "framer-motion";
import startsBg from "@/assets/stars.png";
import Header from "@/src/components/marketing-page/header";
import HeroSection from "@/src/components/marketing-page/hero";
import FeaturesSection from "@/src/components/marketing-page/features";
import ProductShowcase from "@/src/components/marketing-page/product-showcase";
import Footer from "@/src/components/marketing-page/footer";

export default function Home() {
  return (
    <motion.section
    style={{
      backgroundImage: `url(${startsBg.src})`,
    }}
    animate={{
      backgroundPositionX:startsBg.width,
    }}
    transition={{
      repeat:Infinity,
      duration:30,
      ease:"linear",
    }}
    >
    <Header/>
    <HeroSection/>
    <FeaturesSection/>
    <ProductShowcase />
    <Footer/>
    </motion.section>
  );
}