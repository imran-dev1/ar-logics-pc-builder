import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
   EditOutlined,
   EllipsisOutlined,
   SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Image from "next/image";
import cardImage from "../../assets/images/product.webp";
import Link from "next/link";
const { Meta } = Card;
const SingleProductCard = ({ product }) => {
   const { _id, Name, Image, Status, Rating, Price, Category } = product;
   return (
      <Link href={`/product/${_id}`}>
         <Card
            size="small"
            className="shadow-sm"
            hoverable
            actions={[
               <span key="status" className=" text-slate-500">
                  {Status}
               </span>,
               <span key="price" className=" text-black text-lg">
                  ${Price}
               </span>,
            ]}
         >
            <img
               alt="thumbnail"
               src={Image}
               width={200}
               height={200}
               responsive
               className="m-auto"
            />
            <p className=" flex justify-center text-amber-500 mt-4">
               Rating: {Rating}/5
            </p>
            <p className=" text-center text-slate-400">{Category}</p>
            <h2 className=" text-md font-semibold py-2 text-center">{Name}</h2>
         </Card>
      </Link>
   );
};
export default SingleProductCard;
