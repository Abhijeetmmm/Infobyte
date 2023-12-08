"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" mx-auto">
      <div className=" mx-auto  flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 space-y-2">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              HR & Payroll Administration
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              What is HRMS?
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              What is Payroll?
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              What is Statutory Compliance?
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Guide to Leave Management
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Guide to Attendance Management
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Holiday Lists 2023
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Holiday Lists 2024
            </p>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              Product
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              HR Software
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Payroll Software
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Leave Management System
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Attendance Management System
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Employee Self Service
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Performance Management System
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              greytHR Service Status
            </p>
          </div>

          <div className="p-4 space-y-2 ">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              Knowledge Center
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Help Documentation
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Blog
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Podcasts
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Community Forums
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Online Training
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Statutory Wiki
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Case Study
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Videos & Presentations
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              HR Garden
            </p>
          </div>

          <div className="p-4">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              Company
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              About Us
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Careers
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Media Kit
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Plans & Pricing
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Customers
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Partners
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Payroll Service Providers
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Support
            </p>
            <p className="hover:underline hover:text-blue-500 cursor-pointer">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div className=" w-full  bg-gray-200 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 space-y-2">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              Copyright © 2023 Infobyte Software Pvt. Ltd.
            </p>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-lg  mb-2 hover:underline hover:text-blue-500 cursor-pointer">
              Privacy Policy | Terms of Service
            </p>
          </div>

          <div className="p-4  flex justify-center items-center space-x-2 ">
            <p className="text-lg  mb-2 ">Connect with us:</p>
            <p>
              <FaFacebookF className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50" />
            </p>
            <p>
              <FaTwitter className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50" />
            </p>
            <p>
              <IoLogoYoutube className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50" />
            </p>
            <p>
              <FaLinkedinIn className="w-10 h-10 p-2 text-gray-500 cursor-pointer rounded-full bg-gray-300 hover:bg-gray-50" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
