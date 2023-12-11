import Class from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {MdAccountBox} from "react-icons/md";
import {IoIosArrowDown} from "react-icons/io";

export default function Navbar() {
  return (
    <div className={Class.container}>
      <div className={Class.icon}>
        <span>NipponHarbor</span>
      </div>
      <div className={Class.navItems}>
        <Link to="/articles" className={Class.navItem}>
          Articles
        </Link>

        <Link to="/" className={Class.navItem}>
          Flashcards
        </Link>
      </div>
      <div className={Class.accountDropdown}>
        <div className={Class.header}>
          <MdAccountBox />
          <IoIosArrowDown />
        </div>
        {/* <div className={Class.dropdown}>
            <Link to="/">Login</Link>
            <Link to="/">Register</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">Profile</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">Logout</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">Settings</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">About</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">Contact</Link>
          </div>
          <div className={Class.dropdown}>
            <Link to="/">Privacy</Link>
          </div> */}
      </div>
    </div>
  );
}
