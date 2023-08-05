import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const PCBuilder = () => {
   return <div>
      <h2>Make Your Own PC</h2>
      <div>
         
      </div>
   </div>;
};

export default PCBuilder;
PCBuilder.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
