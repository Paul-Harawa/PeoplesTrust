import React, { useState } from "react";
import projectsBg from "../assets/projectsbg.jpg";

import project1 from "../assets/pj1.jpg";
import project2 from "../assets/pj2.jpg";
import project3 from "../assets/pj3.jpg";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div className="h-auto bg-gray-100 pb-16 pt-10" id="projects">
      <div className="flex flex-col text-center py-12">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl ">Our Projects</h1>
          <span>______________</span>
        </div>
      </div>

      <div className="pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-6 md:space-x-2">
        <div class="md:w-1/3 ">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation
              togglePopup(); // Open popup
            }}
            class="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                src="/src/assets/images/p1.jpg"
                alt="Card Image"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div class="p-4">
              <h2 class="text-lg font-bold text-gray-800 group-hover:text-[#ea7c7c]">
                Elderly Socio-Economic Empowerment Programme
              </h2>
              <h3 className="text-[#6498FF] font-semibold flex flex-row">
                <span><FaLocationDot className="text-[#6498FF] my-1" /></span>
                &nbsp;&nbsp;Blantyre, Malawi.</h3>
              <p class="text-gray-600 mt-2 font-normal text-justify">
                The Peoples Trust organization is implementing the elderly social economic empowerment program. The program aimed to contribute towards eradication of poverty among elderly people living  in group Kumponda, Traditional Authority Kapeni Blantyre district, particularly older women, older people with disability, responsible for the support and care of orphans and vulnerable children, older people who lack family support and those who suffered discrimination and exclusion based on their age, ethnicity, or economic status through provision of age related artistic skills of making sanitary items, also empower elderly who have their own different artistic skills and also advocating for  participation and  inclusion of elderly in socio-economic development initiatives.

                <br />
                <br />
                <span className="font-semibold italic group-hover:text-[#ea7c7c]">Click to view more details.</span>
              </p>
            </div>
          </a>
        </div>


        {/* Popup Details */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-1 w-full h-full flex-col">
          <div className="flex justify-end w-full p-2"> 
          <MdOutlineCancel onClick={togglePopup} className="text-white md:text-3xl text-2xl hover:text-gray-200 cursor-pointer md:mr-20 mr-5" />
          </div>
          
          <br />

            <div className="bg-white rounded-lg shadow-lg p-6 md:w-10/12 w-full h-3/4 text-wrap overflow-scroll">
              <h3 className="text-xl font-bold text-gray-800 flex flex-row justify-start">
                Elderly Socio-Economic Empowerment Programme
              </h3>
              <p className="mt-4 text-gray-600 text-justify">
              The Peoples Trust organization is implementing the elderly social economic empowerment program. The program aimed to contribute towards eradication of poverty among elderly people living  in group Kumponda, Traditional Authority Kapeni Blantyre district, particularly older women, older people with disability, responsible for the support and care of orphans and vulnerable children, older people who lack family support and those who suffered discrimination and exclusion based on their age, ethnicity, or economic status through provision of age related artistic skills of making sanitary items, also empower elderly who have their own different artistic skills and also advocating for  participation and  inclusion of elderly in socio-economic development initiatives. <br /><br />
              Malawi being a developing country predominantly depends on agriculture older people are usually faced with double or triple disadvantage. In 2016, Malawi enacted the National Policy for older persons. The policy acknowledges the overall poor quality of life among older people in Malawi. There is evidence that most of the older Malawians live in poverty, have poor health and nutritional statuses, have no home or shelter and are often abused. Therefore this program basically designed to deal with the poverty challenge of the elderly. This is after understanding that the single most pressing challenge to the welfare of the elderly is poverty, which is a multiplier of risk for abuse. This challenge is rooted from community attitude and perceptions towards elderly people which is known with discrimination and social exclusion of old adults. Older Malawians are often thought of as dependents and economically challenged hence not contributing much to the economy of the country. These persistently –stubborn stereotyping perceptions are also further fueled by ageist terms that have for long flooded demographic literature. For example terms such as age dependency ratio, define as the ratio of older dependents to the working age population, assume that everyone between the age of 15 and 65 works while everyone above 64 is dependent and exclusively relies on the productivity of younger generation. This put elderly at disadvantage as mostly the youth are prioritized at the expense of the elderly in societal socio-economic development initiatives.  <br /><br />
              The project execute and focus on putting in place all mechanisms that facilitate cultivation of older person’s potential for overall social economic development and inclusion so much so that  community perceptions, stereotyping and discriminations  changes. Then the  elderly  become free from discrimination and social exclusion whilst  perceived as an investment having both costs and contributions and  viewed as two way inter-dependence between the young and old. <br /><br />
              The project involve Advocating the elderly socio-economic rights and inclusion in policy development and decision making. Train older women and men different artistic skills and techniques of making sanitary items. Imparting elderly people entrepreneurship and marketing skills and techniques. Advocating partnerships with other stakeholders with OPAs and Organization. Facilitating trainings of older citizens through Older Persons Associations (OPA). The organization registered business that will be marketing sanitary items that the elderly men and women made. Conduct community, one to one discussion and focus group discussion for the awareness of older people’s potential to contribute to community development. Provision of business expertise, marketing opportunities, business connections and assorted support in relation to the nature of the business that the beneficiary is carrying on. The program is expected to benefit 1164 older men and women.<br /><br />
              Beneficiaries express gratitude for the timely unique empowering program, highlighting the programme’s positive impact and hope it gives to their lives. Joseph Mpombe105 year-old beneficiary, praised the programme for empowering older persons to thrive as valued members of their communities. 
              Another beneficiary, Florence, 81, noted this programme improves the quality of their lives, but emphasized the need of expansion of number of beneficiaries to have many enjoying life changing programme     
              The successful implementation of the elderly social economic empowerment programme demonstrates the effectiveness of collaborative effort among individuals, government and organizations in addressing poverty and other most pressing issues among vulnerable older persons in the country.  

              </p>
              <button
                onClick={togglePopup}
                className="mt-6 px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
