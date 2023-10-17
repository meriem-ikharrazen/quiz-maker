import { Category } from "../../interfaces/Category";
import "./DropDown.css";

type DropDownProps = {
  defaultOption: string;
  id: string;
  list: Category[];
};
export const DropDown: React.FC<DropDownProps> = ({
  defaultOption,
  id,
  list,
}) => {
  const handleChange = (event: any) => {
    console.log(event.target.content);
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
