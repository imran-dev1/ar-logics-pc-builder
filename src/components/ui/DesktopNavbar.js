import { Button, Dropdown, Menu, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import logo from "../../assets/images/ARLogics-logo.svg"

const DesktopNavbar = ({ categories}) => {
   return (
      <div
         className="flex items-center justify-between m-auto"
         style={{ maxWidth: "1200px" }}
      >
         <div className="flex items-center">
            <Image src={logo} alt="Logo" width={150} height={40} />
         </div>

         <ul
            className="bg-transparent font-medium"
            mode="horizontal"
         >
            <Space size={[30]} wrap>
               <Dropdown
                  overlayClassName="pt-3"
                  overlay={
                     <Menu>
                        {categories.map(({ key, label }) => (
                           <Menu.Item key={key}>{label}</Menu.Item>
                        ))}
                     </Menu>
                  }
               >
                  <a
                     onClick={(e) => e.preventDefault()}
                     className="flex items-center gap-1"
                  >
                     Categories <HiOutlineChevronDown></HiOutlineChevronDown>
                  </a>
               </Dropdown>
               <Link href="/about">About</Link>
            </Space>
         </ul>

         <Button
            size="large"
            type="primary"
            className="bg-[#ff4922]"
         >
            PC Builder
         </Button>
      </div>
   );
};

export default DesktopNavbar;
