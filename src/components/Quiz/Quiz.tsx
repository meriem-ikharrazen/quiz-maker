import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { Question as QuestionType } from "../../interfaces/Question";
import { Question } from "../Question/Question";
import "./Quiz.css";
import { shuffleArray } from "../../utils/shuffleArray";

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
  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    new Array(5).fill("")
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  let score = 0;
  const navigate = useNavigate();

  const onAnswerSelected = (answer: string, index: number) => {
    setSelectedAnswer(answer);
    console.log(selectedAnswer);
    setSelectedChoices((prevSelectedChoices: string[]) => {
      const newSelectedChoices = [...selectedChoices];
      newSelectedChoices[index] === answer
        ? (newSelectedChoices[index] = "")
        : (newSelectedChoices[index] = answer);
      return newSelectedChoices;
    });
    console.log(selectedChoices);
  };

  const onSubmit = () => {
    questions.forEach((qst: QuestionType, index: number) => {
      if (qst.correctAnswer === selectedChoices[index]) {
        score++;
      }
    });
    setSelectedAnswer("");
    console.log("selectedItems ", selectedChoices);
    console.log("questions", questions);
    console.log("score", score);
    navigate("/result", { state: { selectedChoices, questions, score } });
  };

  return (
    <>
      <div className="quiz">
        {questions.map((question: QuestionType, index: number) => (
          <Question
            key={question.question}
            question={question}
            selectedAnswers={selectedChoices}
            onAnswerSelected={onAnswerSelected}
            selectedQuestion={index}
          />
        ))}
        {!selectedChoices.includes("") && (
          <>
            <button onClick={onSubmit} className="submit">
              Soumettre
            </button>
          </>
        )}
      </div>
    </>
  );
};
