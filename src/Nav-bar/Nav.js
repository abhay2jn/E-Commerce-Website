import { FiHeart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import "./Nav.css";

function Nav( {handleInputChange , query}) {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="Search-input" onChange={handleInputChange} value={query} placeholder="Search your shoes"></input>
      </div>
      <div className="profile-container">
        <a href="#">
        <FiHeart className="nav-icons" />
        </a>

        <a href="#">
          <FaUser className="nav-icons" />
        </a>

        <a href="#">
          <FaCartShopping className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;