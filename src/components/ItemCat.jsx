import React from "react";

export default function ItemCat() {
  return (
    <>
      <div class="max-w-sm bg-white rounded-xs m-2dark:bg-gray-800 dark:border-gray-700 object-cover">
        <h5 className="text-3xl mx-3 my-1 font-bold">T-Shirt</h5>
        <a href="#">
          <img
            class="rounded-lg"
            src="https://plus.unsplash.com/premium_photo-1755657919865-238f003a1f7e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </a>

        <a href="#">
          <button class="bg-gray-800 text-white p-3 m-3 rounded-lg">
            See More
          </button>
        </a>
      </div>
    </>
  );
}
