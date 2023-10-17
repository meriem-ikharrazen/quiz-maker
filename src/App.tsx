import React from "react";
import { Breadcrumb, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import quizIcon from "./assets/images/quiz.png";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Layout>
      <Header className="Header">
        <img src={quizIcon} alt="quiz-maker" className="icon" />
        Quiz Maker
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="Content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz/category/:id" element={<Home />} />
              <Route path="/counter" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Quiz Maker ©2023 By Meriem IKHARRAZEN
      </Footer>
    </Layout>
  );
}

export default App;
