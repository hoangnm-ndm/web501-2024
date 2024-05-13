import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      {/* <Header />
      <main className="container">
        <HomePage />
      </main>
      <Footer /> */}
      <NotFoundPage />
    </>
  );
}

export default App;
