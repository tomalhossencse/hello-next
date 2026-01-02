"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  console.log(router);
  const handleButton = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-5 my-4 bg-linear-60 to-sky-100 from-sky-300 text-black p-10 rounded">
      <h2 className="text-4xl font-bold">🙏Welcome to Dev Story</h2>
      <button
        onClick={handleButton}
        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white duration-300 cursor-pointer rounded"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
