import React from "react";

function header() {
  return (
    <>
      <header className="bg-white ">
        <div className="px-[8rem] p-6 flex flex-col md:flex-row items-center justify-between text-xl">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Logo"
            className="w-12 h-12"
          />

          <div className="flex-1 text-center md:text-left ">
            <nav className="flex items-center justify-center">
              <a
                href="#"
                className="font-medium text-gray-800 hover:text-gray-600 mr-6"
              >
                Become an Expert
              </a>
              <a
                href="#"
                className="font-medium text-gray-800 hover:text-gray-600 mr-6"
              >
                Find An Expert
              </a>
              <a
                href="#"
                className="font-medium text-gray-800 hover:text-gray-600"
              >
                Resolve a Bug
              </a>
            </nav>
          </div>
          <div className="flex items-center md:ml-auto">
            <a
              href="#"
              className="font-medium text-gray-800 hover:text-gray-600 mr-6"
            >
              Sign In
            </a>
            <a
              href="#"
              className="border-2 px-4 py-1 rounded-[20px] font-medium text-gray-800 hover:bg-gray-400"
            >
              Join Now
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
