import "./footer.css";
import tg from "../../assets/icons/footer/tg.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";
import inst from "../../assets/icons/footer/insta.svg";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <span className="logo_start">BEST</span>
        <span className="logo_end">Films</span>
      </div>

      <div className="footer_link">
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>

      <div className="footer_contact">
        <h3>you need help?</h3>
        <div className="social">
          <img src={tg} />
          <img src={inst} />
          <img src={whatsapp} />
        </div>
      </div>
      <Outlet />
    </footer>
  );
}
