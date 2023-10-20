import { useEffect, useMemo, useRef, useState } from "react";
import { shuffleArray } from "../../utils/shuffleArray";
import "./Question.css";
import { Question as QuestionType } from "../../interfaces/Question";
import { Choice } from "../Choice/Choice";

type QuestionProps = {
  question: QuestionType;
  selectedAnswers: string[];
  onAnswerSelected?: (answer: string, index: number) => void;
  selectedQuestion: number;
};
export const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswers,
  onAnswerSelected,
  selectedQuestion,
}) => {
  const [randomChoices, setRandomChoices] = useState<string[]>([]);

  useMemo(() => {
    return setRandomChoices(
      shuffleArray([question.correctAnswer, ...question.incorrectAnswers])
    );
  }, [question]);

  const handleClick = (answer: string) => {
    onAnswerSelected !== undefined &&
      onAnswerSelected(answer, selectedQuestion);
  };

  return (
    <div className="question">
      <h2>{question.question}</h2>
      <div>
        {randomChoices.map((answer: string, index: number) => (
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
