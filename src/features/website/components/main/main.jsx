import styles from "./base.module.scss";
import remoteIcon from "../../../../../src/assets/icons/remoteIcon.svg";
import map from "../../../../../src/assets/images/map.svg";
import vouchers from "../../../../../src/assets/images/voucher.svg";
import payment from "../../../../../src/assets/images/payment.svg";
import { Button } from "../button";
import { AnimatedSection } from "../AnimateSection";
import womandialysis from "../../../../assets/images/womandialysis.png";
import foodvoucher from "../../../../assets/images/foodvoucher.png";
import manholdingapp from "../../../../assets/images/manholdingapp.png";

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <AnimatedSection>
        <h1 className="text-[48px] max-sm:text-[28px] mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center text-[#151515] max-w-[600px] w-full">
          Our comprehensive range of exceptional services
        </h1>
      </AnimatedSection>

      <main className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex items-center rounded-[32px] bg-[#F6F9FD] pt-[20px] px-[45px] mt-[80px]">
            <div className="max-w-[604px] w-full relative hidden lg:flex">
              <img src={womandialysis} alt="" />
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                <p>1</p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                  Pre-Paid Health Vouchers
                </h2>
                <div className="text-sm leading-[160%] w-full text-[#505D69] flex flex-col gap-4">
                  <p>
                    Use the Oonpay pre-paid vouchers to send healthcare pack to
                    friends and family in Africa and beyond.
                  </p>
                  <ul className="list-disc">
                    <li>Wellness and preventive check vouchers</li>
                    <li>Physiotherapy session vouchers</li>
                    <li>Pre-natal care vouchers</li>
                    <li>Dental and eye check vouchers</li>
                    <li>Diagnostic service vouchers</li>
                    <li>Covid vaccine vouchers</li>
                    <li>Home lab services vouchers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex justify-between items-center rounded-[32px] bg-[#F6F9FD] pt-[20px] pl-[45px] mt-[80px]">
            <div className="flex flex-col gap-2">
              <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                <p>2</p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                  Pre-Paid Food Vouchers
                </h2>
                <div className="text-sm leading-[160%] max-w-[420px] w-full text-[#505D69] flex flex-col gap-4">
                  <p>
                    With the Oonpay food vouchers, wholesale food items such as
                    bags of rice, beans, tubers of yam, etc, can be purchased
                    for friends and relatives from anywhere in the world.
                  </p>
                  <ul className="list-disc">
                    <li>Whole food vouchers</li>
                    <li>Specialty food vouchers</li>
                    <li>Frozen food vouchers</li>
                    <li>Cooked meals vouchers</li>
                    <li>Snacks vouchers</li>
                    <li>Diabetic meals vouchers</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-[604px] w-full relative hidden lg:flex">
              <img src={foodvoucher} alt="" />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex justify-between items-center rounded-[32px] bg-[#F6F9FD] pr-[45px] mt-[80px]">
            <div className="max-w-[604px] w-full relative hidden lg:flex">
              <img src={manholdingapp} alt="" className="h-[460px]" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-full bg-[#E4F1FE] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                <p>3</p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-[30px] leading-[110%] text-[#343A40]">
                  Paytag
                </h2>
                <div className="text-sm leading-[160%] max-w-[420px] w-full text-[#505D69] flex flex-col gap-4">
                  <p>
                    Use the Oonpay #paytag invoice to pay for the following.
                  </p>
                  <ul className="list-disc">
                    <li>Hospital and medical care bills</li>
                    <li>Home health visits</li>
                    <li>Medications</li>
                    <li>Diagnostic services</li>
                    <li>Dental and eye care services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex items-center rounded-[32px] bg-[#F6F9FD] py-[65px] px-[45px] mt-[80px]">
            <div className="flex flex-col gap-2 justify-between">
              <div className="rounded-full bg-[#D9ECFF] text-xl font-black flex justify-center items-center text-white h-[40px] w-[40px]">
                <p>5</p>
              </div>

              <div className="flex flex-col gap-4">
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
            <img src={map} alt="" className="hidden lg:flex" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 justify-between gap-6">
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] pt-[45px] px-[45px]">
              <div className="flex flex-col gap-[10px] max-w-[546px] w-full justify-between">
                <div className="flex flex-col gap-5">
                  <img
                    src={remoteIcon}
                    alt=""
                    className="max-w-[58px] w-full"
                  />
                  <h2 className="text-[30px] leading-[110%]">Paytag Invoice</h2>
                </div>
                <p className="text-sm leading-[160%] w-full  text-[#98A2B3]">
                  Leverage the convenience of Oonpay's #paytag invoice to
                  seamlessly settle essential expenses, including hospital
                  bills, home health visits, medications, diagnostic services,
                  and dental and eye care services. Simplify your financial
                  transactions for healthcare with Oonpay. #paytag
                </p>
              </div>
              <img src={vouchers} alt="" />
            </div>
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] pt-[45px] px-[45px]">
              <div className="flex flex-col gap-[10px]  max-w-[546px] w-full">
                <div className="flex flex-col gap-5">
                  <img
                    src={remoteIcon}
                    alt=""
                    className="max-w-[58px] w-full"
                  />
                  <h2 className="text-[30px] leading-[110%]">
                    Pre-Paid Vouchers
                  </h2>
                </div>
                <p className="text-sm leading-[160%] w-full text-[#98A2B3]">
                  Oonpay enables users to effortlessly send wholesale food
                  vouchers and prepaid healthcare packs to friends and family
                  globally, fostering support and connection from anywhere in
                  the world.
                </p>
              </div>
              <img src={payment} alt="" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] p-4 w-full">
              <div className="flex flex-col gap-[10px] max-w-[380px] w-full">
                <div className="flex flex-col gap-5">
                  <img
                    src={remoteIcon}
                    alt=""
                    className="max-w-[48px] w-full"
                  />
                  <h2 className="text-[30px] leading-[110%]">
                    Get Paid Remotely
                  </h2>
                </div>
                <p className="text-sm leading-[160%] w-full  text-[#98A2B3]">
                  Healthcare workers can receive remote payments from anywhere
                  globally, offering flexibility and convenience in managing
                  their earnings.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] p-4 w-full">
              <div className="flex flex-col gap-[10px] max-w-[380px] w-full">
                <div className="flex flex-col gap-5">
                  <img
                    src={remoteIcon}
                    alt=""
                    className="max-w-[48px] w-full"
                  />
                  <h2 className="text-[30px] leading-[110%]">
                    Partner with Us
                  </h2>
                </div>
                <p className="text-sm leading-[160%] w-full  text-[#98A2B3]">
                  Partner with Oonpay for global visibility, fast payment
                  remittances, and substantial business growth, leading to
                  increased revenue and personal income. Elevate your brand in
                  the international market.
                </p>
              </div>
            </div>
            <div className="flex relative flex-col justify-center items-center rounded-[32px] bg-black h-[306px] px-4 pt-[45px]">
              <div className="flex flex-col gap-[16px] max-w-[380px] w-full">
                <h2 className="text-[30px] text-white leading-[110%]">
                  Check our other product features
                </h2>
                <Button className="max-w-[172px] w-full" variant="tertiary">
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
