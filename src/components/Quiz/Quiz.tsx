import { Question } from "../Question/Question";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { Question as QuestionType } from "../../interfaces/Question";
import { useState } from "react";
import { Button } from "../Button/Button";

type QuizProps = {
  category: string;
  difficulty: string;
  isVisible: boolean;
};

export const Quiz: React.FC<QuizProps> = ({
  category,
  difficulty,
  isVisible,
}) => {
  const questions: QuestionType[] = useFetchQuestions(
    category,
    difficulty,
    isVisible
  );
  const [countClickedButtons, setCountClickedButtons] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const incrementCount = () => {
    setCountClickedButtons((prev: number) => prev + 1);
  };

  const calculateScore = () => {
    //setScore
  };

  return (
    <>
      {questions.map((question: QuestionType, index: number) => (
        <Question
          question={question.question}
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
          key={index}
          setCountClickedButtons={incrementCount}
        />
      ))}
      {countClickedButtons === 5 && (
        <Button
          id="Submit"
          name="Submit"
          backgroundColor="grey"
          color="white"
          component="quiz"
          ccsStyle={{ width: "100%" }}
        />
      )}
    </>
  );
};
