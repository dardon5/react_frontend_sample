import React from "react";
import "./Blog.scss";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

//useNavigate hook utlized for routing and state purposes for the author component.

export default function Blog(props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="content">
        <div className="header-card">
          <h1 key={props.blog.id}>{props.blog.userId}</h1>
          <div
            className="wrapper"
            onClick={() => {
              {
                const userId = props.blog.userId;
                navigate("/author", { state: { userId } });
              }
            }}
          >
            <IconButton>
              <ArrowForwardIcon color="primary" fontSize="large" />
            </IconButton>
          </div>
        </div>
        <Divider orientation="horizontal" flexItem className="divider" />
        <h2 key={props.blog.title}>{props.blog.title}</h2>
        <p key={props.blog.body}>{props.blog.body}</p>
      </div>
    </div>
  );
}
