import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="max-w-[1440px] mx-auto py-5 px-4 mt-[103px]">
      <div className="flex flex-wrap justify-between gap-[15px] lg:justify-around">
        <div>
          <img src="/logo.png" alt="" />
          <p className="font-normal text-[#8F90A6] max-w-[410px] text-[14px] leading-[31px] mt-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="pt-[34px]">
            <FontAwesomeIcon icon={faFacebook} className="text-[25px]" />
            <FontAwesomeIcon icon={faTwitter} className="ml-5 text-[25px]" />
            <FontAwesomeIcon icon={faInstagram} className="ml-5 text-[25px]" />
            <FontAwesomeIcon icon={faLinkedin} className="ml-5 text-[25px]" />
          </div>
          <div className="mt-[35px]">
            <span className="font-normal text-[#8F90A6] text-[13px]">
              © 2021 . All rights reserved.
            </span>
          </div>
        </div>
        <ul className="text-[#110229]">
          <li className="text-[20px] font-bold leading-[36px]">Take a tour</li>
          <li className="text-[18px] leading-[52px] mt-[12px]">Features</li>
          <li className="text-[18px] leading-[52px]">Partners</li>
          <li className="text-[18px] leading-[52px]">Pricing</li>
          <li className="text-[18px] leading-[52px]">Product</li>
          <li className="text-[18px] leading-[52px]">Support</li>
        </ul>
        <ul className="text-[#110229]  lg:mt-0">
          <li className="text-[20px] font-bold leading-[36px] ">Our Company</li>
          <li className="text-[18px] leading-[52px] mt-[12px]">About Us</li>
          <li className="text-[18px] leading-[52px]">Agents</li>
          <li className="text-[18px] leading-[52px]">Blog</li>
          <li className="text-[18px] leading-[52px]">Media</li>
          <li className="text-[18px] leading-[52px]">Contact Us</li>
        </ul>
        <div className="subscribeParent">
          <h4 className="text-[20px] font-bold leading-[36px]">Subscribe</h4>
          <p className="font-normal text-[14px] leading-[23px] max-w-[255px] text-[#8F90A6] mt-[25px]">
            Subscribe to get latest property, blog news from us
          </p>
          <div className="relative mt-4 w-full max-w-[255px]">
            <input
              type="text"
              placeholder="Email Address"
              className="inp w-full pr-[90px] py-2 px-4 border border-gray-300 rounded-full text-sm"
            />
            <button className="sendBtn">
              <FontAwesomeIcon icon={faArrowRight} className="text-[25px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
