import { Button } from "../../components/Button/Button";
import { DropDown } from "../../components/DropDown/DropDown";
import { useFetch } from "../../hooks/useFetchCategories";
import { Category } from "../../interfaces/Category";
import "./Home.css";

export const Home = () => {
  const categories: Category[] = useFetch();
  const difficulties: Category[] = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
  ];
  return (
    <>
      <div className="DropDownContainer">
        <DropDown
          defaultOption="Select a category"
          id="categorySelect"
          list={categories}
        />
        <DropDown
          defaultOption="Select a difficulty"
          id="difficultySelect"
          list={difficulties}
        />
        <Button id="createBtn" name="Create" />
      </div>
    </>
  );
};
