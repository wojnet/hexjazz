import Logo from "../Logo";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header className="w-full h-44 flex justify-center items-center">
      <Logo
        fadeIn={true}
        height={104}
      />
    </header>
  );
}

export default Header;