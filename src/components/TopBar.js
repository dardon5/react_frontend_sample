import React from "react";
import logo from "../levvel-logo.svg";
import Divider from "@mui/material/Divider";
import "./TopBar.scss";

//Used component from Material UI library for the divider between logo and Blogs heading.

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <img src={logo} className="App-logo" alt="logo" />
        <Divider orientation="vertical" flexItem className="divider" />
        <h1 className="title">Blogs</h1>
      </div>
    </div>
  );
}
