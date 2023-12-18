import React from "react";
import { Button } from "../button/button";
import styles from "./navigation.module.scss";
import logo from "../../../../assets/icons/logo.png";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <img src={logo} alt="Oonpay logo" className="max-w-[50px] w-full" />

        <div className="flex justify-between gap-8 items-center">
          <ul className="text-white text-base leading-[21.982px] sm:flex gap-6 hidden">
            <li>About</li>
            <li>Services</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
          <Button variant="primary" className="max-w-[115px] w-full text-sm">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
