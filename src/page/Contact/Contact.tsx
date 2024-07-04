import tg from "../../assets/icons/tg.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import inst from "../../assets/icons/insta.svg";
import "./contact.css";

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
    </div>
  );
}
