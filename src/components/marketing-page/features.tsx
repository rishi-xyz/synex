"use client";

import {
  Bot,
  MessagesSquareIcon,
  Layers,
  History,
  Sliders,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
  {
    title: 'Natural Language Blockchain Queries',
    description:
      'Ask questions like `What’s the ETH balance of 0x…` or `List recent NFT mints.`',
    icon: <MessagesSquareIcon />,
  },
  {
    title: 'Multi-Chain Support',
    description:
      'Choose between Ethereum, Solana, and more — SyneXAI connects you to multiple blockchains seamlessly.',
    icon: <Layers />,
  },
  {
    title: 'Chatbot UI',
    description:
      'Familiar interface that feels like a modern AI chat assistant.',
    icon: <Bot />,
  },
  {
    title: 'Chat History Storage',
    description:
      'Your previous queries are saved securely — revisit or continue any conversation.',
    icon: <History />,
  },
  {
    title: 'Custom Chain Settings',
    description:
      'Customize your blockchain context and preferences with global state management.',
    icon: <Sliders />,
  },
];

const FeatureItem = ({ title, description, icon }:{
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  const offsetx = useMotionValue(-100);
  const offsety = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 1100px at ${offsetx}px ${offsety}px, black, transparent)`;
  const border = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (e:any) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetx.set(e.clientX - borderRect.x);
      offsety.set(e.clientY - borderRect.y);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [offsetx, offsety]);

  return (
    <div className="relative flex-1 p-6 border border-white/30 rounded-xl bg-black text-center hover:scale-[1.03] transition-transform duration-300">
      <motion.div
        ref={border}
        className="absolute inset-0 border-4 border-fuchsia-700 rounded-xl pointer-events-none"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
      />
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg transition-transform duration-300 hover:scale-125">
        {icon}
      </div>
      <h3 className="mt-6 font-bold text-lg md:text-xl">{title}</h3>
      <p className="mt-2 text-white/70 text-sm md:text-base">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-transparent text-white py-16 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-semibold ">
          Tailored for You
        </h2>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-2xl mx-auto">
          Powered by intelligence. Aligned with you.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon }) => (
            <FeatureItem key={title} title={title} description={description} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
