import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4">
          <img src={discount} alt="discount" className="h-8 w-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-10 h-full w-full"
        />
        <div className="pink__gradient absolute top-0 z-0 h-[35%] w-2/5" />
        <div className="white__gradient absolute bottom-40 z-[1] h-4/5 w-4/5 rounded-full" />
        <div className="blue__gradient absolute right-20 bottom-20 z-0 h-1/2 w-1/2" />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}
