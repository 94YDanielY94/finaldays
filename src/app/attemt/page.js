'use client'
import { useState } from "react";
import Nav from "@/component/nav";
import Link from "next/link";

export default function attemt() {
  const [showPopup, setShowPopup] = useState(false);
  const [quizPassword, setQuizPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center ">
      <Nav />
      <div className="flex flex-col items-center justify-center bg-green-100 w-2/4  rounded-2xl p-10">
        <div className="backgrounds w-2/4 h-72 "></div>
        <div className="instructions mt-4 w-full">
          <h2 className="text-lg  mb-2 ">
            Read all instructions carefully before starting the exam.
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-base">
            <li>Keep your ID card or admission number ready for verification.</li>
            <li>Do not close the browser during the exam.</li>
            <li>Answer all questions within the allotted time.</li>
            <li>
              Do not attempt to copy or share exam content, as it results in
              immediate disqualification.
            </li>
            <li>Call for support immediately if you face technical issues.</li>
            <li>Submit your answers before the timer runs out.</li>
            <li>After reviewing, click finish and submit, then logout.</li>
            <li>
              Any form of cheating will result in immediate disqualification.
            </li>
          </ul>
        </div>
        <div className="mt-7 text-2xl"> Good luck!</div>
      </div>
      <div className="mt-4 w-full px-12 flex flex-col font-light gap-6 mt-5 mb-36">
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950 transition duration-300 w-fit"
          onClick={() => setShowPopup(true)}
        >
          Attempt Exam
        </button>
        <p>allowed attempts: 1</p>
        <p>Grade to pass : 50.0 of 100.0</p>
        <Link
          href="/AfterLogin"
          className="bg-gray-200  px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 w-fit self-center"
        >
          Back
        </Link>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000006c] bg-opacity-40">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl font-bold"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-2 text-blue-800">
              Quiz Password Required
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              Please enter the quiz password to begin your exam.
            </p>
            <input
              type="password"
              value={quizPassword}
              onChange={(e) => setQuizPassword(e.target.value)}
              placeholder="Quiz Password"
              className="w-full border border-gray-400 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Link
              href="/exam"
              className="block text-center bg-blue-700 hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded-lg transition"
            >
              Attempt Exam
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
