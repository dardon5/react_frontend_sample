import React from "react";
import Data from "./Data";
import "./Author.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

//useLocation hook utlized to get state from Blog component.

export default function Author() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const blog = Data();
  return (
    <div className="container">
      <h1 className="header">Check out these blogs by {userId}!</h1>
      <div className="card">
        <div className="content">
          <div className="header-card">
            <h1>{userId}</h1>
            <div
              className="wrapper"
              onClick={() => {
                navigate("/");
              }}
            >
              <IconButton>
                <ArrowForwardIcon color="primary" fontSize="large" />
              </IconButton>
            </div>
          </div>
          <Divider orientation="horizontal" flexItem className="divider" />
          {blog.map((blog) => {
            if (blog.userId === userId)
              return (
                <div>
                  <h2 key={blog.title}>{blog.title}</h2>
                  <p key={blog.body}>{blog.body}</p>
                  <Divider
                    orientation="horizontal"
                    flexItem
                    className="divider"
                  />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
