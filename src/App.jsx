import { useState } from "react";
import "./App.css";
import dbQuestion from "./db/question.json";
import Questions from "./components/Questions";

//? Primero necesitamos obtner de nuestra db (que tiene 20preguntas ) solo traernos 5 de forma aleatoria.
function App() {
  const [questions, setQuestion] = useState([]); //Aqui se almacenan las TODAS LAS PREGUNTAS

  const handleRandomQuestion = () => {
    const newQuestion = dbQuestion.sort(() => Math.random() - 0.5).slice(0, 5); // Aca se alamacen 5 preguntas aleatorias de las 20 que existen 
    const copyQuestion = JSON.parse(JSON.stringify(newQuestion)); // Se hace una copia para perder la referencia a traves de los metodos JSON

    setQuestion(copyQuestion); // Y aca alamecenamos las preguntas YA LISTAS EN el USESTATE "QUESTIONS"
  };

  return (
    <main className="bg-black min-h-screen flex justify-center items-center text-center text-white">
      <section>
        <h1 className=" text-5xl font-bold">
          Preguntas <span className="text-yellow-400">JS</span>
        </h1>

        {questions.length === 0 && (
          <button
            onClick={handleRandomQuestion}
            className="bg-yellow-500 p-4 rounded-md block mx-auto mt-5 text-black hover:bg-yellow-300 transition-colors"
          >
            Vamos!
          </button>
        )}

        {questions.length !== 0 && <Questions questions={questions} setQuestion={setQuestion} />}
      </section>
    </main>
  );
}

export default App;
