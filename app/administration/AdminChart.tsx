import React, { Fragment } from "react";
import {
    PhoneOutlined,
    VideoCameraOutlined,
    MessageOutlined,
  } from '@ant-design/icons';
import call from "./icons8-call-50.png";
import video from "./icons8-video-24.png";
import chat from "./icons8-chat-50.png";
import data from "./data.json";

const names = ["Kim", "Danny", "John", "Khan", "Korng", "Nat", "JJ", "Johnny", "Mark", "Jack", "Winnie", "Steve", "Wong", "Lee", "Olive"];
const roles = ["CEO", "CFO", "Product Manager", "Product Manager", "Product Manager", "Marketing Manager", "Store Manager 1", "Store Manager 2", "Teller", "Teller", "Teller", "Teller", "Teller", "Teller"];

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const Card = (props) => {
  const levelColor = "green";

  return (
    <ul>
      {props.data.map((item,index) => (
        <Fragment key={item.name}>
          <li>
            <div className="card" style={{textAlign: "center"}}>
              <div className="image">
                <img
                  src={"https://randomuser.me/api/portraits/women/"+randomIntFromInterval(1,100)+".jpg"}
                  alt="Profile"
                  style={{ borderColor: levelColor, margin: "auto" }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
                <MessageOutlined />
                <PhoneOutlined />
                <VideoCameraOutlined />
              </div>
                <br />
              <div></div>
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const AdminChart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default AdminChart;
