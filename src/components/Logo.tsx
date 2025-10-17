import { motion } from "framer-motion";
import HexleLogo from "../assets/Hexle.png";

interface LogoProps {
  height?: number,
  fadeIn?: boolean,
}

const Logo = ({ height = 104, fadeIn = false }: LogoProps) => {
  if (fadeIn) return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <img
        className="rendering-crisp-edges select-none pointer-events-none"
        style={{ height: height }}
        src={HexleLogo}
        alt="Hexle Logo"
      />
    </motion.div>
  );

   return (
    <img
        className="rendering-crisp-edges select-none pointer-events-none"
        style={{ height: height }}
        src={HexleLogo}
        alt="Hexle Logo"
      />
  );
}

export default Logo;