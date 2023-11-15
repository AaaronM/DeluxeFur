import React from "react";

////IMG
import Lamp from "../IMG/pic6.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div id="footer">
      <div className=" h-[600px] relative flex justify-center items-center">
        <div className=" font-thin ">
          <h3 className=" mr-[80px] ">747-332-7075</h3>
          <p className="mr-[80px]">Karen.h@deluxefurniture.company</p>
        </div>
        <Image src={Lamp} className=" absolute z-0    h-[600px] w-auto" />
        <div className="ml-[50px]">
          <h3 className=" font-thin ">
            14545 Friar ST 302A <br />
            Van Nuys CA 91411
          </h3>
        </div>
      </div>
    </div>
  );
}
