import styles from "./base.module.scss";
import remoteIcon from "../../../../../src/assets/icons/remoteIcon.svg";
import partnerIcon from "../../../../../src/assets/icons/partnerIcon.svg";
import map from "../../../../../src/assets/images/map.svg";
import { Button } from "../button";
import { AnimatedSection } from "../AnimateSection";
import womandialysis from "../../../../assets/images/womandialysis.png";
import foodvoucher from "../../../../assets/images/foodvoucher.png";
import manholdingapp from "../../../../assets/images/manholdingapp.png";
import qrcode from "../../../../assets/images/qrcode.png";

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <AnimatedSection>
        <h1 className="text-[48px] max-sm:text-[28px] mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center text-[#151515] max-w-[600px] w-full">
          Our comprehensive range of exceptional services
        </h1>
      </AnimatedSection>

      <main className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          <AnimatedSection>
            <div className="flex items-center justify-between rounded-[32px] sm:h-[380px] bg-[#F6F9FD] py-4 px-6 lg:pt-2 lg:pr-6 mt-[80px]">
              <div className="w-[502px] relative hidden lg:flex">
                <img src={womandialysis} alt="" />
              </div>
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                  <p>1</p>
                </div>

                <div className="flex flex-col gap-4 max-w-[450px] w-full">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Pre-Paid Health Vouchers
                  </h2>
                  <div className="text-sm leading-[160%] w-full text-[#505D69] flex flex-col gap-2">
                    <p>
                      Use the Oonpay pre-paid vouchers to send healthcare pack
                      to friends and family in Africa and beyond.
                    </p>
                    <ul>
                      <li>1. Wellness and preventive check vouchers</li>
                      <li>2. Physiotherapy session vouchers</li>
                      <li>3. Pre-natal care vouchers</li>
                      <li>4. Dental and eye check vouchers</li>
                      <li>5. Diagnostic service vouchers</li>
                      <li>6. Covid vaccine vouchers</li>
                      <li>7. Home lab services vouchers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-center justify-between rounded-[32px] sm:h-[380px] bg-[#F6F9FD] py-4 px-6 lg:pt-2 lg:pr-6">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                  <p>2</p>
                </div>

                <div className="flex flex-col gap-4 max-w-[450px] w-full">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Pre-Paid Food Vouchers
                  </h2>
                  <div className="text-sm leading-[160%] w-full text-[#505D69] flex flex-col gap-2">
                    <p>
                      With the Oonpay food vouchers, wholesale food items such
                      as bags of rice, beans, tubers of yam, etc, can be
                      purchased for friends and relatives from anywhere in the
                      world.
                    </p>
                    <ul>
                      <li>1. Whole food vouchers</li>
                      <li>2. Specialty food vouchers</li>
                      <li>3. Frozen food vouchers</li>
                      <li>4. Cooked meals vouchers</li>
                      <li>5. Snacks vouchers</li>
                      <li>6. Diabetic meals vouchers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[502px] h-[360px] relative hidden lg:flex">
                <img src={foodvoucher} alt="" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-center justify-between rounded-[32px] sm:h-[380px] bg-[#F6F9FD] py-4 px-6 lg:pt-2 lg:pr-6">
              <div className="relative hidden lg:flex w-[502px]">
                <img src={manholdingapp} alt="" className="h-[460px]" />
              </div>
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                  <p>3</p>
                </div>

                <div className="flex flex-col gap-4 max-w-[450px] w-full">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Paytag
                  </h2>
                  <div className="text-sm leading-[160%] w-full text-[#505D69] flex flex-col gap-2">
                    <p>
                      Use the Oonpay #paytag invoice to pay for the following
                      services or bill:
                    </p>
                    <ul>
                      <li>1. Hospital and medical care bills</li>
                      <li>2. Home health visits</li>
                      <li>3. Medications</li>
                      <li>4. Diagnostic services</li>
                      <li>5. Dental and eye care services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-center justify-between rounded-[32px] sm:h-[380px] bg-[#F6F9FD] py-4 px-6 lg:pt-2 lg:pr-6">
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                  <p>4</p>
                </div>

                <div className="flex flex-col gap-4 max-w-[450px] w-full">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    QR-Code Instant Payment
                  </h2>
                  <div className="text-sm leading-[160%] w-full text-[#505D69] flex flex-col gap-2">
                    <p>
                      Use the Oonpay QR-code instant, easy and secure payment
                      method to process on-site bills and enjoy touchless
                      payments.
                    </p>
                    <ul>
                      <li>1. Hospital admission fees</li>
                      <li>2. Emergency ambulatory service</li>
                      <li>3. Urgent medical needs</li>
                      <li>4. Medications</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-[502px] h-[360px] relative hidden lg:flex">
                <img src={qrcode} alt="" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex items-center justify-between rounded-[32px] sm:h-[380px] bg-[#F6F9FD] py-4 px-6 lg:pt-2 lg:pr-6">
              <img src={map} alt="" className="hidden lg:flex" />
              <div className="flex flex-col gap-2 justify-between mx-auto">
                <div className="rounded-full bg-[#D9ECFF] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                  <p>5</p>
                </div>

                <div className="flex flex-col gap-4 max-w-[450px] w-full">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Free Transfer anywhere around the world
                  </h2>
                  <p className="text-sm leading-[160%] w-full text-[#505D69]">
                    Create a custom card that reflects your uinque style and
                    personality. Choose from a range of colors, patterns, and
                    designs to customize the look of your card.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col justify-between items-center h-[260px] rounded-[32px] bg-[#F6F9FD] py-2 px-4">
              <div className="flex flex-col gap-2 m-auto w-full">
                <img src={remoteIcon} alt="" className="max-w-[48px] w-full" />

                <div className="flex flex-col gap-4">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Get Paid Remotely
                  </h2>
                  <p className="text-sm leading-[160%] w-full  text-[#505D69]">
                    Healthcare workers can receive remote payments from anywhere
                    globally, offering flexibility and convenience in managing
                    their earnings.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center h-[260px] rounded-[32px] bg-[#F6F9FD] py-2 px-4">
              <div className="flex flex-col gap-2 m-auto w-full">
                <img src={partnerIcon} alt="" className="max-w-[48px] w-full" />

                <div className="flex flex-col gap-4">
                  <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                    Partner with Us
                  </h2>
                  <p className="text-sm leading-[160%] text-[#505D69]">
                    Partner with Oonpay for global visibility, fast payment
                    remittances, and substantial business growth, leading to
                    increased revenue and personal income. Elevate your brand in
                    the international market.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative flex-col justify-center items-center rounded-[32px] bg-black h-[260px] py-2 px-4">
              <div className="flex flex-col gap-[16px] max-w-[380px] w-full">
                <h2 className="text-[30px] text-white leading-[110%]">
                  Check our other product features
                </h2>
                <Button className="max-w-[172px] w-full" variant="primary">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}
