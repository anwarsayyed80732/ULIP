import React from "react";
import About from "./About";
import Features from "./Features";
import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Landing />
        <About />
        <Features />
        <Footer />
      </div>
    </>
  );
}
