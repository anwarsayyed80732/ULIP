import React from "react";
import About from "../components/molecules/About";
import Features from "../components/molecules/Features";
import Footer from "../components/molecules/Footer";
import Landing from "../components/molecules/Landing";
import Navbar from "../components/molecules/Navbar";

export default function Home() {
  return (
    <>
      <Navbar type="landing" />
      <div id="home">
        <Landing />
        <About />
        <Features />
        <Footer />
      </div>
    </>
  );
}
