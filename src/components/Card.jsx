import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";

export default function Card() {
  return (
    <div>
      <div class="max-w-sm bg-white rounded-xs m-2dark:bg-gray-800 dark:border-gray-700 object-cover">
        <a href="#">
          <img
            class="rounded-lg"
            src="https://images.unsplash.com/photo-1756474215990-a18a9a0521d5?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </a>
        <div class="mt-5">
          <a href="#">
            <h5 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">
              Jersey
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <div className="flex justify-between p-1">
            <div className="">
              <FaShoppingCart className="w-6 h-6" />
            </div>
            <div className="">$9999</div>
          </div>
        </div>
      </div>
    </div>
  );
}
