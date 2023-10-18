import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { DropDown } from "../../components/DropDown/DropDown";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { Category } from "../../interfaces/Category";
import { Quiz } from "../../components/Quiz/Quiz";
import "./Home.css";

export const Home = () => {
  const categories: Category[] = useFetchCategories();
  const difficulties: Category[] = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <div className="HomeContainer">
        <div className="HomeContainerTitle">Quiz Maker</div>
        <div className="DropDownContainer">
          <DropDown
            type="category"
            defaultOption="Select a category"
            id="categorySelect"
            list={categories}
            setSelectedItem={setSelectedCategory}
          />
          <DropDown
            type="difficulty"
            defaultOption="Select a difficulty"
            id="difficultySelect"
            list={difficulties}
            setSelectedItem={setSelectedDifficulty}
          />
          <Button
            id="createBtn"
            name="Create"
            backgroundColor="#00abe4"
            color="black"
            action={() => setIsVisible(true)}
          />
        </div>
        <div className="QuizContainer">
          <Quiz
            category={selectedCategory}
            difficulty={selectedDifficulty}
            isVisible={isVisible}
          />
        </div>
      </div>
    </>
  );
};
