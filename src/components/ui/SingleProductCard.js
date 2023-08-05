import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
   EditOutlined,
   EllipsisOutlined,
   SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Image from "next/image";
import cardImage from "../../assets/images/product.webp";
import Link from "next/link";
const { Meta } = Card;
const SingleProductCard = ({ product }) => {
   const { _id, name, image, status, rating, price, category } = product;
   return (
      <Card
         size="small"
         className="shadow-sm"
         responsive
         hoverable
         actions={[
            <Link key="details" href={`/product/${_id}`}>
               <Button>Details</Button>
            </Link>,
            <Button key="pc-builder" type="primary" danger>
               Add To Builder
            </Button>,
         ]}
      >
         <Image
            alt="thumbnail"
            src={image}
            width={200}
            height={200}
            responsive
            className="m-auto"
         />
         <p className=" flex justify-center text-amber-500 mt-4">
            Rating: {rating}/5
         </p>
         <p className=" text-center text-slate-400">{category}</p>
         <h2 className=" text-md font-semibold py-2 text-center">{name}</h2>
      </Card>
   );
};
export default SingleProductCard;
