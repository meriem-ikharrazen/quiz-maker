import { Question } from "../Question/Question";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { Question as QuestionType } from "../../interfaces/Question";
import { useState } from "react";
import "./Quiz.css";
import { Link } from "react-router-dom";

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
  const [selectedChoices, setSelectedChoices] = useState<string[]>(
    new Array(5).fill("")
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);

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
        setScore((prev: number) => prev + 1);
      }
    });
    setSelectedAnswer("");
    console.log("selectedItems ", selectedChoices);
    console.log("questions", questions);
    console.log("score", score);
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
            <Link to="/result" state={{ selectedChoices, questions, score }}>
              <button onClick={onSubmit} className="submit">
                Soumettre
              </button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};
