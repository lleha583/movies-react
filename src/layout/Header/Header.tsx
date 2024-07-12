import "./header.css";
import loop from "../../assets/icons/loop.svg";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../../components/Sidebar/SideBar";

export default function Header() {

  const [text, setText] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);


  const openModal = () => {
    (modal === true) ? (setModal(!modal)) : (setModal(!modal))
  }

  
  if (window.innerWidth < 1000) {
    return (
      <header>
      <div onClick={openModal} className="modal_side">
        <div className="btn_modal">
          <p className="modal_line"></p>
        </div>
        <div>
        <span className="logo_start">BEST</span>
        <span className="logo_end">Movies</span>
        </div>
        {
          (modal === true) ?  (<SideBar />) : ('')
        }
      </div>
      </header>
    )
  }
  
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
