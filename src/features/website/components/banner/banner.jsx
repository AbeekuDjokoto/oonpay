import React from "react";
import styles from "./banner.module.scss";
import blackApple from "../../../../assets/icons/appleblack.svg";
import googleBlack from "../../../../assets/icons/googleblack.svg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="flex flex-col justify-center items-center gap-4 py-7">
        <h1 className="text-3xl max-sm:text-[28px] text-white mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center max-w-[600px] w-full">
          Do business with Oonpay
        </h1>
        <div className="flex justify-center gap-2">
          <img
            src={blackApple}
            alt=""
            srcset=""
            className="max-w-[135px] w-full h-10"
          />
          <img
            src={googleBlack}
            alt=""
            srcset=""
            className="max-w-[135px] w-full h-10"
          />
        </div>
      </div>
    </div>
  );
}
