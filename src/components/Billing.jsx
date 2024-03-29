import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

export default function Billing() {
  return (
    <section id="billing" className={layout.sectionImgReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="relative z-20 h-full w-full" />
        <div className="white__gradient absolute -left-1/2 top-0 z-10 h-1/2 w-1/2 rounded-full" />
        <div className="pink__gradient absolute -left-1/2 bottom-0 z-0 h-1/2 w-1/2 rounded-full" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="hidden sm:block" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="mt-6 flex flex-row flex-wrap sm:mt-10">
          <img
            src={apple}
            alt="apple_store"
            className="mr-5 h-[42px] w-32 cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="google_play"
            className="h-[42px] w-32 cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
}
