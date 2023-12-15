import React from "react";
import styles from "./hero.module.scss";
import AppStoreLogo from "../../../../../src/assets/icons/GooglePlayLogo.svg";
import GooglePlayLogo from "../../../../../src/assets/icons/Mobileappstorebadge.svg";
import man from "../../../../../src/assets/images/man.svg";
import pharmacy from "../../../../../src/assets/images/pharmacy.svg";
import app from "../../../../../src/assets/images/app.svg";
import handHoldingApp from "../../../../../src/assets/images/handHoldingApp.svg";
import Spiral from "../../../../../src/assets/images/Spiral.png";
import circle from "../../../../../src/assets/images/circle.png";
import smallerCircle from "../../../../../src/assets/images/smallerCircle.png";
import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimateSection";

export default function HeroSection() {
  return (
    <div className={styles.container}>
      <img src={Spiral} alt="" className="absolute right-0 top-[-30%]" />
      <img src={circle} alt="" className="absolute left-0 top-[1%]" />
      <img
        src={smallerCircle}
        alt=""
        className="absolute right-[1%] top-[10%]"
      />
      <AnimatedSection>
        <div className={styles.wrapper}>
          <div className="max-w-[540px] w-full flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h1 className="text-[56px] font-bold text-white tracking-[-1.1px] leading-[100%]">
                Global Direct Payment Network.
              </h1>
              <p className="text-lg font-normal leading-[160%] text-[#E3E5EA] max-w-[480px] w-full">
                Connecting, Uplifting, and Supporting Family and Friends.
              </p>
            </div>

            <div className="flex gap-3">
              <img src={AppStoreLogo} alt="" srcset="" />
              <img src={GooglePlayLogo} alt="" srcset="" />
            </div>
          </div>
          <div className="hidden flex-col gap-9 lg:flex">
            <div>
              <motion.img
                src={man}
                alt=""
                srcset=""
                className={`absolute left-[60%] top-[-20%] max-w-[120px] w-full z-[2]`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              <motion.img
                src={app}
                alt=""
                srcset=""
                className="absolute left-[52%] top-[30%] max-w-[120px] w-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
              <motion.img
                src={pharmacy}
                alt=""
                srcset=""
                className="absolute left-[60%] bottom-[-30%] max-w-[120px] w-full z-[2]"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              <img
                src={handHoldingApp}
                alt=""
                srcset=""
                className="absolute left-[65%] bottom-[-43%]"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
