"use client";
import Link from "next/link";
import { ChevronDown, Bell } from "lucide-react";
import { useState } from "react";

export default function AfterLogin() {
  const [expanded, setExpanded] = useState(false);
  const [Exam, setExam] = useState(false);
  return (
    <div className="bg-white min-h-screen">
      <nav className="flex justify-between items-center px-6">
        <div className="flex items-center gap-3">
          <div className="backgrounds w-[90px] h-[80px]"></div>
          <button
            onClick={() => setExam(false)}
            className="text-lg px-5 py-5 hover:bg-stone-100 hover:border-b-2 border-stone-400"
          >
            Home
          </button>
          <button
            onClick={() => setExam(true)}
            className="text-lg px-5 py-5 hover:bg-stone-100 hover:border-b-2 border-stone-400"
          >
            My Exam
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button>
            <Bell className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2 ">
            <div className="p-2 bg-blue-200 rounded-full w-[50px] h-[50px] flex items-center justify-center">
              @@
            </div>
            <button>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto border-2 border-gray-300">
        <h2 className="text-2xl p-3 font-semibold  text-center text-white bg-blue-800">
          Personal Information
        </h2>
        <table className="w-full text-lg  overflow-hidden bg-white shadow-lg">
          <tbody>
            <tr className="bg-blue-50">
              <td className="tableE font-light ">Full Name</td>
              <td className="tableE font-bold uppercase">First Middle Last</td>
              <td className="tableE font-light ">School</td>
              <td className="tableE font-bold uppercase  ">Aschool</td>
            </tr>
            <tr>
              <td className="tableE font-light ">Is Blind/Def</td>
              <td className="tableE font-bold uppercase">No / No</td>
              <td className="tableE font-light ">Date of Birth</td>
              <td className="tableE font-bold uppercase">YYYY-MM-DD</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="tableE font-light">Location</td>
              <td className="tableE font-bold uppercase">
                Somewhere in Ethiopia
              </td>
              <td className="tableE font-light ">Admission Number</td>
              <td className="tableE font-bold uppercase">xxxxxxx</td>
            </tr>
            <tr>
              <td className="tableE font-light ">Gender</td>
              <td className="tableE font-bold uppercase">M/F</td>
              <td className="tableE font-light ">Enrolment Type</td>
              <td className="tableE font-bold uppercase"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* General Section */}
      <div className="max-w-5xl mx-auto mt-30 h-[70vh]">
        <h1 className="text-4xl font-semibold mb-6">
          {Exam ? "My Exams" : "Hi, Someone👋"}
        </h1>
        <div className="flex items-center justify-between py-2 ">
          <h1 className="text-4xl font-semibold">General </h1>
          {Exam && (
            <button
              className="flex items-center gap-1 px-3 py-1 rounded hover:underline transition text-blue-900"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
            >
              <span>{expanded ? "Hide" : "Expand"}</span>
            </button>
          )}
        </div>
        {Exam && (
          <div
            className={`transition-all duration-300 overflow-hidden rounded-lg  border border-gray-200 ${
              expanded ? "max-h-96 py-4 px-4" : "max-h-0 py-0 px-4"
            }`}
          >
            {expanded && (
              <div className="flex items-center gap-4 ">
                {/* Logo/Profile */}
                <div className="w-12 h-12  bg-pink-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/logo.png"
                    alt="Subject Logo"
                    className="w-10 h-10 object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                {/* Subject Info */}
                <div className="flex-1">
                  <Link
                    href="/"
                    className="text-lg font-light hover:underline text-blue-950"
                  >
                    G12 Mathematics examnation
                  </Link>
                  <div className="text-sm text-gray-600 mt-1 flex gap-5">
                    <span>
                      {" "}
                      <span className="font-bold"> Opens:</span> June 1, 2025
                      6:00 AM
                    </span>
                    <span>
                      {" "}
                      <span className="font-bold"> Closes:</span> July 10, 2025
                      10:00 AM
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        {!Exam && (
          <div className="mt-4 w-64 h-64 flex flex-col gap-4  bg-gray-50 rounded-xl shadow-xl overflow-hidden">
            <div className="backgrounds2 w-full h-1/2"></div>
            <div>
              <Link
                href="/"
                className="text-2xl font-light hover:underline text-blue-950 p-5"
              >
                {" "}
                Mathematics{" "}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
