import React from "react";
import Navigation from "../../components/navigation/navigation";
import HeroSection from "../../components/hero/hero";
import Main from "../../components/main/main";
import Accordion from "../../components/accordion/accordion";
import Footer from "../../components/footer/footer";
// import styles from "./base.module.scss";

export default function Landingpage() {
  return (
    <div className="flex flex-col gap-[80px] w-full">
      <div className="bg-[#0C4369]">
        <Navigation />
        <HeroSection />
      </div>
      <Main />
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <Accordion />
      </div>
      <Footer />
    </div>
  );
}
