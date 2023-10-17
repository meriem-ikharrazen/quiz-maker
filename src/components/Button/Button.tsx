import "./Button.css";
type ButtonProps = {
  id: string;
  name: string;
  color?: string;
};
export const Button: React.FC<ButtonProps> = ({ id, name, color }) => {
  return (
    <button id={id} className="button">
      {name}
    </button>
  );
};
