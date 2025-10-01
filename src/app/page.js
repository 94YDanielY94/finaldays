'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
  const [showPopup, setShowPopup] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  let inputFocusCount = 0;

  // Prevent background scroll when popup is open
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  // Handlers for focus/blur
  const handleFocus = () => {
    setShowWarning(true);
  };
  const handleBlur = () => {
    // Delay to allow focus to move between inputs
    setTimeout(() => {
      // Check if any input is still focused
      if (
        !document.activeElement ||
        (document.activeElement.type !== "number" &&
          document.activeElement.type !== "password")
      ) {
        setShowWarning(false);
      }
    }, 0);
  };

  return (
    <div className="min-h-screen flex p-2 sm:p-0 items-center justify-center bg-gray-100 font-[poppins]">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000007a] ">
          <div className="bg-[#fffafa] rounded-xl shadow-xl p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-red-800 hover:text-red-400 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-normal mb-2 text-red-700">Please read this!</h2>
            <p className="text-gray-700 text-sm">
              this site is made for the perpose of Demo online Matric exam platform expirience not for the real exam. this site doesn't record any data. <span className="text-red-600">Please dont input anything just log in</span>
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center w-full max-w-md p-4 sm:p-8 shadow-2xl rounded-2xl bg-white">
        <div className="backgrounds w-[80%] h-44 rounded-lg overflow-hidden mb-4 flex items-center justify-center bg-gray-200">
          {/* Example image: */}
          {/* <img src="/your-image.jpg" alt="Background" className="object-cover w-full h-full" /> */}
        </div>
        <h1 className="sm:text-base text-[12px] font-semibold mb-3 text-blue-800 text-center leading-snug">
          Educational Assessment and Examinations Service (EAES),Ethiopian Secondary School Leaving Certificate Examination (ESSLCE)
        </h1>
        {showWarning && (
          <div className="w-full mb-2 text-center text-xs text-red-900 font-light bg-red-100 p-2 rounded-md">
            Please do not input any data. This is a demo form.
          </div>
        )}
        <form className="w-full flex flex-col gap-3">
          <input
            type="number"
            placeholder="Admission Number"
            className="w-full border border-gray-400 px-4 py-3 font-light rounded-md text-base focus:outline-none focus:ring-3 focus:ring-blue-600 transition"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-400 px-4 py-3 font-light rounded-md text-base focus:outline-none focus:ring-3 focus:ring-blue-600 transition"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <Link
            href="/AfterLogin"
            className="mx-auto mt-4 w-1/3 text-center bg-blue-600 hover:bg-blue-700 text-lg text-white font-semibold px-4 py-2 rounded-lg transition "
          >
            Login
          </Link>
        </form>
        <div className="separator my-4 border-t border-gray-200 w-2/3"></div>
        <div className="w-full text-center text-gray-700 text-sm p-2">
          This is not from: <br />
          <span className="text-blue-900 font-light">
            exam(Number).ethernet.edu,et
          </span>
        </div>
      </div>
    </div>
  );
}
