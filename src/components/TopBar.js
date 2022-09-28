import React from "react";
import { Link } from "react-dom";
import logo from "../levvel-logo.svg";
import Divider from "@mui/material/Divider";
import "./TopBar.scss";

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
