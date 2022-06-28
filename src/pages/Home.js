import React from "react";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Navigations from "../components/Navigations";
import Outils from "../components/Outils";
import Proverbe from "../components/Proverbe";
import Questions from "../components/Questions";
import ServicesUn from "../components/ServicesUn";

const Home = () => {
  return (
    <div>
      <Navigations />
      <Head />
      <Bio />
      <ServicesUn />
      <Proverbe />
      <Outils />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
