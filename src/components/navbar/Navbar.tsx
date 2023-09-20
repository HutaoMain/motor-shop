import "./Navbar.css";
import { LocalMall } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <img src={logo} alt="moditect logo" className="nav-logo" />
        <section className="nav-link-container">
          <span className="nav-link">HOME</span>
          <span className="nav-link">ABOUT</span>
          <span className="nav-link">SHOP</span>
          <span className="nav-link">CONTACT</span>
        </section>
        <section className="nav-action-container">
          <button className="nav-btn">LOGIN</button>
          <Badge badgeContent={4} color="primary">
            <LocalMall sx={{ color: "black" }} />
          </Badge>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
