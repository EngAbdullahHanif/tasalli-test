import React from "react";

function ThirdBlock() {
  return (
    <>
      <div class="bg-custompink text-black">
        <div className="px-[8rem] p-10 flex pt-[5rem]">
          <div class="w-1/2 relative z-0">
            <div className="border-black shadow-lg mt-[30px] ml-[30px] border-[4px] w-[500px] h-[500px] "></div>
            <img
              src="https://via.placeholder.com/500x500"
              alt="Experts"
              class=" absolute inset-0 -mt-30 "
            />
          </div>
          <div class="w-1/2 pr-10 flex flex-col justify-between py-[40px] px-[30px]">
            <h2 class="text-3xl font-medium mb-4 text-[60px]">Learners</h2>
            <p class="text-gray-800 mb-6 text-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lectus sit amet dui accumsan, quis vestibulum dui
              egestas.{" "}
            </p>
            <div className="flex justify-between items-center px-[20px]">
              <a
                href="#"
                class="bg-blue-500 w-[150px] rounded-3xl text-[22px] text-sm px-6 py-3 text-center text-white shadow-2xl"
              >
                Get Started
              </a>
              <a
                href="#"
                class="bg-blue-500 w-[150px] rounded-3xl text-[22px]  text-sm px-6 py-3 text-center text-white shadow-2xl"
              >
                Lean More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThirdBlock;
