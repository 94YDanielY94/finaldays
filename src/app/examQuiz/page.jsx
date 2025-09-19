"use client";
import { useState } from "react";
import Nav from "@/component/nav";
import clsx from "clsx";
// Sample equation data
const equationData = [
  {
    question: "What is 5 + 7?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
  },
  {
    question: "What is 15 - 9?",
    answers: ["7", "5", "6", "8"],
    correct: 2,
  },
  {
    question: "What is 8 × 6?",
    answers: ["42", "48", "56", "36"],
    correct: 1,
  },
  {
    question: "What is 81 ÷ 9?",
    answers: ["7", "8", "9", "10"],
    correct: 2,
  },
  {
    question: "Simplify: 3x + 4x.",
    answers: ["7", "7x", "12x", "x^7"],
    correct: 1,
  },
  {
    question: "What is the square root of 144?",
    answers: ["10", "11", "12", "13"],
    correct: 2,
  },
  {
    question: "What is 2³?",
    answers: ["6", "8", "9", "12"],
    correct: 1,
  },
  {
    question: "What is 10% of 200?",
    answers: ["10", "15", "20", "25"],
    correct: 2,
  },
  {
    question: "Solve: 7 × (2 + 3).",
    answers: ["21", "28", "35", "14"],
    correct: 2,
  },
  {
    question: "What is 45 ÷ 5?",
    answers: ["9", "8", "7", "6"],
    correct: 0,
  },
  {
    question: "If x = 4, what is 2x + 5?",
    answers: ["11", "12", "13", "14"],
    correct: 0,
  },
  {
    question: "What is 100 ÷ 4?",
    answers: ["20", "25", "30", "40"],
    correct: 1,
  },
  {
    question: "What is 7²?",
    answers: ["47", "48", "49", "50"],
    correct: 2,
  },
  {
    question: "Solve: 3(4 + 6).",
    answers: ["28", "30", "32", "36"],
    correct: 1,
  },
  {
    question: "What is 2/3 of 90?",
    answers: ["30", "45", "60", "75"],
    correct: 2,
  },
  {
    question: "What is 1/4 of 200?",
    answers: ["40", "45", "50", "60"],
    correct: 2,
  },
  {
    question: "What is the perimeter of a square with side 12?",
    answers: ["24", "36", "44", "48"],
    correct: 3,
  },
  {
    question: "What is the area of a rectangle 5 × 8?",
    answers: ["30", "35", "40", "45"],
    correct: 2,
  },
  {
    question: "What is 9 × 9?",
    answers: ["72", "81", "91", "99"],
    correct: 1,
  },
  {
    question: "What is 50% of 300?",
    answers: ["100", "120", "150", "180"],
    correct: 2,
  },
  {
    question: "What is 0.25 as a fraction?",
    answers: ["1/3", "1/4", "1/5", "1/2"],
    correct: 1,
  },
  {
    question: "Simplify: 12 ÷ (3 × 2).",
    answers: ["1", "2", "3", "4"],
    correct: 2,
  },
  {
    question: "If x = 10, what is x²?",
    answers: ["50", "100", "200", "1000"],
    correct: 1,
  },
  {
    question: "What is the mean of 2, 4, 6, 8, 10?",
    answers: ["4", "5", "6", "7"],
    correct: 1,
  },
  {
    question: "What is 3/5 of 100?",
    answers: ["40", "50", "55", "60"],
    correct: 3,
  },
  {
    question: "Solve: 15 + (6 ÷ 2).",
    answers: ["16", "17", "18", "19"],
    correct: 2,
  },
  {
    question: "What is 1000 ÷ 25?",
    answers: ["30", "35", "40", "45"],
    correct: 2,
  },
  {
    question: "Simplify: (5² – 9).",
    answers: ["14", "15", "16", "17"],
    correct: 1,
  },
  {
    question: "What is 20% of 400?",
    answers: ["40", "60", "80", "100"],
    correct: 2,
  },
  {
    question: "What is 11 × 12?",
    answers: ["121", "132", "144", "156"],
    correct: 1,
  },
  {
    question: "Solve: 100 – (25 × 2).",
    answers: ["40", "45", "50", "55"],
    correct: 2,
  },
  {
    question: "What is the next prime after 7?",
    answers: ["9", "10", "11", "13"],
    correct: 2,
  },
  {
    question: "What is the sum of angles in a triangle?",
    answers: ["90°", "120°", "180°", "360°"],
    correct: 2,
  },
  {
    question: "What is the cube of 4?",
    answers: ["64", "12", "16", "128"],
    correct: 0,
  },
  {
    question: "Solve: 9 + 6 × 2.",
    answers: ["21", "22", "19", "18"],
    correct: 0,
  },
  {
    question: "What is 7 × 14?",
    answers: ["88", "96", "98", "106"],
    correct: 2,
  },
  {
    question: "What is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "What is 30 ÷ (2 + 3)?",
    answers: ["4", "5", "6", "7"],
    correct: 1,
  },
  {
    question: "If a = 2, b = 3, find ab.",
    answers: ["5", "6", "7", "8"],
    correct: 1,
  },
  {
    question: "What is the square root of 225?",
    answers: ["14", "15", "16", "17"],
    correct: 1,
  },
  {
    question: "Simplify: (6 × 6) – 10.",
    answers: ["24", "26", "28", "30"],
    correct: 3,
  },
  {
    question: "What is 75% of 200?",
    answers: ["125", "130", "140", "150"],
    correct: 3,
  },
  {
    question: "What is 13 × 13?",
    answers: ["156", "166", "169", "176"],
    correct: 2,
  },
  {
    question: "What is 400 ÷ 20?",
    answers: ["15", "20", "25", "30"],
    correct: 2,
  },
  {
    question: "Solve: 5² + 2².",
    answers: ["25", "28", "29", "30"],
    correct: 2,
  },
  {
    question: "What is 4/5 of 50?",
    answers: ["35", "38", "40", "42"],
    correct: 2,
  },
  {
    question: "What is the sum of 1 to 10?",
    answers: ["50", "52", "54", "55"],
    correct: 3,
  },
  {
    question: "What is 6 × 12?",
    answers: ["62", "68", "72", "78"],
    correct: 2,
  },
  {
    question: "What is 9 × 11?",
    answers: ["88", "99", "108", "110"],
    correct: 1,
  },
  {
    question: "Solve: 15 ÷ 3 + 8.",
    answers: ["11", "12", "13", "14"],
    correct: 2,
  },
  {
    question: "What is the perimeter of a rectangle 10 × 4?",
    answers: ["24", "28", "30", "32"],
    correct: 3,
  },
  {
    question: "What is the value of π (approx to 2 decimals)?",
    answers: ["3.12", "3.14", "3.16", "3.18"],
    correct: 1,
  },
  {
    question: "What is 2 × (3 + 7)?",
    answers: ["16", "18", "20", "22"],
    correct: 2,
  },
  {
    question: "What is 18 ÷ 3?",
    answers: ["5", "6", "7", "8"],
    correct: 1,
  },
  {
    question: "What is 14 × 5?",
    answers: ["60", "65", "70", "75"],
    correct: 2,
  },
  {
    question: "What is 22 + 35?",
    answers: ["55", "56", "57", "58"],
    correct: 2,
  },
  {
    question: "What is 90% of 100?",
    answers: ["80", "85", "90", "95"],
    correct: 2,
  },
  {
    question: "Simplify: 10² – 25.",
    answers: ["65", "70", "75", "80"],
    correct: 2,
  },
  {
    question: "What is the average of 2, 8, 10, 20?",
    answers: ["8", "9", "10", "11"],
    correct: 2,
  },
  {
    question: "What is 3 × 15?",
    answers: ["30", "35", "40", "45"],
    correct: 3,
  },
  {
    question: "What is 2/5 of 100?",
    answers: ["30", "35", "40", "45"],
    correct: 2,
  },
  {
    question: "What is the LCM of 4 and 6?",
    answers: ["10", "12", "14", "16"],
    correct: 1,
  },
];

