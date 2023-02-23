import { quotes } from "../assets";

export default function FeedbackCard({ content, name, title, img }) {
  return (
    <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
      <img
        src={quotes}
        alt="double_quotes"
        className="h-7 w-11 object-contain"
      />
      <p className="my-10 font-poppins text-lg font-normal leading-8 text-white">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="h-12 w-12 rounded-full" />
        <div className="flex-flex-col ml-4">
          <h4 className="font-poppins text-[20px] font-semibold leading-8 text-white">
            {name}
          </h4>
          <p className="font-poppins text-base font-normal leading-6 text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
