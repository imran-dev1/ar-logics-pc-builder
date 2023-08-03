import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const ProductDetails = () => {
   return <div>Product Details</div>;
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
