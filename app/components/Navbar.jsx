"use client";
import Image from "next/image";
import React from "react";

////IMG
import Logo from "../IMG/Delux.png";
import Link from "next/link";

export default function Navbar() {
  function scrollToBttm() {
    if (!isBrowser()) return;
    window.scrollTo({ bottom: 0, behavior: "smooth" });
  }

  return (
    <div className=" ">
      <div className=" flex justify-between  items-center mx-5  ">
        <Image src={Logo} alt="Logo" className=" w-[150px] "></Image>
        <div>
          <ul className=" flex  gap-5"></ul>
        </div>
      </div>
    </div>
  );
}