const getStatusColor = (q, idx, current) => {
  if (q.flagged && q.answered !== null) return "both";
  if (q.flagged) return "flagged";
  if (q.answered !== null) return "answered";
  if (idx === current) return "current";
  return "default";
};

export default function ExamQuiz() {
  const [current, setCurrent] = useState(0);
  const [questions, setQuestions] = useState(
    equationData.map((q, index) => ({
      QNumber: index + 1,
      ...q,
      answered: null,
      flagged: false,
    }))
  );
  const [preview, setPreview] = useState(false);

  const handleAnswer = (idx) => {
    setQuestions((qs) =>
      qs.map((q, i) => (i === current ? { ...q, answered: idx } : q))
    );
  };

  const handleFlag = () => {
    setQuestions((qs) =>
      qs.map((q, i) => (i === current ? { ...q, flagged: !q.flagged } : q))
    );
    // handleNext();
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleJump = (idx) => setCurrent(idx);

  const allAnswered = questions.every((q) => q.answered !== null);

  return (
    <>
      <Nav />
      <div className="relative min-h-fit w-full flex  items-center justify-end bg-gray-50">
        {/* Main question block */}
        {!preview ? (
          <div className="w-3/5 flex items-start mx-6">
            <div className="border border-black bg-[#f4f4f4] p-2 ">
              <p className="font-bold text-lg min-w-[120px]">
                Questions {questions[current].QNumber}
              </p>
              <button className={`py-4 text-md  `} onClick={handleFlag}>
                {questions[current].flagged ? "Unflag" : "Flag"}
              </button>
            </div>
            <div className="flex flex-col items-end gap-6 ml-5 w-full">
              <div className="w-full max-w-4xl  p-5 bg-green-100 rounded-lg shadow-md flex flex-col ">
                <div className="text-lg font-semibold mb-6 ml-6">
                {questions[current].QNumber}. { questions[current].question}
                </div>
                <div className="w-full flex flex-col gap-4 mb-6">
                  {questions[current].answers.map((ans, idx) => (
                    <label
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border ${
                        questions[current].answered === idx
                          ? ""
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name={`answer-${current}`}
                        checked={questions[current].answered === idx}
                        onChange={() => handleAnswer(idx)}
                        className="accent-blue-500"
                      />
                      <span>{ans}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="">
                {current < questions.length - 1 ? (
                  <button
                    className={`px-4 py-2 rounded bg-blue-700 hover:bg-blue-500 font-semibold text-white`}
                    onClick={handleNext}
                    disabled={questions[current].answered === null}
                  >
                    Next
                  </button>
                ) : allAnswered ? (
                  <button
                    className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-500 font-semibold text-white"
                    onClick={() => setPreview(true)}
                  >
                    Finish Attempt
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col items-center">
            <h2 className="text-xl font-bold mb-6">Question Preview</h2>
            <ul className="w-full flex flex-col gap-4">
              {questions.map((q, idx) => (
                <li
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    q.answered === q.correct
                      ? "border-green-400 bg-green-50"
                      : "border-red-400 bg-red-50"
                  }`}
                >
                  <div className="font-semibold mb-2">{q.question}</div>
                  <div>
                    <span className="font-bold">Your answer: </span>
                    {q.answered !== null ? (
                      q.answers[q.answered]
                    ) : (
                      <span className="italic text-gray-500">Not answered</span>
                    )}
                  </div>
                  <div>
                    <span className="font-bold">Correct answer: </span>
                    {q.answers[q.correct]}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* question container */}
        <div className="  flex w-1/4 flex-wrap gap-2 p-8 bg-white rounded-lg shadow-2xl">
          <p className="text-xl font-bold w-full mb-3">Questions content </p>
          {questions.map((q, idx) => (
            <button
              key={idx}
              className={`w-10 h-12 border relative border-black  flex justify-center items-start font-bold transition-colors `}
              onClick={() => handleJump(idx)}
              aria-label={`Go to question ${idx + 1}`}
            >
              {idx + 1}
              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 ${
                  getStatusColor(q, idx, current) == "answered"
                    ? "bg-neutral-700"
                    : getStatusColor(q, idx, current) == "both"
                    ? "bg-neutral-700"
                    : ""
                } `}
              ></div>
              <div
                className={clsx(
                  "absolute w-0 h-0 left-0 border-t-[14px] border-r-[14px] border-r-transparent ",

                  getStatusColor(q, idx, current) === "flagged"
                    ? "border-t-red-600"
                    : getStatusColor(q, idx, current) === "both"
                    ? "border-t-red-600"
                    : ""
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
