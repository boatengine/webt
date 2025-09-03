import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import ItemCat from "./ItemCat";

export default function Category() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-8 flex gap-6 flex-wrap justify-center">
        <ItemCat />
        <ItemCat />
        <ItemCat />
      </div>
    </>
  );
}
