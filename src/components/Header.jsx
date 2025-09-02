import reactLogo from "../assets/react.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <img src={reactLogo} className="site-logo" alt="React Logo" />
      <Navbar />
    </header>
  );
}

export default Header;
