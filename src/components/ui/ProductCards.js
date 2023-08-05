import React from "react";
import SingleProductCard from "./SingleProductCard";

const ProductCards = ({ allProducts }) => {
   return (
      <div className="mb-10">
         <div className="grid grid-flow-col gap-4 grid-cols-2 sm:grid-cols-4 grid-rows-4 sm:grid-rows-2">
            {allProducts.map((product) => {
               if (product.featured) {
                  return (
                     <SingleProductCard
                        key={product._id}
                        product={product}
                     ></SingleProductCard>
                  );
               }
            })}
         </div>
      </div>
   );
};

export default ProductCards;
