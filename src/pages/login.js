import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import React from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Login = () => {
   const { data: session } = useSession();
   const router = useRouter();
   console.log(router);

   if (session?.user) {
      if (router.query.callbackUrl) {
         router.replace(router.query.callbackUrl);
      } else { 
         router.replace('/')
      }
   }

   return (
      <div className="flex justify-center items-center py-56 sm:py-96">
         <button
            className="flex gap-3 px-10 py-7 bg-green-200 items-center text-lg rounded-full "
            onClick={() =>
               signIn("google", { callbackUrl: process.env.BASE_URL })
            }
         >
            <AiOutlineGoogle className="text-3xl"></AiOutlineGoogle> Sign In
            With Google
         </button>
      </div>
   );
};

export default Login;

Login.getLayout = function getLayout(page) {
   return <RootLayout>{page}</RootLayout>;
};
