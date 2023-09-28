function Option({
  Option,
  handleClickOption,
  indexOption,
  correctAnswer,
  userAnswer,
}) {

  const isQuestionAnswer= userAnswer !== null

  return (
    <button
      disabled={isQuestionAnswer}
      onClick={() => handleClickOption(indexOption)}
      className="font-bold hover:text-black bg-slate-800  p-2 rounded-md"
    >
      {Option}
    </button>
  );
}
export default Option;
