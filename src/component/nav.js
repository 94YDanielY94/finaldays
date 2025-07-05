'use client'
import { ChevronDown, Bell } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Nav({ setExam }) {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <nav className="flex justify-between items-center px-6 relative w-full">
      <div className="flex items-center gap-3">
        <div className="backgrounds w-[90px] h-[80px]">
        </div>
          {setExam}
      </div>
      <div className="flex items-center gap-4 relative">
        {/* Notification Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotif((v) => !v);
              setShowProfile(false);
            }}
            className="relative"
          >
            <Bell
              className="w-5 h-5"
              fill={showNotif ? "gray" : "white"}
              stroke={showNotif ? "gray" : "black"}
            />
          </button>
          {showNotif && (
            <div className="afterarrow absolute -right-10 mt-2 w-64 bg-white border border-stone-500 rounded-md shadow-lg z-50">
              <div className="px-4 py-2  font-normal text-black">
                Notifications
              </div>
              <div className="px-4 py-24 text-center text-gray-500 text-sm">
                No notifications
              </div>
              <div className="px-4 py-2 border-t border-stone-300 text-xs text-gray-600 text-center">
                This page will notify you.
              </div>
            </div>
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="flex items-center gap-2 relative">
          <div className="p-2 bg-blue-200 rounded-full w-[50px] h-[50px] flex items-center justify-center">
            @@
          </div>
          <button
            onClick={() => {
              setShowProfile((v) => !v);
              setShowNotif(false);
            }}
          >
            <ChevronDown
              className={`w-4 h-4 ${
                showProfile ? "transform rotate-180" : ""
              } transition-transform `}
            />
          </button>
          {showProfile && (
            <div className="absolute afterarrow afterarrow2 top-13 -right-4  w-48 bg-white border border-stone-500 rounded-md z-50">
              <ul className="py-2">
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Preferences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Edit Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Help
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" block w-full text-left px-4 py-2 border-t border-stone-300 hover:bg-gray-100 text-red-950"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
