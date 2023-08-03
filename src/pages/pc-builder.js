import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const PCBuilder = () => {
   return <div>PC Builder</div>;
};

export default PCBuilder;
PCBuilder.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
