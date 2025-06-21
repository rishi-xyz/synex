"use client";

import { Button } from "@/src/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleTryNowClick = () => {
    // Action on click
  };

  return (
    <section
      className="h-screen flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      id="Home"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(255,0,255,0.3)_15%,rgb(14,0,36,0.7)_78%,transparent)]"></div>

      {/* Planet */}
      <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-fuchsia-500 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_60px_rgb(255,0,255,0.6)] bg-[radial-gradient(50%_50%_at_20%_20%,white,rgba(255,0,255,0.4),#180042)] border border-white/30"></div>

      {/* Rotating Rings */}
      {[244, 444, 644].map((size, i) => (
        <motion.div
          key={i}
          animate={{ rotate: "1turn" }}
          transition={{ duration: 30 * (i + 1), repeat: Infinity, ease: "linear" }}
          className={`absolute border ${i === 1 ? "border-white/40 border-dashed" : "border-white/50"} rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/6 opacity-20`}
          style={{
            translateY: "-30%",
            height: `calc(${size}px + 20vw)`,
            width: `calc(${size}px + 20vw)`,
          }}
        >
          {i === 0 && (
            <>
              <div className="absolute h-2 w-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute h-2 w-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute h-5 w-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="h-2 w-2 bg-white rounded-full"></div>
              </div>
            </>
          )}
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="container relative text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-[160px] font-extrabold tracking-tighter bg-gradient-to-br from-fuchsia-500 via-white to-fuchsia-300 bg-clip-text text-transparent">
          SyneX AI
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-4 max-w-2xl mx-auto">
          Your AI Agent to interact<br className="hidden sm:block" /> with the Blockchain.  
        </p>
        <div className="mt-8">
          <Button onClick={handleTryNowClick} >
            Start Now
          </Button>
        </div>
      </div>

      {/* Gradient Shadow Bottom */}
      <div className="absolute h-[375px] w-full rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-fuchsia-300 bg-[radial-gradient(closest-side,#000_82%,#FF00FF)] top-[calc(100%-96px)]"></div>
    </section>
  );
};

export default HeroSection;
