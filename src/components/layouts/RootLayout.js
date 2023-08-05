import { Layout } from "antd";
import Link from "next/link";
import Head from "next/head";
import DesktopNavbar from "../ui/DesktopNavbar";
import MobileNav from "../ui/MobileNav";
const {  Content, Footer } = Layout;
const RootLayout = ({ children }) => {
   const categories = [
      {
         key: "cpu",
         label: <Link href="/category/cpu-processor">CPU / Processor</Link>,
      },
      {
         key: "motherboard",
         label: <Link href="/category/motherboard">Motherboard</Link>,
      },
      {
         key: "ram",
         label: <Link href="/category/ram">RAM</Link>,
      },
      {
         key: "psu",
         label: <Link href="/category/power-supply-unit">Power Supply Unit</Link>,
      },
      {
         key: "storage",
         label: <Link href="/category/storage-device">Storage Device</Link>,
      },
      {
         key: "monitor",
         label: <Link href="/category/monitor">Monitor</Link>,
      },
      {
         key: "others",
         label: <Link href="/category/others">Others</Link>,
      },
   ];
   return (
      <Layout className="layout">
         <Head>
            <title>AR Logics</title>
            <link rel="icon" href="/favicon.png" />
         </Head>
         <header className="bg-[#ededff] p-3">
            <div className="desktop-navbar hidden md:block">
               <DesktopNavbar categories={categories}></DesktopNavbar>
            </div>
            <div className="mobile-navbar block md:hidden">
               <MobileNav categories={categories}></MobileNav>
            </div>
         </header>
         <Content className="bg-white">
            <div className="site-layout-conten">
               <div
                  className="pt-10 pb-16 m-auto px-3"
                  style={{ maxWidth: "1200px" }}
               >
                  {children}
               </div>
            </div>
         </Content>
         <Footer
            className="bg-[#ededff]"
            style={{
               textAlign: "center",
            }}
         >
            AR Logics PC Builder ©2023 Developed by Imran
         </Footer>
      </Layout>
   );
};
export default RootLayout;
