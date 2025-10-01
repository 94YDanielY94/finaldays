"use client";
import { useState } from "react";
import Nav from "@/component/nav";
import Link from "next/link";

export default function attemt() {
  const [showPopup, setShowPopup] = useState(false);
  const [quizPassword, setQuizPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
          className="bg-blue-800 text-white px-4 py-2 font-semibold rounded-lg hover:bg-blue-950 transition duration-300 w-fit"
          onClick={() => setShowPopup(true)}
        >
          Attempt Exam
        </button>
        <p>allowed attempts: 1</p>
        <p>Grade to pass : 50.0 of 100.0</p>
        <p>Allowed time : 1 hour 30 minutes</p>
        <p>
          this test requires the quiz password, wait for the instructor to
          provide it
        </p>

        <Link
          href="/AfterLogin"
          className="bg-gray-200  px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300 w-fit self-center"
        >
          Back
        </Link>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#27202042] bg-opacity-30 "
        >
          <div className="border-indigo-700 border-4 bg-white rounded-xl shadow-xl p-3 max-w-lg w-full  relative">
            <div className="">
              <div className="flex justify-between w-full items-center border-b-2">
                <h2 className="text-4xl  mb-2 text-black font-semibold ">
                  Start Exam
                </h2>{" "}
              </div>

              <h2 className="text-3xl  mt-1  ">quiz password</h2>
            </div>
            <p className="text-gray-700 text-sm my-6  font-light ">
              You must enter the correct password provided by your instructor
              before you can begin.
            </p>
            <div className="relative w-1/2 mb-4">
              <input
                id="quiz-password"
                type={showPassword ? "text" : "password"}
                value={quizPassword}
                onChange={(e) => setQuizPassword(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder=""
                className="peer w-full border border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <label
                className={`absolute left-4 flex items-center gap-1 transition-all duration-200 bg-white px-1 text-sm hover:text-indigo-600 hover:underline cursor-pointer
                  ${
                    isFocused
                      ? "-top-3 text-xs text-indigo-800"
                      : "top-2 text-gray-500 cursor-text"
                  }
                `}
                htmlFor="quiz-password"
                onClick={() => document.querySelector("#quiz-password").focus()}
              >
                {/* Pencil icon */}
                <svg
                  fill="#666"
                  width="13px"
                  height="13px"
                  viewBox="0 0 0.72 0.72"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.66 0.217a0.03 0.03 0 0 0 -0.009 -0.021l-0.127 -0.127a0.03 0.03 0 0 0 -0.021 -0.009 0.03 0.03 0 0 0 -0.021 0.009l-0.085 0.085L0.069 0.481a0.03 0.03 0 0 0 -0.009 0.021V0.63a0.03 0.03 0 0 0 0.03 0.03h0.127a0.03 0.03 0 0 0 0.023 -0.009l0.326 -0.328L0.651 0.24a0.036 0.036 0 0 0 0.007 -0.01 0.03 0.03 0 0 0 0 -0.007 0.021 0.021 0 0 0 0 -0.004ZM0.205 0.6H0.12v-0.085l0.298 -0.298 0.085 0.085ZM0.545 0.26l-0.085 -0.085 0.043 -0.042 0.085 0.085Z" />
                </svg>
                click to enter password
              </label>
              <button
                type="button"
                className="= text-gray-600 hover:text-blue-800"
                onClick={() => setShowPassword((prev) => !prev)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  // Simple eye open icon (circle)
                  <svg
                    fill="#666
               "
                    width="16px"
                    height="16px"
                    viewBox="0 0 0.72 0.72"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.658 0.348C0.597 0.207 0.483 0.12 0.36 0.12s-0.237 0.087 -0.298 0.228a0.03 0.03 0 0 0 0 0.024C0.123 0.513 0.237 0.6 0.36 0.6s0.237 -0.087 0.298 -0.228a0.03 0.03 0 0 0 0 -0.024M0.36 0.54c-0.095 0 -0.185 -0.069 -0.237 -0.18C0.175 0.249 0.265 0.18 0.36 0.18s0.185 0.069 0.237 0.18c-0.052 0.111 -0.142 0.18 -0.237 0.18m0 -0.3a0.12 0.12 0 1 0 0.12 0.12 0.12 0.12 0 0 0 -0.12 -0.12m0 0.18a0.06 0.06 0 1 1 0.06 -0.06 0.06 0.06 0 0 1 -0.06 0.06" />
                  </svg>
                ) : (
                  // Simple eye closed icon (line)
                  <svg
                    width="16px"
                    height="16px"
                    viewBox="0 0 0.72 0.72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.06 0.3s0.105 0.12 0.3 0.12 0.3 -0.12 0.3 -0.12"
                      stroke="#666
                 "
                      strokeWidth="0.06"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.12 0.349 0.06 0.42"
                      stroke="#666
                 "
                    strokeWidth="0.06"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m0.66 0.42 -0.06 -0.071"
                      stroke="#666
                 "
                 strokeWidth="0.06"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.267 0.41 0.24 0.495"
                      stroke="#666
                 "
                      strokeWidth="0.06"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.452 0.411 0.48 0.495"
                      stroke="#666
                 "
                      strokeWidth="0.06"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-gray-700 text-sm my-6  font-light ">
              password is given by the instructor
            </p>
            <div className='flex gap-3'>
              <Link
                href="/examQuiz"
                className="block text-center bg-blue-700 hover:bg-blue-900 text-white font-semibold px-4 py-3 rounded-lg transition"
              >
                Attempt Exam
              </Link>
              <button
                className=" block text-center bg-neutral-200 hover:bg-neutral-400 text-neutral-700 font-semibold px-4 py-3 rounded-lg transition"
                onClick={() => setShowPopup(false)}
                aria-label="Close"
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
