// import React, { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/bg.jpg";
import heroBg from "../assets/bg.jpg";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-auto " id="home">
      <div className="w-full bg-[url('./assets/bg.jpg')] bg-cover bg-center">
        <div class="bg-white bg-opacity-5 w-full flex md:flex-row md:justify-around flex-col py-14 px-10">
          <div className="md:w-1/2 py-0">
            <img
              src={heroImage}
              alt=""
              className="rounded-b-full border-x-8 border-[#6498FF]"
            />
          </div>

          <div className="md:py-8 md:my-14 my-10 py-8 md:w-1/3 bg-white border border-gray-300 shadow-2xl shadow-gray-800 rounded-3xl">
            <div className="px-5 text-center">
              <div className="text-2xl font-bold flex flex-row space-x-2">
                <span className="text-green-600">
                  <img
                    className="w-10"
                    src="/src/assets/images/logo.png"
                    alt=""
                  />
                </span>
                <h1 className="text-2xl font-bold text-[#FF9292] uppercase">
                  peoples trust
                </h1>
              </div>
              <div className="py-1 text-justify ">
                <p className="font-light text-md">
                  Peoples Trust is a non-profit organization aimed to build a
                  resilient nation where senior citizens are counted and
                  empowered to live safe, active, health, successful and
                  satisfied life, and where orphaned and vulnerable children are
                  supported and cared to live holistic life while they are in
                  their ancestral land.
                  <div className="flex flex-row space-x-2 pt-3">
                    <FaRegArrowAltCircleRight className="text-[#6498FF] my-1" />{" "}
                    <span className="text-sm">
                      For orphans and vulnerable children to be cared and
                      supported while they are in their ancestral land.{" "}
                    </span>
                  </div>
                  <br />
                  <div className="flex flex-row space-x-2">
                    <FaRegArrowAltCircleRight className="text-[#6498FF] my-1" />{" "}
                    <span className="text-sm">
                      For elderly to thrive as valued members of their
                      communities hence improving the quality of their lives.
                    </span>
                  </div>
                  <br />
                  <br />
                </p>

                <div>
                  <motion.a
                    whileHover={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      handleScrollTo("contact");
                    }}
                    href="#contact"
                    className="flex flex-row text-white bg-[#FF8592] hover:bg-[#FF8592]/90 px-5 py-2 rounded-full w-full justify-center  transition duration-300"
                  >
                    Contribute{" "}
                    <span className="text-xl px-2">
                      <BiSolidDonateHeart />
                    </span>
                  </motion.a>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto bg-gray-100">
        <div className="flex flex-row justify-around text-5xl py-6">
          <SlSocialYoutube className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" />
          <SlSocialLinkedin className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" />
          <SlSocialFacebook className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" />
          <SlSocialTwitter className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" />
          <FaWhatsapp className="bg-[#6498FF] text-white border rounded-2xl p-3 hover:bg-[#FF9292] cursor-pointer  transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
