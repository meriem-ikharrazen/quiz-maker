import { CSSProperties, useState } from "react";
import "./Button.css";
type ButtonProps = {
  id: string;
  name: string;
  color?: string;
  backgroundColor?: string;
  action?: () => void;
  component?: string;
  setCountClickedButtons?: () => void;
  ccsStyle?: CSSProperties;
  disabled?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
  id,
  name,
  backgroundColor = "white",
  color = "green",
  action,
  component = "home",
  setCountClickedButtons,
  ccsStyle,
  disabled = false,
}) => {
  const [textColor, setTextColor] = useState<string>(color);
  const [backColor, setBackColor] = useState<string>(backgroundColor);
  //const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = (action: any) => {
    if (component === "question") {
      let temp = textColor;
      setTextColor(backColor);
      setBackColor(temp);
    }
    action !== undefined && action();
    //setIsClicked((prev: boolean) => !prev);
    setCountClickedButtons !== undefined && setCountClickedButtons();
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
