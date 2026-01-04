import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <h2>Naviagation</h2>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="px-6 py-2 bg-gray-600 rounded text-white mx-4"
            href={"/dashboard/add-story"}
          >
            Add story
          </Link>
          <Link
            className="px-6 py-2 bg-gray-600 rounded text-white mx-4"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="px-6 py-2 bg-gray-600 rounded text-white mx-4"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
