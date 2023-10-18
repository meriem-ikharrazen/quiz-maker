import React from "react";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import quizIcon from "./assets/images/quiz.png";
import { Home } from "./pages/Home/Home";
import { Result } from "./pages/Result/Result";

function App() {
  return (
    <Layout>
      <Header className="Header">
        <img src={quizIcon} alt="quiz-maker" className="icon" />
        Quiz Maker
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
          backgroundColor: "white",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="Content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Result />} />
              <Route path="/counter" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
