import React from "react";
import { FaGlobeAfrica } from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-[#6498FF] text-gray-200 py-6">
      <div class="container mx-auto flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        <div class="text-md font-bold text-white">
          <a href="#home" className="flex flex-row hover:text-[#f2b3b3]">
            <span className="p-1"><img className="w-6" src="/src/assets/images/logo.png" alt="" /></span>
            <h1 className="text-xl font-bold uppercase">
              <span className="text-[#f2b3b3] hover:text-white">Peoples</span> <span> Trust</span>
            </h1>
          </a>
        </div>

        <div class="max-w-full overflow-hidden flex flex-row space-x-3 text-sm">
          <a href="#home" class="hover:text-white">
            Home
          </a>
          <a href="#about" class="hover:text-white">
            About
          </a>
          <a href="#projects" class="hover:text-white">
            Projects
          </a>
          <a href="#pictures" class="hover:text-white">
            Pictures
          </a>
          <a href="#team" class="hover:text-white">
            Team
          </a>
          <a href="#contact" class="hover:text-white">
            Contact
          </a>
          
          
        </div>

        <div class="text-sm text-gray-100">
          © 2025 NGO 265. All rights reserved.
        </div>
      </div>


      <br />
      <div className="flex flex-row justify-center items-center pt-5">
        <p className="text-sm text-gray-100 flex flex-row space-x-2">
          Developed by UnoBit Systems.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
