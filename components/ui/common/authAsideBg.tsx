import React from 'react'
import bg from "@/public/images/signUpBg.png"
export default function AuthAsideBg ()  {
  return (
    <div
      className=" w-full max-w-3xl rounded-2xl p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${bg.src})`,
      }}>



      </div>
  );
}
