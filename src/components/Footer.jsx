import React from "react";
import { FiFacebook } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="max-h-sm bg-zinc-900 mx-auto h-[250px] text-center text-white ">
        <div className="flex justify-center">
          <div className="w-1/2">
            <h1 className="text-3xl lg:text-6xl font-bold p-[50px]">
              KAI SHIRT
            </h1>
            <p>
              Follow us on social networks: <br />
              <br />
              Copyright © 2025 kai shirt
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
