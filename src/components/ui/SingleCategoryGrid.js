import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
   EditOutlined,
   EllipsisOutlined,
   SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import cardImage from "../../assets/images/product.webp";
import { BsCpu, BsDeviceSsd, BsKeyboard, BsMotherboard } from "react-icons/bs";
import { LuMemoryStick } from "react-icons/lu";
import { PiMonitor } from "react-icons/pi";
import { GiEnergyTank } from "react-icons/gi";
const SingleCategoryGrid = ({ category }) => {
   const icon =
      category === "CPU/Processor" ? (
         <BsCpu className="text-4xl m-auto"></BsCpu>
      ) : category === "Motherboard" ? (
         <BsMotherboard className="text-4xl m-auto"></BsMotherboard>
      ) : category === "RAM" ? (
         <LuMemoryStick className="text-4xl m-auto"></LuMemoryStick>
      ) : category === "Storage Device" ? (
         <BsDeviceSsd className="text-4xl m-auto"></BsDeviceSsd>
      ) : category === "Monitor" ? (
         <PiMonitor className="text-4xl m-auto"></PiMonitor>
      ) : category === "Others" ? (
        <BsKeyboard className="text-4xl m-auto"></BsKeyboard>
     ) : category === "Power Supply Unit" ? (
        <GiEnergyTank className="text-4xl m-auto"></GiEnergyTank>
     ) :(
         ""
      );
      
   return (
      <Card size="small" hoverable className=" shadow-md">
         {icon}
         <h3 className="text-center mt-2">{category}</h3>
      </Card>
   );
};
export default SingleCategoryGrid;
