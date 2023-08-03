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
import { BsCpu } from "react-icons/bs";
const SingleCategoryGrid = ({ category }) => {

   return (
      <Card size="small" hoverable>
         <BsCpu className="text-2xl m-auto"></BsCpu>
         <h3 className="text-center mt-2">{category}</h3>
      </Card>
   );
};
export default SingleCategoryGrid;
