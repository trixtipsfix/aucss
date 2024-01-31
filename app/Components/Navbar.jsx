"use client";
import { aucss } from "../assets";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { navLinks } from "../constants";
import clsx from "clsx";
import Link from "next/link";
import { Burger, Modal } from "@mantine/core";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Introduction", href: "#" },
  { name: "About", href: "/#about" },
  { name: "Events", href: "/#events" },
  { name: "Clubs", href: "/#clubs" },
  { name: "Partners", href: "/#cluster" },
];
const Navbar = () => {
  const [active, setActive] = useState("Introduction");
  const [background, setBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleBackground = () => {
      if (window.scrollY >= 90) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    if (window != undefined) {
      window.addEventListener("scroll", handleBackground);
    }

    return () => {
      window.removeEventListener("scroll", handleBackground);
    };
  }, [background]);

  return (
    <header
      className={`font-montserrat ${
        background
          ? "fixed top-0 w-full shadow-lg inset-x-0 z-50 bg-white"
          : "fixed top-0 w-full inset-x-0 z-50 bg-transparent"
      }`}
    >
      <nav
        className={
          "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        }
        aria-label="Global"
      >
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Air University Cyber Security Society</span>
          <Image className="h-14 w-auto" src={aucss} alt="" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 text-navprimary hover:text-navhover ${
                active === item.name ? "text-navhover" : ""
              }`}
              onClick={() => setActive(item.name)}
              scroll={false}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/#contact"
            className="text-sm font-semibold leading-6 text-navprimary hover:text-navhover"
          >
            Contact <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Air University Cyber Security Society</span>
              <Image className="h-14 w-auto" src={aucss} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y font-montserrat">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-navprimary hover:text-navhover"
                    onClick={() => setMobileMenuOpen(false)}
                    scroll={false}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/#contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-navprimary hover:text-navhover"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
