import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

function FeatureCard({ icon, title, content, i }) {
  return (
    <div
      className={`flex flex-row rounded-[20px] p-6 ${
        i !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className={`h-16 w-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt={icon} className="h-1/2 w-1/2 object-contain" />
      </div>
      <div className="ml-3 flex flex-1 flex-col">
        <h4 className="mb-1 font-poppins text-lg font-semibold leading-[23px] text-white">
          {title}
        </h4>
        <p className="mb-1 font-poppins text-[16px] font-normal leading-6 text-dimWhite">
          {content}
        </p>
      </div>
    </div>
  );
}

export default function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="hidden sm:block" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          With the right credit card, you can improve your financial life by
          building a credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} index={i} />
        ))}
      </div>
    </section>
  );
}
