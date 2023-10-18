import { CSSProperties, useState } from "react";
import "./Button.css";
type ButtonProps = {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  action?: () => void;
  component?: string;
  ccsStyle?: CSSProperties;
  disabled?: boolean;
  onSelect?: (index: number, choice: string) => void;
  questionNumber?: number;
};
export const Button: React.FC<ButtonProps> = ({
  id,
  name,
  backgroundColor = "white",
  color = "green",
  action,
  component = "home",
  ccsStyle,
  disabled = false,
  onSelect,
  questionNumber,
}) => {
  const [textColor, setTextColor] = useState<string>(color);
  const [backColor, setBackColor] = useState<string>(backgroundColor);

  const handleClick = (action: any) => {
    if (component === "question") {
      console.log("here");
      let temp = textColor;
      setTextColor(backColor);
      setBackColor(temp);
    }
    action !== undefined && action();
    onSelect !== undefined &&
      questionNumber !== undefined &&
      onSelect(questionNumber, name);
  };
  return (
    <button
      id={id}
      className="button"
      style={{
        ...{
          backgroundColor: backColor,
          borderColor: textColor,
          color: textColor,
        },
        ...ccsStyle,
      }}
      onClick={() => handleClick(action)}
      key={id}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
