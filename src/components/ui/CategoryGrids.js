import React from "react";
import SingleCategoryGrid from "./SingleCategoryGrid";

const CategoryGrids = ({ products }) => {
   const categories = [];

   products.map((product) => {
       if (!categories.includes(product.Category)) {
        categories.push(product.Category);
      }
   });
   return (
      <div>
         <div className="grid grid-rows-4 sm:grid-rows-3 lg:grid-rows-1 grid-flow-col gap-4">
            {categories.map((category,index) => {
               return (
                  <SingleCategoryGrid
                     key={index}
                     category={category}
                  ></SingleCategoryGrid>
               );
            })}
         </div>
      </div>
   );
};

export default CategoryGrids;
