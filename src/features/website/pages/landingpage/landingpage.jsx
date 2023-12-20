import React from "react";
import Navigation from "../../components/navigation/navigation";
import HeroSection from "../../components/hero/hero";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import Faqs from "../../components/faqs/faqs";
import Banner from "../../components/banner/banner";

export default function Landingpage() {
  return (
    <div className="flex flex-col gap-20 w-full">
      <div className="bg-[#0C4369]">
        <Navigation />
        <HeroSection />
      </div>
      <Main />
      <div className="max-w-[1440px] w-[90%] mx-auto flex flex-col gap-20">
        <Faqs />
        <Banner />
      </div>
      <Footer />
    </div>
  );
}
