import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2 ] w-full min-h-screen">
        <div className="absolute w-full py-10 top-[5%] flex justify-center text-zinc-600 text-xl">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[15vw] leading-none tracking-tighter font-regular text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
