import React from "react";

////IMG
import Sofa from "../IMG/sofa.png";
import Chair from "../IMG/chair_main.png";
import Image from "next/image";
import Chair2 from "../IMG/chair2.png";

export default function Info() {
  return (
    <div className="  h-screen flex flex-col  justify-center items-center text-center  relative overflow-hidden  ">
      <Image
        src={Chair2}
        className=" absolute top-[100px] right-0 opacity-20   "
      />
      <h2 className=" text-[50px] mb-20 opacity-30">CORE IDEALS</h2>
      <div className=" flex flex-col lg:flex-row justify-center items-center font-thin  z-10">
        <ul className="  text-[40px] flex flex-col gap-20 uppercase text-center mr-10  ">
          <li className=" hover:scale-110 transition-all  hover:font-normal  ">
            Durability
          </li>
          <li className=" hover:scale-110 transition-all  hover:font-normal  ">
            Aesthetics
          </li>
        </ul>
        <div className=" ">
          <Image src={Chair} className=" w-[400px]"></Image>
        </div>
        <div className="text-[40px] flex flex-col gap-20 uppercase text-center mr-10">
          <ul className=" flex flex-col gap-20  text-center uppercase text-[40px] ml-10 ">
            <li className=" hover:scale-110 transition-all  hover:font-normal  ">
              Comfort
            </li>
            <li className=" hover:scale-110 transition-all  hover:font-normal  ">
              Versatility
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// <div className=" flex  flex-row  justify-center items-center   ">
//

// <ul className=" flex flex-col justify-center items-center gap-10 text-[20px]  font-thin translate-y-[-180px]">
//   <li className=" bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-full hover:scale-110 transition-all">
//     Comfort
//   </li>
//   <li className=" bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-full hover:scale-110 transition-all">
//     Versatility
//   </li>
//   <li className=" bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-full hover:scale-110 transition-all">
//     Aesthetics
//   </li>
//   <li className=" bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-full hover:scale-110 transition-all">
//     Durability
//   </li>
// </ul>
//       </div>
