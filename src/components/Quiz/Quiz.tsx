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

  console.log(questions);
  //const [setSelectedItems, setSelectedItems] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);

  const calculateScore = () => {
    //setScore
  };

  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    new Array(5).fill("")
  );

  const onSelect = (index: number, choice: string) => {
    const newSelectedChoices = [...selectedChoices];
    newSelectedChoices[index] === choice
      ? (newSelectedChoices[index] = "")
      : (newSelectedChoices[index] = choice);
    setSelectedChoices(newSelectedChoices);
    console.log(selectedChoices);
  };

  console.log("Quiz is renderd");

  return (
    <>
      {questions.map((question: QuestionType) => (
        <Question
          question={question.question}
          correctAnswer={question.correctAnswer}
          incorrectAnswers={question.incorrectAnswers}
          id={question.id}
          key={question.id}
          onSelect={onSelect}
        />
      ))}
      {!selectedChoices.includes("") && (
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
