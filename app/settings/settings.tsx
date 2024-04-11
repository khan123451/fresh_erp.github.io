'use client'
import React from 'react';
import { Layout, Breadcrumb, Card, Row, Col } from 'antd/lib';
const { Content } = Layout;
import pic from '../../public/profile-picture-url.png';

const Settings = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    profilePictureUrl: "./profile-picture-url.png", // Default or existing profile picture
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would handle updating the user information
    console.log("Updated user info:", user);
  };
  
  return (
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Settings</Breadcrumb.Item>
          </Breadcrumb>
            <div>
              <h1>Account Details</h1>
              <div style={{ textAlign: "center" }}>
                <img src={user.profilePictureUrl} alt="Profile Picture" style={{ width: "200px", height: "200px", borderRadius: "50%", margin: "auto" }} />
                <br />
                <form onSubmit={handleSubmit}>
                    <h2>
                        Profile Picture
                    </h2>
                    <br />
                    <label>
                        Name:{user.name}
                    </label>
                    <br />
                    <label>
                        Email:{user.email}
                    </label>
                    <br />
                    <button type="submit" style={{ padding: "20px", margin: "10px", width: "400px", backgroundColor: "#04AA6D", borderRadius: "20px", color: "white", fontSize: "20px" }}>Update Account</button>
                </form>
              </div>
            </div>
          </Content>
      </Layout>
  );
};

export default Settings;
