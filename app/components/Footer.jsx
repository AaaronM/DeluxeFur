import React from "react";

////IMG
import Lamp from "../IMG/pic6.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      id="footer "
      className="overflow-hidden h-[600px] relative justify-center items-center "
    >
      <div className="  text-[20px]  h-[600px] relative flex justify-center items-center">
        <div className=" font-thin opacity-100  ">
          <h3 className=" mr-[80px] ">747-332-7075</h3>
          <p className="mr-[80px]">Karen.h@deluxefurniture.company</p>

          <h3 className=" font-thin ">
            14545 Friar ST 302A <br />
            Van Nuys CA 91411
          </h3>
        </div>
        <Image
          src={Lamp}
          className=" absolute   opacity-20 top-0   h-[600px] w-auto"
        />
      </div>
    </div>
  );
}

{
  /* <div className="  h-[600px] relative flex justify-center items-center">
<div className=" font-thin opacity-100  ">
  <h3 className=" mr-[80px] ">747-332-7075</h3>
  <p className="mr-[80px]">Karen.h@deluxefurniture.company</p>

  <h3 className=" font-thin ">
    14545 Friar ST 302A <br />
    Van Nuys CA 91411
  </h3>
</div>
<Image
  src={Lamp}
  className=" absolute   opacity-20 top-0   h-[600px] w-auto"
/>
</div> */
}
