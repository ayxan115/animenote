import { FaRegUser } from "react-icons/fa";

function Header() {
    return (
      <div className="header">
        <div className="logo">
          <p>Anime note</p>
        </div>
        <nav>
          <p>Сохронены</p>
          <div className="user"><FaRegUser/></div>
        </nav>
      </div>
    );
  }
  
  export default Header;