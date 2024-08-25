"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Button } from "antd";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// import logo from "../images/logoshirley_300x.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  //   const router = useRouter();

  // Handle logout
  const handleLogout = () => {
    // Clear authentication token from local storage
    // localStorage.removeItem("token");

    // Redirect to the login page
    // router.push("/login");

    // Reload the page to reflect the logout state
    window.location.reload();
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="cursor-pointer">
        <Link href="/">
          <h2 className="text-[22px] font-bold text-white">UPOKARI</h2>
          {/* <Image src={""} alt="Logo" className="h-12 w-auto" /> */}
        </Link>
      </div>

      {/* Menu Links */}
      <div className="hidden md:flex space-x-6">
        <Link href="/about" className="text-white hover:text-cyan-300">
          বইয়ের ধরণ
        </Link>
        <Link href="/service" className="text-white hover:text-cyan-300">
          সকল লেখক
        </Link>
        <Link href="/contact" className="text-white hover:text-cyan-300">
          যোগাযোগ
        </Link>
        <Link href="/about" className="text-white hover:text-cyan-300">
          About
        </Link>
        <Link href="/dashboard" className="text-white hover:text-cyan-300">
          ড্যাশবোর্ড
        </Link>
        <Link href="/registration" className="text-white hover:text-cyan-300">
          প্রবেশ করুন
        </Link>
        {/* {!isAuthenticated && ( */}
        <Link href="/login" className="text-white hover:text-cyan-300">
          লগ ইন
        </Link>
        {/* )} */}
        {/* {isAuthenticated && (
          <button
            onClick={handleLogout}
            className="text-white hover:text-cyan-300">
            লগ আউট
          </button>
        )} */}
      </div>

      {/* Social Media Links */}
      <div className="hidden md:flex space-x-4">
        <a
          href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-300">
          <FaFacebookSquare size={24} />
        </a>
        <a
          href="https://www.instagram.com/thapatechnical/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-300">
          <FaInstagramSquare size={24} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-300">
          <FaYoutubeSquare size={24} />
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <Button type="text" onClick={showDrawer} className="text-white">
          <GiHamburgerMenu size={24} />
        </Button>
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        height="33vh" // 1/3 of the screen height
        className="bg-cyan-600 text-white"
        bodyStyle={{ padding: "10px" }} // Add some padding for the content
      >
        <div className="space-y-4 text-white">
          <Link href="/about" onClick={onClose} className="block">
            বইয়ের ধরণ
          </Link>
          <Link href="/service" onClick={onClose} className="block">
            সকল লেখক
          </Link>
          <Link href="/contact" onClick={onClose} className="block">
            যোগাযোগ
          </Link>
          <Link href="/about" onClick={onClose} className="block">
            About
          </Link>
          <Link href="/dashboard" onClick={onClose} className="block">
            ড্যাশবোর্ড
          </Link>
          <Link href="/registration" onClick={onClose} className="block">
            প্রবেশ করুন
          </Link>
          {/* {!isAuthenticated && ( */}
          <Link href="/login" onClick={onClose} className="block">
            লগ ইন
          </Link>
          {/* )} */}
          {/* {isAuthenticated && (
            <button
              onClick={() => {
                handleLogout();
                onClose();
              }}
              className="block w-full text-left">
              লগ আউট
            </button>
          )} */}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
