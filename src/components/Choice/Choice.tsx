import { useEffect, useState } from "react";
import "./Choice.css";

type ChoiceProps = {
  answer: string;
  index: number;
  action: (value: string) => void;
  selectedAnswers: string[];
  disabled?: boolean;
  correctAnswer: string;
  selected: boolean;
};
export const Choice: React.FC<ChoiceProps> = ({
  answer,
  index,
  action,
  selectedAnswers,
  disabled = false,
  correctAnswer,
  selected,
}) => {
  const [textColor, setTextColor] = useState<string>(
    selected ? "white" : "green"
  );
  const [backColor, setBackColor] = useState<string>(
    selected ? "green" : "white"
  );

  const handleClick = () => {
    setTextColor(selected ? "green" : "white");
    setBackColor(selected ? "white" : "green");
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
    } else {
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
        cursor: disabled === true ? "auto" : "pointer",
      }}
      onClick={handleClick}
      disabled={disabled}
    >
      {answer}
    </button>
  );
};
