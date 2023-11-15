"use client";

import Image from "next/image";
import React from "react";

////IMG
import Chair from "../IMG/chair_main.png";
import Sofa from "../IMG/sofa.png";

export default function main() {
  return (
    <div className=" h-[500px] overflow-hidden">
      <div className=" flex justify-center items-center  mt-[200px] md:mt-[300px] uppercase  ">
        <h1 className=" xl:text-[120px] lg:text-[100px]  md:text-[70px] text-[35px] ">
          Deluxe Furniture
        </h1>

        <div className=" absolute  top-[340px]">
          <Image
            src={Sofa}
            className=" md:w-[500px] lg:w-[620px] w-[320px]   "
          ></Image>
        </div>
      </div>
    </div>
  );
}
