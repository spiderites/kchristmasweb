import { useState } from "preact/hooks";

export default function Quiz() {
  const questions = [
    {
      type: "input",
      name: "loveAboutMe",
      question: "What do you love about me?",
    },
    {
      type: "yesno",
      name: "marriage",
      question: "Sure ka ba ako papakasalan mooo?",
    },
     {
      type: "input",
      name: "whyme",
      question: "Bakit akooo?",
    },
    {
      type: "input",
      name: "panliligaw",
      question: "Anong way gusto mo sa panliligaw?",
    },
    {
      type: "yesno",
      name: "beBoyfriend",
      question: "Do you want me to be your boyfriend?",
    },
  ];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[index];

  function handleChange(e: any) {
    setAnswers({ ...answers, [current.name]: e.target.value });
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      console.log("Quiz answers:", answers);
      setSubmitted(true);
    }
  }

  return (
    <div class="w-full flex justify-center items-center mt-10">
      <div class="bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl shadow-xl w-full max-w-md relative
                  flash-enter flash-enter-active">

        {!submitted ? (
          <>
            <h2 class="text-xl font-semibold mb-4 text-center">{current.question}</h2>

            {/* Input Question */}
            {current.type === "input" && (
              <input
                type="text"
                class="w-full p-3 rounded-lg bg-white/20 outline-none"
                onInput={handleChange}
                value={answers[current.name] || ""}
              />
            )}

            {/* Choice Question */}
            {current.type === "choice" && (
              <div class="flex flex-col gap-2">
                {current.choices.map((c) => (
                  <label class="flex items-center gap-3 p-2 bg-white/10 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name={current.name}
                      value={c}
                      onInput={handleChange}
                    />
                    {c}
                  </label>
                ))}
              </div>
            )}

            {/* Y/N Question */}
            {current.type === "yesno" && (
              <div class="flex gap-3 justify-center">
                <button
                  value="Yes"
                  onClick={(e: any) =>
                    handleChange({ target: { value: "Yes" } })
                  }
                  class="px-5 py-2 bg-green-500 rounded-xl font-semibold"
                >
                  Yes
                </button>

                <button
                  value="No"
                  onClick={(e: any) =>
                    handleChange({ target: { value: "No" } })
                  }
                  class="px-5 py-2 bg-red-500 rounded-xl font-semibold"
                >
                  No
                </button>
              </div>
            )}

            {/* Next / Submit */}
            <button
              onClick={next}
              class="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-xl font-bold"
            >
              {index === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </>
        ) : (
          <h1 class="text-3xl font-bold text-center py-20 animate-pulse">
            THANK YOU 💙  
            <br />
            <span class="text-sm block mt-2">
              God bless this relationship, fr.  
              Love rooted in Christ just hits diff.
            </span>
          </h1>
        )}
      </div>
    </div>
  );
}