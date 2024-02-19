import { FaBarsStaggered } from "react-icons/fa6";
import { BsMoon } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFormatColorText } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="image-container">
        <img src="" alt="" className="logo" />
        <FaBarsStaggered />
      </div>
      <div className="icons-container">
        <BsMoon className="icon" />
        <IoMdNotificationsOutline className="icon" />
        <MdOutlineFormatColorText className="icon" />
        <img src="" alt="avatar" />
      </div>
    </nav>
  );
};
export default Navbar;
