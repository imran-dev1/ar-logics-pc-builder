import RootLayout from "@/components/layouts/RootLayout";
import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const ProductDetails = () => {
   const router = useRouter();
   const { productId } = router.query;
   return (
      <>
         <Breadcrumb
            items={[
               {
                  title: (
                     <Link href="/">
                        <HomeOutlined className="flex items-center mt-1" />
                     </Link>
                  ),
               },
               {
                  title: "Products",
               },
               {
                  title: productId,
               },
            ]}
         />
           <div className="columns-1 md:columns-2 mt-10">
               <div className="thumbnail">Id: </div>
               <div className="product-info">Info</div>
         </div>
      </>
   );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => { 
    const res = await fetch()
}
