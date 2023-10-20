import { Link, useLocation } from "react-router-dom";
import "./Result.css";
import { Question as QuestionType } from "../../interfaces/Question";
import { Question } from "../../components/Question/Question";

export const Result = () => {
  const { state } = useLocation();
  let color = "";

  switch (state.score) {
    case 0:
    case 1:
      color = "red";
      break;
    case 2:
    case 3:
      color = "yellow";
      break;
    case 4:
    case 5:
      color = "green";
      break;

    default:
      color = "white";
      break;
  }

  return (
    <div className="result">
      <div className="title">Results</div>
      <div className="qsts">
        {state.questions.map((question: QuestionType, index: number) => {
          return (
            <Question
              key={question.question}
              question={question}
              selectedAnswers={state.selectedChoices}
              selectedQuestion={index}
              choices={state.choices[index]}
            />
          );
        })}
      </div>
      <div className="score" style={{ backgroundColor: color }}>
        You scored {state.score} out of {state.questions.length}
      </div>
      <Link to="/">
        <button onClick={() => {}} className="submit">
          Create a new Quiz
        </button>
      </Link>
    </div>
  );
};
