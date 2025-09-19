"use client";
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
            <li>
              Keep your ID card or admission number ready for verification.
            </li>
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
      <div className="mt-4 w-full px-12 flex flex-col font-light gap-3 text-neutral-700 mt-5 mb-36">
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-950 transition duration-300 w-fit"
          onClick={() => setShowPopup(true)}
        >
          Attempt Exam
        </button>
        <p>allowed attempts: 1</p>
        <p>Grade to pass : 50.0 of 100.0</p>
        <p>Allowed time : 1 hour 30 minutes</p>
        <p>No form of cheating allowed or immediate disqualification will be given.</p>

        <Link
          href="/AfterLogin"
          className="bg-gray-200  px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 w-fit self-center"
        >
          Back
        </Link>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000006c] bg-opacity-40 ">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full  relative">
            <div className="flex justify-between">
              <h2 className="text-4xl  mb-2 text-blue-800 italic">
                quiz password
              </h2>
              <button
                className=" text-gray-800 hover:text-red-600 text-3xl font-light"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <p className="text-gray-700 text-sm mb-4 font-light ">
              his exam is protected by a password.
              <br /> <br /> You must enter the correct password provided by your
              instructor before you can begin.
            </p>
            <input
              type="number
              "
              value={quizPassword}
              onChange={(e) => setQuizPassword(e.target.value)}
              placeholder="quiz password"
              className="w-full border border-gray-400 px-4 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />{" "}
            <p className="text-gray-700 text-sm mb-4">
              {" "}
              <br />
              The timer will begin as soon as the exam starts, and the test will
              automatically submit when the time runs out. Closing or refreshing
              your browser during the test may cause your session to end and
              will count as an attempt. <br /> Questions must be answered in
              order, and once you move to the next question you will not be able
              to go back. Academic honesty is expected at all times—outside
              notes, collaboration, or unauthorized tools are not allowed.{" "}
              <br /> Activity during the exam is monitored, and switching tabs
              or suspicious behavior may result in disqualification. <br />{" "}
              <br /> <br />
            </p>
            <Link
              href="/examQuiz"
              className="block text-center bg-blue-700 hover:bg-blue-900 text-white font-semibold px-4 py-3 rounded-lg transition"
            >
              Attempt Exam
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
