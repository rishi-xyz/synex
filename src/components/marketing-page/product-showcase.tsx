import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const ProductImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ProductImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section className="bg-gradient-to-b from-black via-black to-fuchsia-950 py-[72px] px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-br from-fuchsia-500 via-white to-fuchsia-700 bg-clip-text text-transparent mb-6">
          Solutions in Action
        </h2>
        <p className="text-center text-white/70 text-base md:text-lg max-w-2xl mx-auto">
          See how it all comes together.
        </p>

        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "1000px",
          }}
          className="mt-14"
        >
          {/* <Image
            src={ProductScreen}
            alt="Product Dashboard Screenshot"
            className="rounded-2xl mx-auto shadow-lg border border-fuchsia-500"
            ref={ProductImage}
            placeholder="blur"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
