import "./Header.css";
import Logo from "../assets/logo512.png";

export const Header = () => {
  return (
    <header>
        <img className="logo" src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}
