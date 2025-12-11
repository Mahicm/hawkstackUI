import { motion } from "framer-motion";

import cloud from "../../assets/hero/cloud.png";
import cubes from "../../assets/hero/cube.png";
import security from "../../assets/hero/security.png";
import rhcsa from "../../assets/hero/rhcsa.png";
import response from "../../assets/hero/Group.png";

export default function HeroGraphics() {
  return (
    <div className="relative w-full  flex items-center justify-center">

      {/*CLOUD */}
      <motion.img
        src={cloud}
        className="absolute top-6 left-0 w-[200px]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: [-10, 0, -10] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CUBES*/}
      <motion.img
        src={cubes}
        className="w-[420px] drop-shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* SECURITY BADGE */}
      <motion.img
        src={security}
        className="absolute top-[100px] right-[15px] w-[240px]"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut",
        }}
      />

      {/*RESPONSE / EVENTS BOX */}
      <motion.img
        src={response}
        className="absolute bottom-[-80px] right-[60px] w-[210px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.45,
          duration: 0.8,
          ease: "easeOut",
        }}
      />

       {/* RHCSA BADGE  */}
      <motion.img
        src={rhcsa}
        className="absolute bottom-[-80px]  left-[42px] w-[180px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.9,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
      />
    </div>
  );
}
