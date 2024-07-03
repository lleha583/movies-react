import "./header.css";
import loop from "../../assets/icons/loop.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

  const [text, setText] = useState('');

  return (
    <header>
      <div className="logo">
        <Link to='/'>
          <span className="logo_start">BEST</span>
          <span className="logo_end">Movies</span>
        </Link>
      </div>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/contact'}>Contact us</Link>
      </nav>
      <div className="search">
        <input onChange={(event) => {setText(event.target.value)}} type="text" placeholder="Search" value={text} />
        <div className="line">
              <img src={loop}/>
        </div>
      </div>
    </header>
  );
}
