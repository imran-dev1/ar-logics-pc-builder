import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";
import logo from "../../assets/images/ARLogics-logo.svg";

const MobileNav = ({ categories }) => {
   const [open, setOpen] = useState(false);
   const showDrawer = () => {
      setOpen(true);
   };
   const onClose = () => {
      setOpen(false);
   };
   return (
      <div className="flex items-center justify-between">
         <div className="flex items-center">
            <Image src={logo} alt="Logo" width={130} />
         </div>

         <div className="flex gap-3 justify-end items-center">
            <Button size="medium" type="primary" className="bg-[#ff4922]">
               PC Builder
            </Button>
            <div>
               <RiMenu3Fill onClick={showDrawer} className="text-2xl"></RiMenu3Fill>
               <Drawer
                  title="Basic Drawer"
                  placement="right"
                  onClose={onClose}
                  open={open}
               >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
               </Drawer>
            </div>
         </div>
      </div>
   );
};
export default MobileNav;
