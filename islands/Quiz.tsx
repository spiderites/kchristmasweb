import { useState } from "preact/hooks";

const QUIZ_BIN_URL = "https://api.jsonstorage.net/v1/json/85e573df-47a9-4833-a8c8-f60462352109/d2a58c1d-3fc7-4d43-a3d6-d93c119bddc9";
const API_KEY = "591142de-0cfc-4f7d-9a07-9b43374d658b";

export default function Quiz() {
   const questions = [
    { type: "input", name: "loveAboutMe", question: "What do you love about me?" },
    { type: "yesno", name: "marriage", question: "Sure ka ba ako papakasalan mooo?" },
    { type: "input", name: "whyme", question: "Bakit akooo?" },
    { type: "input", name: "impression", question: "Anong first impression mo sakin?" },
    { type: "input", name: "panliligaw", question: "Kung may mangliligaw sayo, sa anong paraan ang gusto mo siya manligaw?" },
    { type: "yesno", name: "serveGod", question: "Do you want us to serve Jesus together?" },
    { type: "yesno", name: "overthink", question: "Alam mo, madalas ako mag overthink, okay lang ba sayo?" },
    { type: "yesno", name: "overthink2", question: "Kahit sa maliit na bagay na ginagawa mo nakakaoverthink ako ihh, sure ka ba?" },
    { type: "input", name: "friends", question: "Tanggap ba ako ng mga kaibigan mooo?" },
    { type: "input", name: "friends2", question: "Wala ba silang masamang kutob sakinnn??" },
    { type: "choice", name: "children", question: "Pila ka anak imo ganahan?", choices: ["1", "2", "3", "4", "100", "250", "500"] },
    { type: "input", name: "jealous", question: "kung may dumating sa buhay mo na mafia boss, malaki katawan, mayaman, matalino tapoosss gwapo taposs parang si Mingyu taposs lahat meron.. lab mo paren ba ako nyannn??" },
    { type: "yesno", name: "jealous2", question: "Kung may mag flirt or magchat sayo irereject mo ba agaddd??"},
  { type: "input", name: "handome", question: "Di ba ako pogi?" },
  { type: "input", name: "cute", question: "cote paren ba akoo?" },
  { type: "input", name: "favFood", question: "Ano ang paborito mong foood?" },
  { type: "input", name: "favDrink", question: "Ano ang gusto mong drinks?" },
  { type: "input", name: "favSong", question: "Ano ang paborito mong kantaaa?" },
  { type: "input", name: "favMovie", question: "fav movie o series?" },
  { type: "input", name: "favBook", question: "Ano ang paborito mong libro/story?" },
    { type: "yesno", name: "beBoyfriend", question: "Do you want me to be your boyfriend?" },
    { type: "input", name: "beGirlfriend", question: "Do you want me to be my girlfriend?" },
  ];

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const current = questions[index];

  // Store answers locally in buffer
  function handleChange(value: string) {
    setAnswers({ ...answers, [current.name]: value });
  }

  // Send everything to server on submit
  async function submitAnswers() {
    try {
      await fetch(`${QUIZ_BIN_URL}?apiKey=${API_KEY}`, {
        method: "PUT", // replace all old answers
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  }

  function next() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      submitAnswers(); // send buffer only when submit
    }
  }

  const isSelected = (value: string) => answers[current.name] === value;

  return (
    <div class="w-full flex justify-center items-center mt-10 px-4">
      <div class="bg-gray-900/70 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl w-full max-w-md transition-all">
        {!submitted ? (
          <>
            <h2 class="text-xl font-semibold mb-6 text-center">{current.question}</h2>

            {/* Input */}
            {current.type === "input" && (
              <input
                type="text"
                class="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 focus:border-blue-500 outline-none transition"
                onInput={(e: any) => handleChange(e.target.value)}
                value={answers[current.name] || ""}
                placeholder="Type here..."
              />
            )}

            {/* Choice */}
            {current.type === "choice" && (
              <div class="flex flex-col gap-3 mt-2">
                {current.choices.map((c) => (
                  <button
                    key={c}
                    class={`p-3 rounded-lg text-left transition-all w-full ${
                      isSelected(c) ? "bg-blue-600 font-semibold" : "bg-gray-800/40 hover:bg-gray-700"
                    }`}
                    onClick={() => handleChange(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            )}

            {/* Yes/No */}
            {current.type === "yesno" && (
              <div class="flex gap-4 justify-center mt-4">
                <button
                  class={`px-6 py-2 rounded-xl font-semibold transition ${
                    isSelected("Yes") ? "bg-green-500 text-white" : "bg-gray-800/40 hover:bg-green-600"
                  }`}
                  onClick={() => handleChange("Yes")}
                >
                  Yes
                </button>
                <button
                  class={`px-6 py-2 rounded-xl font-semibold transition ${
                    isSelected("No") ? "bg-red-500 text-white" : "bg-gray-800/40 hover:bg-red-600"
                  }`}
                  onClick={() => handleChange("No")}
                >
                  No
                </button>
              </div>
            )}

{/* Next / Submit */}
<button
  onClick={next}
  disabled={!answers[current.name]} // disable if no answer
  class={`w-full mt-8 transition-all text-white py-3 rounded-xl font-bold ${
    answers[current.name]
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-700 cursor-not-allowed"
  }`}
>
  {index === questions.length - 1 ? "Submit" : "Next"}
</button>
          </>
        ) : (
          <h1 class="text-3xl font-bold text-center py-20 animate-pulse">
            THANK YOU 💙<br />
            <span class="text-sm block mt-2">Love you bby.</span>
          </h1>
        )}
      </div>
    </div>
  );
}