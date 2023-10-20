import { useEffect, useState } from "react";
import "./Choice.css";

type ChoiceProps = {
  answer: string;
  action: (value: string) => void;
  selectedAnswers: string[];
  disabled?: boolean;
  correctAnswer: string;
  selected: boolean;
};
export const Choice: React.FC<ChoiceProps> = ({
  answer,
  action,
  selectedAnswers,
  disabled = false,
  correctAnswer,
  selected,
}) => {
  const [textColor, setTextColor] = useState<string>("green");
  const [backColor, setBackColor] = useState<string>("white");

  useEffect(() => {
    if (disabled === true) {
      if (selectedAnswers.includes(answer)) {
        setTextColor("white");
        setBackColor(answer === correctAnswer ? "green" : "red");
      } else {
        setTextColor(answer === correctAnswer ? "white" : "green");
        setBackColor(answer === correctAnswer ? "green" : "white");
      }
    } else {
      setBackColor(selected ? "green" : "white");
      setTextColor(selected ? "white" : "green");
    }
  }, [disabled, answer, correctAnswer, selectedAnswers, selected]);

  return (
    <button
      key={answer}
      className="answer"
      style={{
        backgroundColor: backColor,
        borderColor: textColor,
        color: textColor,
        cursor: disabled === true ? "auto" : "pointer",
      }}
      onClick={() => action(answer)}
      disabled={disabled}
    >
      {answer}
    </button>
  );
};
