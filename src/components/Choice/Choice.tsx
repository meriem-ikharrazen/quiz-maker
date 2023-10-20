import { useEffect, useState } from "react";
import "./Choice.css";
import { decodeHtmlEntity } from "../../utils/decodeHtmlEntity";

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
  const [isHovered, setIsHovered] = useState(false);

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
      if (isHovered) {
        setBackColor("green");
        setTextColor("white");
      } else {
        setBackColor(selected ? "green" : "white");
        setTextColor(selected ? "white" : "green");
      }
    }
  }, [disabled, answer, correctAnswer, selectedAnswers, selected, isHovered]);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => action(answer)}
      disabled={disabled}
    >
      {decodeHtmlEntity(answer)}
    </button>
  );
};
