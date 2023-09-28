import { useState } from "react";
import Option from "./Option";

function Questions({ questions, setQuestion }) {
  const [currentQuestions, setCurrentQuestions] = useState(0); //Se crea este estado para saber en que pregunta se encuentran

  const question = questions[currentQuestions];

  const handleClickOption = (indexOption) => {
    const copyQuestions = [...questions];
    copyQuestions[currentQuestions].user_answer = indexOption;
    setQuestion(copyQuestions);
  };

  const handlePreviusQuestions = () => {
    setCurrentQuestions(currentQuestions - 1);
  };
  const handleNextsQuestions = () => {
    setCurrentQuestions(currentQuestions + 1);
  };

  let correctAnswers= 0
  let incorrectAnswers= 0


  questions.forEach((question) => {
    if(question.user_answer === null ) return
    if(question.user_answer === question.correct_answer){
      correctAnswers++
    } else{
      incorrectAnswers ++
    }
  });


  return (
    <section className="my-5 p-4 grid gap-3">

      <div className="bg-slate-700 rounded-full">
        <span> {currentQuestions + 1} / {questions.length}</span>
      </div>

      <div className="bg-white/30 p-4 rounded-lg max-w-[500px] font-semibold">
        <p>{question.description}</p>
      </div>

      <div className="grid gap-3 bg-slate-9 onClick={}00 rounded-lg p-4">
        <Option
          handleClickOption={handleClickOption}
          Option={question.options[0]}
          indexOption={0}
          correctAnswer={question.correct_answer}
          userAnswer={question.user_answer}
        />
        <Option
          handleClickOption={handleClickOption}
          Option={question.options[1]}
          indexOption={1}
          correctAnswer={question.correct_answer}
          userAnswer={question.user_answer}
        />
        <Option
          handleClickOption={handleClickOption}
          Option={question.options[2]}
          indexOption={2}
          correctAnswer={question.correct_answer}
          userAnswer={question.user_answer}
        />
        <Option
          handleClickOption={handleClickOption}
          Option={question.options[3]}
          indexOption={3}
          correctAnswer={question.correct_answer}
          userAnswer={question.user_answer}
        />
      </div>

      <div className="flex justify-center gap-3 ">
        {currentQuestions !== 0 && (
          <button
            onClick={handlePreviusQuestions}
            className="bg-orange-900 p-4 px-10 rounded-lg"
          >
            Anterior
          </button>
        )}

        {currentQuestions !== questions.length -1 && (
          <button
            onClick={handleNextsQuestions}
            className="bg-orange-900 p-4 px-10 rounded-lg"
          >
            Siguiente
          </button>
        )}
      </div>

      <div className="grid">
        <span>Correctas: {correctAnswers}</span>
        <span>Incorrectas: {incorrectAnswers}</span>
      </div>
    </section>
  );
}
export default Questions;
