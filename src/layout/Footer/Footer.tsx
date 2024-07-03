import "./footer.css";
import tg from "../../assets/icons/tg.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import inst from "../../assets/icons/insta.svg";

export default function Footer() {
  return (
    <footer>
      <div className="logo">
        <span className="logo_start">BEST</span>
        <span className="logo_end">Films</span>
      </div>

      <div>
        <p>Home</p>
        <p>Movies</p>
        <p>Series</p>
        <p>Top films</p>
      </div>

      <div className="contact">
        <p>you need help?</p>
        <div className="social">
          <img src={tg} />
          <img src={inst} />
          <img src={whatsapp} />
        </div>
      </div>
    </footer>
  );
}
