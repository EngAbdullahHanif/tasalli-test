import React from "react";

function SecondBlock() {
  return (
    <>
      <div class="bg-customblue text-black">
        <div className="px-[8rem]  p-10 flex pt-[5rem]">
          <div class="w-1/2 pr-10 flex flex-col justify-between py-[40px]">
            <h2 class="text-3xl font-medium  mb-4 text-[60px]">Experts</h2>
            <p class=" mb-6 text-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada lectus sit amet dui accumsan, quis vestibulum dui
              egestas.{" "}
            </p>
            <a
              href="#"
              class="bg-blue-500 w-[150px] rounded-3xl text-[22px]  text-sm px-6 py-3 text-center text-white shadow-2xl"
            >
              Get Started
            </a>
          </div>
          <div class="w-1/2 relative z-0">
            <div className="border-black shadow-lg mt-[30px]  border-[4px] w-[500px] h-[500px] "></div>
            <img
              src="https://via.placeholder.com/500x500"
              alt="Experts"
              class=" absolute inset-0   -mt-30 ml-[30px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondBlock;
