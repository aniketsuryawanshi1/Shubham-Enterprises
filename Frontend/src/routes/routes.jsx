import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/index";
import { Layout } from "antd";
import Navbar from "../components/Navbar/Navbar";

const { Content, Footer } = Layout;
function MainRoutes() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Content>
        {/* <Footer style={{ textAlign: "center", padding: "10px 0" }}>
          Footer Content
        </Footer> */}
      </Layout>
    </Router>
  );
}

export default MainRoutes;
