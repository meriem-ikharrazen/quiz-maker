import "./Question.css";
import { Question as QuestionType } from "../../interfaces/Question";
import { Choice } from "../Choice/Choice";

type QuestionProps = {
  question: QuestionType;
  selectedAnswers: string[];
  onAnswerSelected?: (answer: string, index: number) => void;
  selectedQuestion: number;
  choices: string[];
};
export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswers,
  onAnswerSelected,
  selectedQuestion,
  choices,
}) => {
  /*const randomChoices: string[] = useMemo(() => {
    return shuffleArray([question.correctAnswer, ...question.incorrectAnswers]);
  }, [question.correctAnswer, question.incorrectAnswers]);*/

  const handleClick = (answer: string) => {
    onAnswerSelected !== undefined &&
      onAnswerSelected(answer, selectedQuestion);
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div>
        {choices?.map((answer: string, index: number) => (
          <Choice
            action={() => handleClick(answer)}
            answer={answer}
            index={index}
            selectedAnswers={selectedAnswers}
            key={answer}
            disabled={onAnswerSelected === undefined}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </div>
    </div>
  );
};
