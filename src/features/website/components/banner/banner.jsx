import React from "react";
import styles from "./banner.module.scss";
import whiteGoogle from "../../../../assets/icons/whitegoogleapp.svg";
import appApple from "../../../../assets/icons/applewhite.svg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col justify-center items-center gap-4 py-7">
        <h1 className="text-3xl max-sm:text-[28px] text-white mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center max-w-[600px] w-full">
          Do business with Oonpay
        </h1>
        <div className="flex gap-3">
          <img
            src={whiteGoogle}
            alt=""
            srcset=""
            className="max-w-[135px] w-full"
          />
          <img
            src={appApple}
            alt=""
            srcset=""
            className="max-w-[135px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
