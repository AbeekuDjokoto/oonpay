import React from "react";
import styles from "./footer.module.scss";
import { AnimatedSection } from "../AnimateSection";
import logo from "../../../../assets/icons/logo.png";

export default function Footer() {
  return (
    <nav className={styles.container}>
      <AnimatedSection>
        <div className="max-w-[1440px] w-[90%] mx-auto justify-between grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <img src={logo} alt="Oonpay logo" className="max-w-[50px] w-full" />
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium leading-[160%] w-full text-white">
              Services
            </h1>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-[160%] w-full text-white">
                <p className="text-sm leading-[160%] w-full text-white">
                  Oonpay-HealthHub
                </p>
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Oonpay-FoodHub
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium leading-[160%] w-full text-white">
              Resources
            </h1>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-[160%] w-full text-white">
                <p className="text-sm leading-[160%] w-full text-white">
                  Contact Us
                </p>
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Join our Community
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium leading-[160%] w-full text-white">
              Terms & Conditions
            </h1>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-[160%] w-full text-white">
                <p className="text-sm leading-[160%] w-full text-white">
                  Privacy Policy
                </p>
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Terms of Service
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Cookie Policy
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-medium leading-[160%] w-full text-white">
              Company
            </h1>
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-[160%] w-full text-white">
                <p className="text-sm leading-[160%] w-full text-white">
                  About Oonpay
                </p>
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                How it works
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Why Choose Oonpay
              </p>
              <p className="text-sm leading-[160%] w-full text-white">
                Our Story
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </nav>
  );
}
