import { motion } from "framer-motion";
import { GitHub, Linkedin, Code } from "react-feather";
import SocialLink from "../SocialLink";
import Logo from "../Logo";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <motion.div
    className="w-full h-24"
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    >
      <footer className="w-full h-full flex justify-between px-8 py-4">
        <Logo
          height={52}
        />
        <div className="flex flex-col items-end gap-4">
          <p className="rubik-regular text-xs">
            Made with ❤️ by Wojciech Glid
          </p>
          <div className="flex gap-2">
            <SocialLink
              href="https://wojciechglid.vercel.app/"
              icon={Code}
              size={16}
              label="Portfolio"
              backgroundColor="#4E56C0"
              foregroundColor="white"
              border="2px solid #0e2653"
            />
            <SocialLink
              href="https://www.linkedin.com/in/wojciech-glid-49898a222/"
              icon={Linkedin}
              size={16}
              label="LinkedIn"
              backgroundColor="#ED3F27"
              foregroundColor="white"
              border="2px solid #0e2653"
            />
            <SocialLink
              href="https://github.com/wojnet"
              icon={GitHub}
              size={16}
              label="GitHub"
              backgroundColor="#FEB21A"
              foregroundColor="white"
              border="2px solid #0e2653"
            />
            {/* <a href="https://www.linkedin.com/in/wojciech-glid-49898a222/" target="_blank">
              <Linkedin size={20} />
            </a> */}
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Footer;