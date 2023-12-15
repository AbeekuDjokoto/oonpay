import styles from "./base.module.scss";
import remoteIcon from "../../../../../src/assets/icons/remoteIcon.svg";
import map from "../../../../../src/assets/images/map.svg";
import vouchers from "../../../../../src/assets/images/voucher.svg";
import payment from "../../../../../src/assets/images/payment.svg";
import { Button } from "../button";
import { AnimatedSection } from "../AnimateSection";

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <AnimatedSection>
        <h1 className="text-[48px] mx-auto tracking-[-1.1px] font-medium leading-[110%] text-center text-[#151515] max-w-[600px] w-full">
          Our comprehensive range of exceptional services
        </h1>
      </AnimatedSection>

      <main className="flex flex-col gap-6">
        <AnimatedSection>
          <div className="flex items-center rounded-[32px] bg-[#F9FAFB] py-[65px] px-[45px] mt-[80px]">
            <div className="flex flex-col gap-[10px] max-w-[480px] w-full">
              <div className="flex flex-col gap-5">
                <img src={remoteIcon} alt="" className="max-w-[58px] w-full" />
                <h2 className="text-[30px] leading-[110%]">
                  Free Transfer anywhere around the world
                </h2>
              </div>
              <p className="text-sm leading-[160%] w-full  text-[#98A2B3]">
                Create a custom card that reflects your uinque style and
                personality. Choose from a range of colors, patterns, and
                designs to customize the look of your card.
              </p>
            </div>
            <img src={map} alt="" className="hidden lg:flex" />
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] pt-[45px] px-[45px]">
              <div className="flex flex-col gap-[10px] max-w-[546px] w-full h-[250px]">
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
            <div className="flex flex-col items-center rounded-[32px] bg-[#F9FAFB] pt-[45px] px-[45px]">
              <div className="flex flex-col gap-[10px] h-[250px] max-w-[546px] w-full">
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
                <p className="text-sm leading-[160%] w-full  text-[#98A2B3]">
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
          <div className="flex justify-between gap-6">
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] h-[306px] px-4 pt-4">
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
            <div className="flex flex-col justify-between items-center rounded-[32px] bg-[#F9FAFB] h-[306px] px-4 pt-4">
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
