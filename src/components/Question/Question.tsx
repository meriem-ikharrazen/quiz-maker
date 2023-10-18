import { useMemo, useState } from "react";
import { shuffleArray } from "../../utils/shuffleArray";
import { Button } from "../Button/Button";
import "./Question.css";

type QuestionProps = {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  setCountClickedButtons: () => void;
};
export const Question: React.FC<QuestionProps> = ({
  question,
  correctAnswer,
  incorrectAnswers,
  setCountClickedButtons,
}) => {
  const randomChoices: string[] = useMemo(() => {
    return shuffleArray(correctAnswer, incorrectAnswers);
  }, [correctAnswer, incorrectAnswers]);

  return (
    <div className="Question">
      <div className="Qst">{question}</div>
      <div className="Choices">
        {randomChoices ? (
          randomChoices.map((choice: string) => (
            <Button
              name={choice}
              id={choice}
              color="#019C00"
              backgroundColor="white"
              component="question"
              setCountClickedButtons={setCountClickedButtons}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
