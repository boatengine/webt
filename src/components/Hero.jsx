import React from "react";

export default function Hero() {
  return (
    <>
      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-300 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-[173px]">
          <h1 class="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            KAI SHRIT
          </h1>
          <p class="mb-8 text-lg text-left font-normal text-zinc-50 lg:text-xl">
            เสื้อมือสองคุณภาพ ตามราคา รับประกันสุดสายตา
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center  items-center py-4 px-6 text-base font-medium text-center text-white rounded-lg bg-stone-800 hover:bg-zinc-50 hover:text-gray-700 transitin-all duration-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              MORE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
