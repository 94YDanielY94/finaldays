"use client";
import { useState, useEffect, useRef } from "react";
import Nav from "@/component/nav";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
// Sample equation data
const equationData = [
  {
    question: "What is 50% of 200?",
    answers: ["50", "200", "150", "100"],
    correct: 3,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Shakespeare", "Charles Dickens", "Tolstoy", "Homer"],
    correct: 0,
  },
  {
    question: "What is the boiling point of water at sea level?",
    answers: ["90°C", "100°C", "110°C", "120°C"],
    correct: 1,
  },
  {
    question: "What is 7 squared?",
    answers: ["42", "47", "49", "56"],
    correct: 2,
  },
  {
    question: "Which ocean is the largest?",
    answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correct: 2,
  },
  {
    question: "What is 100 ÷ 25?",
    answers: ["2", "3", "4", "5"],
    correct: 2,
  },
  {
    question: "Which metal is liquid at room temperature?",
    answers: ["Iron", "Mercury", "Copper", "Silver"],
    correct: 1,
  },
  {
    question: "What is 2³?",
    answers: ["6", "8", "9", "12"],
    correct: 1,
  },
  {
    question: "Which organ pumps blood in the body?",
    answers: ["Lungs", "Brain", "Heart", "Liver"],
    correct: 2,
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
    correct: 1,
  },
  {
    question: "What is 45 + 55?",
    answers: ["90", "100", "110", "120"],
    correct: 1,
  },
  {
    question: "Which is the smallest prime number?",
    answers: ["0", "1", "2", "3"],
    correct: 2,
  },
  {
    question: "What is the chemical symbol for Gold?",
    answers: ["Au", "Ag", "Gd", "Go"],
    correct: 0,
  },
  {
    question: "How many continents are there?",
    answers: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "What is 14 × 2?",
    answers: ["26", "28", "30", "32"],
    correct: 1,
  },
  {
    question: "Which planet is closest to the Sun?",
    answers: ["Venus", "Mercury", "Mars", "Earth"],
    correct: 1,
  },
  {
    question: "What is 90 ÷ 9?",
    answers: ["8", "9", "10", "11"],
    correct: 2,
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: ["O-", "O+", "AB-", "AB+"],
    correct: 0,
  },
  {
    question: "What is 13 × 4?",
    answers: ["52", "48", "56", "60"],
    correct: 0,
  },
  {
    question: "Which gas makes up most of Earth's atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correct: 2,
  },
  {
    question: "What is the freezing point of water?",
    answers: ["0°C", "10°C", "32°C", "100°C"],
    correct: 0,
  },
  {
    question: "What is 3 × 15?",
    answers: ["30", "35", "40", "45"],
    correct: 3,
  },
  {
    question: "What is the capital of Italy?",
    answers: ["Rome", "Milan", "Venice", "Florence"],
    correct: 0,
  },
  {
    question: "Which element has the symbol O?",
    answers: ["Gold", "Oxygen", "Osmium", "Oxide"],
    correct: 1,
  },
  {
    question: "What is 25% of 400?",
    answers: ["50", "75", "100", "125"],
    correct: 2,
  },
  {
    question: "Which is the fastest land animal?",
    answers: ["Tiger", "Cheetah", "Leopard", "Lion"],
    correct: 1,
  },
  {
    question: "What is 64 ÷ 8?",
    answers: ["6", "7", "8", "9"],
    correct: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correct: 2,
  },
  {
    question: "What is 11 × 11?",
    answers: ["111", "110", "121", "101"],
    correct: 2,
  },
  {
    question: "Which is the smallest country in the world?",
    answers: ["Vatican City", "Monaco", "San Marino", "Malta"],
    correct: 0,
  },
  {
    question: "What is 18 ÷ 6?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
  },
  {
    question: "Which ocean lies between Africa and Australia?",
    answers: ["Pacific", "Atlantic", "Indian", "Arctic"],
    correct: 2,
  },
  {
    question: "What is 6 × 8?",
    answers: ["42", "46", "48", "52"],
    correct: 2,
  },
  {
    question: "Which scientist proposed the theory of relativity?",
    answers: ["Newton", "Einstein", "Galileo", "Tesla"],
    correct: 1,
  },
  {
    question: "What is the capital of Germany?",
    answers: ["Munich", "Berlin", "Hamburg", "Frankfurt"],
    correct: 1,
  },
  {
    question: "What is 2 × 25?",
    answers: ["40", "45", "50", "55"],
    correct: 2,
  },
  {
    question: "Which desert is the largest in the world?",
    answers: ["Gobi", "Sahara", "Kalahari", "Antarctic"],
    correct: 3,
  },
  {
    question: "What is 1,000 ÷ 100?",
    answers: ["1", "5", "10", "100"],
    correct: 2,
  },
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

const EXAM_DURATION = 90 * 60; // 1 hour 30 minutes in seconds

export default function ExamQuiz() {
  const [current, setCurrent] = useState(0);
  const [HTime, setHTime] = useState(false);
  const [questions, setQuestions] = useState(
    equationData.map((q, index) => ({
      QNumber: index + 1,
      ...q,
      answered: null,
      flagged: false,
    }))
  );
  const [preview, setPreview] = useState(false);
  const [showTimer, setShowTimer] = useState(true);

  // Timer state
  const [secondsLeft, setSecondsLeft] = useState(EXAM_DURATION);
  const timerRef = useRef();

  // Load timer from sessionStorage or start new
  useEffect(() => {
    const stored = sessionStorage.getItem("examTimer");
    if (stored) {
      setSecondsLeft(Number(stored));
    } else {
      setSecondsLeft(EXAM_DURATION);
      sessionStorage.setItem("examTimer", EXAM_DURATION);
    }
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          sessionStorage.removeItem("examTimer");
          window.location.href = "/attemt";
          return 0;
        }
        sessionStorage.setItem("examTimer", prev - 1);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  // Timer formatting and hour hand calculation
  const formatTime = (secs) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h > 0 ? h + ":" : ""}${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };
  const hourAngle = ((secondsLeft / EXAM_DURATION) * 360) % 360;

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
      <div className="relative min-h-fit w-full flex  items-center  px-3">
        {/* Main question block */}

        <div className="w-3/4 grid items-start gap-3 pr-4">
          <p className="text-5xl font-bold">AASTU</p>
          <div>
            <Button>Back</Button>
          </div>
          <div className="flex gap-2 justify-self-end items-center">
              <div className="flex flex-col items-center border border-amber-800 px-4 py-1">
            {showTimer == true ? (
                <p className="text-md text-center">
                  {formatTime(secondsLeft)}
                </p>
            ) : (<p className="text-md text-center">Time Hidden</p>)}</div>
            <Button
              onClick={() => setShowTimer((v) => !v)}
            >
              {showTimer ? "Hide" : "Show "}
            </Button>
          </div>

          <div className="flex items-start gap-2 ">
            <div className="border border-black bg-[#f4f4f4] p-2 w-[13%]">
              <p className="font-bold text-lg min-w-[120px]">
                <span className="text-xs font-normal">Questions</span>{" "}
                {questions[current].QNumber}
              </p>
              <div className="text-[10px] w-10">
                {questions[current].answered !== null
                  ? `Answer saved`
                  : `Not yet answered`}
              </div>
              <button
                className={`py-4 text-xs flex  items-center`}
                onClick={handleFlag}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`-rotate-12 ${
                    questions[current].flagged
                      ? "stroke-red-700 fill-red-700"
                      : ""
                  }`}
                >
                  <path d="M7 22V2l10 5-10 5" />
                </svg>
                {questions[current].flagged
                  ? "Unflag question"
                  : "Flag question"}
              </button>
            </div>

            <div className="flex flex-col items-end gap-2  w-full">
              <div className="w-full max-w-4xl  p-5 bg-[#d4ede690] rounded-lg  flex flex-col ">
                <div className="text-sm font-light mb-6">
                  {questions[current].question}
                </div>
                <div className="w-full flex flex-col gap-4 mb-2">
                  {questions[current].answers.map((ans, idx) => (
                    <label
                      key={idx}
                      className={`flex items-center gap-3 p-3 w-fit cursor-pointer font-normal`}
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
                <button
                  className=" font-light text-xs hover:underline hover:text-blue-600 w-fit my-2"
                  onClick={() =>
                    setQuestions((qs) =>
                      qs.map((q, i) =>
                        i === current ? { ...q, answered: null } : q
                      )
                    )
                  }
                  disabled={questions[current].answered === null}
                >
                  {questions[current].answered === null
                    ? null
                    : "Clear your choice"}
                </button>
              </div>

              {/* <div className="">
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
              </div> */}
            </div>
          </div>

          <div className="flex justify-between w-full mt-4 ">
            <Button
              onClick={() => current > 0 && setCurrent(current - 1)}
              disabled={current === 0}
              className="bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-semibold"
            >
              Previous
            </Button>
            {current < questions.length - 1 ? (
              <Button
                onClick={() =>
                  current < questions.length - 1 && setCurrent(current + 1)
                }
                disabled={current === questions.length - 1}
                className="bg-blue-700 hover:bg-blue-900 text-white font-semibold"
              >
                Next
              </Button>
            ) : (
              <Button
                className="bg-blue-700 hover:bg-blue-900 text-white font-semibold"
                onClick={() => {
                  sessionStorage.removeItem("examTimer");
                  window.location.href = "/attemt";
                }}
              >
                Finish Attempt
              </Button>
            )}
          </div>
        </div>

        {/* question container */}
        <div className=" flex w-1/4 flex-wrap gap-2 p-6 bg-white rounded-lg border-2 border-neutral-400">
          <p className="text-xl font-bold w-full mb-3">Exam content </p>
          {questions.map((q, idx) => (
            <button
              key={idx}
              className={`w-7 h-10 border relative border-black  flex justify-center items-start font-medium transition-colors text-xs rounded-sm overflow-hidden`}
              onClick={() => handleJump(idx)}
              aria-label={`Go to question ${idx + 1}`}
            >
              {idx + 1}
              <div
                className={`absolute bottom-0 left-0 w-full h-1/2 rounded-b-sm ${
                  getStatusColor(q, idx, current) == "answered"
                    ? "bg-neutral-700"
                    : getStatusColor(q, idx, current) == "both"
                    ? "bg-neutral-700"
                    : ""
                } `}
              ></div>
              <div
                className={clsx(
                  "absolute w-0 h-0 right-0 border-t-[12px] border-l-[12px] border-l-transparent",

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
