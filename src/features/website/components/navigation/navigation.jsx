import React from "react";
import { Button } from "../button/button";
import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Oonpay</h1>
        <div className="flex justify-between gap-8">
          <ul className={styles.titles}>
            <li>About</li>
            <li>Services</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
          <Button
            variant="outline"
            className="max-w-[115px] w-full text-sm font-semibold  text-white"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}
