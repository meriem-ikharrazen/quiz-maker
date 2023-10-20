import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { Question as QuestionType } from "../../interfaces/Question";
import { Question } from "../Question/Question";
import "./Quiz.css";
import { shuffleArray } from "../../utils/shuffleArray";
import { Choice } from "../../interfaces/Choice";

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
  const [choices, setChoices] = useState<Choice>({});
  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    new Array(5).fill("")
  );
  let score = 0;
  const navigate = useNavigate();
  const questions: QuestionType[] = useFetchQuestions(
    category,
    difficulty,
    isVisible
  );

  useEffect(() => {
    const newChoices: Choice = {};
    questions.forEach((qst: QuestionType, index: number) => {
      newChoices[index] = shuffleArray([
        qst.correctAnswer,
        ...qst.incorrectAnswers,
      ]);
    });
    setChoices(newChoices);
  }, [questions]);

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedChoices((prevSelectedChoices: string[]) => {
      const newSelectedChoices = [...selectedChoices];
      newSelectedChoices[index] === answer
        ? (newSelectedChoices[index] = "")
        : (newSelectedChoices[index] = answer);
      return newSelectedChoices;
    });
  };

  const onSubmit = () => {
    questions.forEach((qst: QuestionType, index: number) => {
      if (qst.correctAnswer === selectedChoices[index]) {
        score++;
      }
    });
    navigate("/result", {
      state: { selectedChoices, questions, score, choices },
    });
  };

  return (
    <>
      {questions.map((question: QuestionType, index: number) => {
        return (
          <Question
            key={question.question}
            question={question}
            selectedAnswers={selectedChoices}
            onAnswerSelected={onAnswerSelected}
            selectedQuestion={index}
            choices={choices[index]}
          />
        );
      })}
      {!selectedChoices.includes("") && (
        <>
          <button onClick={onSubmit} className="submit">
            Submit
          </button>
        </>
      )}
    </>
  );
};
