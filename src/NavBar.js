import logo from "./images/favicon.jpeg";
// import twitter from "./images/Twitter Logo.png";
// import instagram from "./images/IG Logo.png";
// import linkedin from './images/LinkedIn.png';
// import facebook from "./images/FaceBook Logo.png";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="top">
      <Link className="title" to="/">
        Chef Kiss
      </Link>
      <Link to="/">
        <img src={logo} className="logo" id="logo" alt="logo" />
      </Link>
      <Button
        id="drawerButton"
        type="primary"
        style={{ backgroundColor: "white" }}
        onClick={showDrawer}
      >
        <MenuOutlined
          style={{
            fontSize: `calc((2 - 1) * 1vw + 1rem)`,
            color: "black",
          }}
        />
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={open}
        style={{ backgroundColor: "black", color: "white" }}
      >
        <p className="drawerSection">Pages</p>
        <Link
          className="drawerLink"
          onClick={() => {
            setOpen(false);
          }}
          to="/preps"
        >
          Meal Preps
        </Link>
        <Link
          className="drawerLink"
          onClick={() => {
            setOpen(false);
          }}
          to="/recipes"
        >
          Recipes
        </Link>
        <Link
          className="drawerLink"
          onClick={() => {
            setOpen(false);
          }}
          to="/merch"
        >
          Merch
        </Link>
        <Link
          className="drawerLink"
          onClick={() => {
            setOpen(false);
          }}
          to="/contact"
        >
          Contact
        </Link>
        <p className="drawerSection" style={{ marginTop: 60 }}>
          Socials
        </p>
        <a
          className="drawerLink"
          href="https://www.tiktok.com/@chefkiss.unlimited?_t=8cR7VdxRBJi&_r=1"
        >
          TikTok
        </a>
        <a className="drawerLink" href="https://www.instagram.com/chef.kiss_/">
          Instagram
        </a>
        <a
          className="drawerLink"
          href="https://www.facebook.com/profile.php?id=100091967840765&mibextid=LQQJ4d"
        >
          Facebook
        </a>
      </Drawer>
    </div>
  );
};

export default NavBar;
