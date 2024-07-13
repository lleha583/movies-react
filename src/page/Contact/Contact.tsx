import tg from "../../assets/icons/footer/tg.svg";
import whatsapp from "../../assets/icons/footer/whatsapp.svg";
import inst from "../../assets/icons/footer/insta.svg";
import "./contact.css";
import { Routes, Route } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";

export default function Contact() {
  return (
    <div className="contact">
      <h1>e-mail:</h1>
      <p className="mail link">Lleha583@gmail.ru</p>

      <h1>social network:</h1>
      <div className="link">
        <img src={tg} />
        <img src={inst} />
        <img src={whatsapp} />
      </div>
      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}
