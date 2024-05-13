import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <Login />
      <Footer />
    </>
  );
}
