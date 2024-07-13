import "./header.css";
import loop from "../../assets/icons/loop.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import home from "../../assets/icons/header/home.svg";
import catalog from "../../assets/icons/header/tv.svg";
import about from "../../assets/icons/header/about.svg";
import { getSearchHeader } from "../../store/linkSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const [text, setText] = useState<string>("");
  const dispatch = useDispatch();

  const setSearch = () => {
    dispatch(getSearchHeader(text))
  }

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <span className="logo_start">BEST</span>
          <span className="logo_end">Movies</span>
        </Link>
      </div>
      <nav>
        <Link to={"/"}>
          <div className="header_link">
            <img src={home} />
           <p>Home</p>
          </div>
        </Link>
        <Link to={"/movies"}>
          <div  className="header_link">
            <img src={catalog} />
            <p>Movies</p>
          </div>
        </Link>
        <Link to={"/contact"}>
          <div  className="header_link">
            <img src={about} />
            <p>Contact us</p>
          </div>
        </Link>
      </nav>
      <div className="search">
        <input onChange={(event) => { setText(event.target.value); }} type="text" placeholder="Search" value={text}/>
        <Link to={"/movies"} onClick={() => {setSearch()}}>
          <div className="line">
            <img src={loop} />
          </div>
        </Link>
      </div>
    </header>
  );
}
