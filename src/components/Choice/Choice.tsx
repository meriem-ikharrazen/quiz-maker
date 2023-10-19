import { useEffect, useState } from "react";
import "./Choice.css";

type ChoiceProps = {
  answer: string;
  index: number;
  action: (value: string) => void;
  selectedAnswers: string[];
  disabled?: boolean;
  correctAnswer: string;
};
export const Choice: React.FC<ChoiceProps> = ({
  answer,
  index,
  action,
  selectedAnswers,
  disabled = false,
  correctAnswer,
}) => {
  const [textColor, setTextColor] = useState<string>("green");
  const [backColor, setBackColor] = useState<string>("white");
  const handleClick = () => {
    if (selectedAnswers.includes(answer)) {
      setTextColor("green");
      setBackColor("white");
    } else {
      setTextColor("white");
      setBackColor("green");
    }
    action(answer);
  };

  useEffect(() => {
    if (disabled === true) {
      if (selectedAnswers.includes(answer)) {
        setTextColor("white");
        setBackColor(answer === correctAnswer ? "green" : "red");
      } else {
        setTextColor(answer === correctAnswer ? "white" : "green");
        setBackColor(answer === correctAnswer ? "green" : "white");
      }
    }
  }, [disabled, answer, correctAnswer, selectedAnswers]);
  return (
    <button
      key={answer}
      className="answer"
      style={{
        backgroundColor: backColor,
        borderColor: textColor,
        color: textColor,
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {answer}
    </button>
  );
};
