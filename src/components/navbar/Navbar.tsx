import "./Navbar.css";
import { LocalMall } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import { Drawer } from "antd";
import Checkout from "../checkout/Checkout";
import { useState } from "react";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showManagementDropdown, setShowManagementDropdown] =
    useState<boolean>(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  const toggleManagementDropdown = () => {
    setShowManagementDropdown(!showManagementDropdown);
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <img src={logo} alt="moditect logo" className="nav-logo" />
        <section className="nav-link-container">
          <span className="nav-link">HOME</span>
          <span className="nav-link">ABOUT</span>
          <span className="nav-link">SHOP</span>
          <span className="nav-link">CONTACT</span>
          <div className="nav-dropdown" onClick={toggleManagementDropdown}>
            <span className="nav-link">MANAGEMENT</span>
            {showManagementDropdown && (
              <div
                className="dropdown-content"
                style={
                  showManagementDropdown
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <Link style={{ textDecoration: "none" }} to="/admin/products">
                  <span>PRODUCT MANAGEMENT</span>
                </Link>
                <span>ITEM 2</span>
                <span>ITEM 3</span>
              </div>
            )}
          </div>
        </section>
        <section className="nav-action-container">
          <button className="nav-btn">LOGIN</button>
          <Badge badgeContent={4} color="primary" onClick={showDrawer}>
            <LocalMall sx={{ color: "black" }} />
          </Badge>
        </section>
      </div>
      <Drawer placement="right" onClose={onCloseDrawer} open={open}>
        <Checkout />
      </Drawer>
    </div>
  );
};

export default Navbar;
