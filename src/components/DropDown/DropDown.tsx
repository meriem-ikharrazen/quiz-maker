import { Category } from "../../interfaces/Category";
import "./DropDown.css";

type DropDownProps = {
  defaultOption: string;
  id: string;
  list: Category[];
  setSelectedItem: (value: string) => void;
  type: string;
};
export const DropDown: React.FC<DropDownProps> = ({
  defaultOption,
  id,
  list,
  setSelectedItem,
  type,
}) => {
  const handleChange = (event: any) => {
    if (type === "difficulty") {
      switch (event.target.value) {
        case 1:
          setSelectedItem("easy");
          break;
        case 2:
          setSelectedItem("medium");
          break;
        case 3:
          setSelectedItem("hard");
          break;
      }
    } else {
      setSelectedItem(event.target.value);
    }
  };

  return (
    <>
      <div className="DropDown" id={id}>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{
            padding: "12px 30px",
            borderRadius: "2cap",
          }}
          onChange={handleChange}
        >
          <option key="all_categories" value="all">
            {defaultOption}
          </option>
          {list.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
