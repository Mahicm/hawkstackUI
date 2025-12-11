import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import cloud from "../../assets/hero/cloud.png";
import cubes from "../../assets/hero/cube.png";
import security from "../../assets/hero/security.png";
import rhcsa from "../../assets/hero/rhcsa.png";
import response from "../../assets/hero/Group.png";

export default function HeroGraphics() {
  const [animateNow, setAnimateNow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateNow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full flex items-center justify-center">
      <motion.img
        src={cloud}
        className="absolute top-6 left-10 w-[200px]"
        animate={animateNow ? { x: [-10, 10, -10] } : { x: 0 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      />

      <img src={cubes} className="w-[420px] drop-shadow-2xl" />

      <motion.img
        src={security}
        className="absolute top-[100px] right-[15px] w-[240px]"
        animate={animateNow ? { y: [0, 20, 0] } : { y: 0 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
      />

      <img
        src={response}
        className="absolute bottom-[-70px] right-[80px] w-[210px]"
      />

      <motion.img
        src={rhcsa}
        className="absolute bottom-[-80px] left-[42px] w-[180px]"
        animate={animateNow ? { y: [0, -20, 0] } : { y: 0 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );
}
