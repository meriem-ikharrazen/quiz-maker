import { Link, useLocation } from "react-router-dom";
import "./Result.css";
import { Question as QuestionType } from "../../interfaces/Question";
import { Question } from "../../components/Question/Question";

export const Result = () => {
  const { state } = useLocation();

  return (
    <div className="result">
      <div className="title">Results</div>
      <div className="qsts">
        {state.questions.map((question: QuestionType, index: number) => (
          <Question
            key={question.question}
            question={question}
            selectedAnswers={state.selectedChoices}
            selectedQuestion={index}
          />
        ))}
      </div>
      <div className="score">{state.score}</div>
      <Link to="/">
        <button onClick={() => {}} className="submit">
          Create a new Quiz
        </button>
      </Link>
    </div>
  );
};
