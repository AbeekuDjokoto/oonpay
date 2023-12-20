import styles from "./base.module.scss";
import map from "../../../../../src/assets/images/map.svg";
import { Button } from "../button";
import { AnimatedSection } from "../AnimateSection";
import womandialysis from "../../../../assets/images/womandialysis.png";
import foodvoucher from "../../../../assets/images/foodvoucher.png";
import manholdingapp from "../../../../assets/images/manholdingapp.png";
import qrcode from "../../../../assets/images/qrcode.png";
import { Search } from "../Search";

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <AnimatedSection>
        <div className="flex flex-col gap-[80px]">
          <Search placeholder="Search for #playtag, #funding, Invoice" />
          <h1 className="text-[48px] max-sm:text-[28px] mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center text-[#151515] max-w-[600px] w-full">
            Our comprehensive range of exceptional services
          </h1>
        </div>
      </AnimatedSection>

      <main className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {/* left */}
          <AnimatedSection>
            <div className="flex items-center justify-between gap-4 rounded-[32px] sm:h-[380px]  py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="w-[502px] relative hidden lg:flex">
                <img src={womandialysis} alt="" />
              </div>
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  HealthHub Service
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">
                    Pre-Paid Health Vouchers
                  </h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      Use the Oonpay pre-paid vouchers to send healthcare pack
                      to friends and family in Africa and beyond.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div>
                        <p>Physiotherapy session vouchers</p>
                        <p>Pre-natal care vouchers</p>
                        <p>Dental and eye check vouchers</p>
                        <p>Diagnostic service vouchers</p>
                        <p>Home lab services vouchers</p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* Right */}
          <AnimatedSection>
            <div className="flex items-center justify-between gap-4 rounded-[32px] sm:h-[380px]  py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  FoodHub Service
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">
                    Pre-Paid Food Vouchers
                  </h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      With the Oonpay food vouchers, wholesale food items such
                      as bags of rice, beans, tubers of yam, etc, can be
                      purchased for friends and relatives from anywhere in the
                      world.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div>
                        <p>Whole food vouchers</p>
                        <p>Specialty food vouchers</p>
                        <p>Frozen food vouchers</p>
                        <p>Cooked meals vouchers</p>
                        <p>Diabetic meals vouchers</p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[502px] relative hidden lg:flex">
                <img src={foodvoucher} alt="" />
              </div>
            </div>
          </AnimatedSection>
          {/* left */}
          <AnimatedSection>
            <div className="flex items-center justify-between gap-4 rounded-[32px] sm:h-[380px]  py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="w-[502px] relative hidden lg:flex">
                <img src={manholdingapp} alt="" />
              </div>
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  HealthHub Paytag Service
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">
                    Pre-Paid Health Vouchers
                  </h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      Use the Oonpay service vouchers #paytag invoice to pay for the following.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div>
                        <p>Hospital and medical care bills</p>
                        <p>Home health visits</p>
                        <p>Medications</p>
                        <p>Diagnostic services</p>
                        <p>Dental and eye care services</p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* Right */}
          <AnimatedSection>
            <div className="flex items-center justify-between gap-4 rounded-[32px] sm:h-[380px]  py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  HealthHub Service
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">
                    QR-Code Instant Payment
                  </h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      Use the Oonpay QR-code instant, easy and secure payment
                      method to process on-site bills and enjoy touchless
                      payments.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div>
                        <p>Hospital admission fees</p>
                        <p>Emergency ambulatory service</p>
                        <p>Urgent medical needs</p>
                        <p>Medications</p>
                      </div>

                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[502px] relative hidden lg:flex">
                <img src={qrcode} alt="" />
              </div>
            </div>
          </AnimatedSection>

          {/* left */}
          <AnimatedSection>
            <div className="flex items-center justify-between gap-4 rounded-[32px] sm:h-[380px]  py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="w-[502px] relative hidden lg:flex">
                <img src={map} alt="" />
              </div>
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  HealthHub & Business Transfer Service
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">
                    Free Transfer anywhere around the world
                  </h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      Businesses and Health Care providers can receive remote
                      payments from anywhere globally, offering flexibility and
                      convenience in managing their earnings.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-between items-center border border-[#F6F9FD] px-4 py-8 rounded-2xl">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  Network
                </p>

                <div className="flex flex-col gap-2 max-w-[470px] w-full text-[#333] leading-[140%]">
                  <h2 className="text-xl font-medium">Partner with Us</h2>
                  <div className="text-sm w-full tracking-[0.21px] flex flex-col gap-2 opacity-80 class-lato">
                    <p>
                      Partner with Oonpay for global visibility, fast payment
                      remittances, and substantial business growth, leading to
                      increased revenue and personal income. Elevate your brand
                      in the international market.
                    </p>
                    <div className="flex flex-col gap-7">
                      <div className="flex flex-col gap-4">
                        <hr />
                        <div className="flex justify-items-end">
                          <Button
                            variant="outline"
                            className="max-w-[126px] w-full"
                          >
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center border border-[#F6F9FD] bg-black px-4 py-8 rounded-2xl">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <p className="text-[#1472B4] text-xs leading-[140%] tracking-[0.06px]">
                  More Products
                </p>

                <div className="flex flex-col gap-2 text-white leading-[140%]">
                  <h2 className="text-xl font-medium">Partner with Us</h2>
                  <div className="text-sm leading-[110%] tracking-[0.21px] flex flex-col gap-10 opacity-80 class-lato">
                    <p>
                      Check out our other product features that we have
                      installed and we can't wait for you to join our team.
                    </p>

                    <Button variant="outline" className="max-w-[126px] w-full">
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
