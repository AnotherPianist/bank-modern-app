import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} mb-8 w-full flex-col md:flex-row`}>
        <div className="mr-10 flex flex-1 flex-col justify-start">
          <img
            src={logo}
            alt="hoobank"
            className="h-[72px] w-[266px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
          {footerLinks.map(footerLink => (
            <div
              key={footerLink.title}
              className="my-4 flex min-w-[150px] flex-col ss:my-0"
            >
              <h4 className="font-poppins text-lg font-medium leading-7 text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-4 list-none">
                {footerLink.links.map((link, i) => (
                  <li
                    key={link.name}
                    className={`cursor-pointer font-poppins text-base font-normal leading-6 text-dimWhite hover:text-secondary ${
                      i !== footerLinks.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between border-t-2 border-t-[#3f3e45] pt-6 md:flex-row">
        <p className="font-poppins text-lg font-normal leading-7 text-white">
          2023 HooBank. All Rights Reserved.
        </p>
        <div className="mt-6 flex flex-row md:mt-0">
          {socialMedia.map((social, i) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`h-[21px] w-[21px] cursor-pointer object-contain ${
                i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
