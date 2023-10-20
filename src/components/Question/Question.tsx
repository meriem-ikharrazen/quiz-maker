import { Question as QuestionType } from "../../interfaces/Question";
import { Choice } from "../Choice/Choice";
import { useState } from "react";

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
  const [currentButtonIndex, setCurrentButtonIndex] = useState<number>();
  const handleClick = (answer: string, index: number) => {
    onAnswerSelected !== undefined &&
      onAnswerSelected(answer, selectedQuestion);
    setCurrentButtonIndex(index);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      <div>
        {choices?.map((answer: string, index: number) => (
          <Choice
            action={() => handleClick(answer, index)}
            answer={answer}
            selectedAnswers={selectedAnswers}
            key={answer}
            disabled={onAnswerSelected === undefined}
            correctAnswer={question.correctAnswer}
            selected={currentButtonIndex === index}
          />
        ))}
      </div>
    </div>
  );
};
