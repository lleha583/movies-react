import { Link } from "react-router-dom";
import "./sideBar.css";

export default function SideBar() {
    

  return (
    <div className="bg_dark">
      <div className="side">
        <Link to={'/'}>Home</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/contact'}>Contact us</Link>
      </div>
    </div>
  );
}
