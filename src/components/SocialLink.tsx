import { type Icon } from "react-feather";

interface SocialLinkProps {
  icon: Icon;
  size?: number;
  href: string;
  label?: string;
  labelSize?: number;
  foregroundColor?: string;
  backgroundColor?: string;
  border?: string;
}

const SocialLink = ({
  icon: IconComponent,
  size = 20,
  href,
  label,
  labelSize = 12,
  foregroundColor = "#000",
  backgroundColor = "#0000",
  border = "none",
}: SocialLinkProps) => {
  return (
    <a
      className="flex items-center gap-2 p-[2px_6px] rounded-lg"
      style={{
        background: backgroundColor,
        border: border,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      { 
        label && <p
          className="rubik-semibold"
          style={{
            fontSize: labelSize,
            color: foregroundColor,
          }}
        >
          { label }
        </p>
      }
      <IconComponent
        style={{ color: foregroundColor }}
        size={size}
      />
    </a>
  );
}

export default SocialLink;