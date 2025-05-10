import React from 'react'
import aboutImage from "../assets/about.jpg";
import about2Image from "../assets/about2.jpg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

function About() {
  return (
    <div className='h-auto bg-gray-100 pt-16' id="about">
        <div className='flex flex-col text-center py-5'>

            <div className='flex flex-col'>
                <h1 className='font-bold text-2xl '>Who We Are</h1>
                <span >______________</span>
            </div>

            <div className='pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-2'>
                <div className='md:w-7/12 h-auto'>
                <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                    <b className='font-extrabold'><span className='text-[#cf6969]'>Peoples</span> <span className='text-[#5285eb]'>Trust</span> </b> is non-profitable organization dedicated to building a nation where the general welfare of the elderly, orphaned and vulnerable children is promoted for them to live holistic and fulfilling life while they are in their ancestral land.  We provide advocacy, expert advice, conduct outreach and implement strategic developmental and supporting programs focused on Elderly, Orphaned and vulnerable children. <br /><br />
                    The Peoples Trust established in 2025 to fill a critical gap regarding civil society participation in improving living conditions of elderly, orphans and vulnerable children in Malawi. Determined to drive change, support and care orphans and vulnerable children while they are in their ancestral land and empower the elders to thrive as valued members of their communities. The organization is also worked on influencing policy, empower general communities and champion sustainable development, contributing a more resilient Malawi. <br /><br />
  
                    <b>In 2025 Peoples Trust was registered as non-profit organization under Trustees Incorporation Act with both board of Trustees and executive board members.  </b>

                </p>

                

                </div>
                <div className='md:w-1/3 h-auto'>
                 <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                    <b className='font-extrabold text-[#cf6969] '>Vision </b><br />
                    To build a resilient nation where senior citizens are counted and empowered to live safe, active, health, successful and satisfied life, and where orphaned and vulnerable children are supported and cared to live holistic life while they are in their ancestral land.   <br /><br />
                    
                    <b className='font-extrabold text-[#5285eb]'>Mission </b> <br />
                    To implement various programs and initiatives meant to promote, protect the rights of, and ensure that the elder persons are counted and empowered to live safe, active, successful and satisfied life and ensure the orphaned and vulnerable children meet their ends, and secure their future life dreams.   <br /><br />
                    

                </p>
                        
                </div>
            </div>

            <div className='pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-2'>
                <div className='md:w-7/12 h-auto'>
                <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                    <b className='font-extrabold text-[#5285eb]' >Objectives </b><br />
                    <ul className="list-disc pl-4">
                        <li>Promoting creativity, innovation, and entrepreneurship for elderlies, orphans, and vulnerable children.</li>
                        <li>Helping impoverished families raise orphans and vulnerable children without resorting to orphanages.</li>
                        <li>Providing relief to older persons, vulnerable individuals, and orphaned children.</li>
                        <li>Developing and delivering foster care systems.</li>
                        <li>Strengthening artistic and technical skills nationwide through training.</li>
                        <li>Empowering older persons to claim their rights and challenge discrimination.</li>
                        <li>Encouraging individuals to plan for long-term care needs.</li>
                        <li>Providing streamlined access to health services.</li>
                        <li>Influencing laws and policies to safeguard the welfare of elderlies, orphans, and vulnerable children.</li>
                        <li>Helping orphans and youth-led families overcome poverty through self-sufficiency training.</li>
                    </ul>
  

                </p>                

                </div>
                <div className='md:w-1/3 h-auto'>
                        <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                    <b className='font-extrabold text-[#cf6969] '>Thematic Areas </b><br />
                    Our work with older persons, orphans and vulnerable children and other stakeholders focuses on the four thematic areas which include.  <br /><br />
                    <ol className="list-decimal italic pl-6">
                        <li>Human  rights promotion and protection</li>
                        <li>Social economic empowerment </li>
                        <li>Emergency response and relief program</li>
                        <li>Care and support </li>
                    </ol>  
                    <br /><br /><br />

                </p>
                </div>
            </div>

                       <div className='pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-2'>
                <div className='md:w-10/12 h-auto'>
                <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                    <b className='font-extrabold text-[#5285eb]' >Strategic Foundations </b><br />
                    <span className='font-normal'>Our conduct is shaped by the following values</span>  <br />
                    <i>Table 1: Peoples Trust values and value statement </i> <br /><br />
                      
                    <table className="border-collapse border border-gray-300 w-full">
                        <thead>
                            <tr className="bg-gray-200">
                            <th className="border border-gray-500 px-4 py-2">Value </th>
                            <th className="border border-gray-500 px-4 py-2">Value Statement</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-gray-100'>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Transparency </td>
                                <td className="border border-gray-400 px-4 py-2">We strive to work for the best interest of the public hence donors, stakeholders and direct beneficiaries have the right to know how we are implementing our programs. We therefore have open door policy to allow interested parties to access our reports other records held in our offices for public review.</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Accountability </td>
                                <td className="border border-gray-400 px-4 py-2">We are fully responsible for our actions or omissions and we are ready to answer questions pertaining to our programs. </td>
                            </tr>

                            <tr className='bg-gray-100'>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Sustainability </td>
                                <td className="border border-gray-400 px-4 py-2">We are driven with determination to empower, change, sustainable development and contributing a more resilient Malawi hence guarantee the sustainability of our positive results. </td>
                            </tr>

                            <tr>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Integrity </td>
                                <td className="border border-gray-400 px-4 py-2">We are conscious to consistently act according to applicable rules and regulations, norms, culture, values and ethical standards regulated by laws and society’s values.   </td>
                            </tr>

                            <tr className='bg-gray-100'>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Trustworthy  </td>
                                <td className="border border-gray-400 px-4 py-2">We believe trust is the hallmark for our legitimacy. We will therefore always be  calculable and reliable to our donors, stakeholders and direct beneficiaries. </td>
                            </tr>

                            <tr>
                                <td className="border border-gray-400 px-4 py-2 font-normal">Social inclusivity  </td>
                                <td className="border border-gray-400 px-4 py-2">We strive for a nation where older persons are given an opportunity to meaningfully participate in social and economic life without discrimination or stigma. </td>
                            </tr>

                        </tbody>
                    </table>

  

                </p>                

                </div>
               
            </div>


            <div className='pt-6 flex md:flex-row flex-col p-2 justify-around md:space-y-0 space-y-2'>
                <div className='md:w-7/12 h-auto'>
                    <p className='p-4 text-justify font-light text-md w-full bg-black bg-opacity-5 rounded-2xl'>
                        <b className='font-extrabold text-[#cf6969] '>Some specific contributions have been: </b><br />
                        <ul className="list-disc pl-4">
                            <li>Formation of older persons association (OPA) and Older Citizen Monitoring Group (OCMG) to act as a coordination network for elderly supporting and developmental programs.</li>
                            <li>Provision of different artistic skills to active elderlies.</li>
                            <li>Help impoverished families that are raising orphans and vulnerable children to avoiding sending their children to orphanages and some into streets by strengthening of households and increase their independence. </li>
                        </ul>
    

                    </p>

                    <div className='w-full flex flex-col md:flex-row md:space-x-5 py-5 justify-start md:space-y-0 space-y-3'>

                        <a href="#contact" className='bg-[#6498FF] text-white px-5 py-3 rounded-lg hover:bg-[#6498FF]/90 cursor-pointer flex flex-row text-md justify-center md:h-fit transition duration-300'>Want to work with us? <span className='text-sm p-1'><RiTeamLine /></span></a>

                        <a href="#contact" className='bg-[#FF9292] text-white px-5 py-3 rounded-lg hover:bg-[#FF9292]/90 cursor-pointer flex flex-row text-md  justify-center md:h-fit transition duration-300'>Donate to our cause? <span className='text-sm p-1'>
                        <BiSolidDonateHeart  /> </span></a>

                    </div>

                </div>
                <div className='md:w-1/4 h-auto'>
                        <img src={new URL('/src/assets/images/new-logo.png', import.meta.url).href} alt="" className=' border border-gray-50 border-x-[#FF9292] rounded-full ' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default About
