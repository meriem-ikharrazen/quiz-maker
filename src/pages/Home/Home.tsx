import { useState } from "react";
import { DropDown } from "../../components/DropDown/DropDown";
import { Quiz } from "../../components/Quiz/Quiz";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { Category } from "../../interfaces/Category";
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
          <button
            onClick={() => setIsVisible(true)}
            className="createQuiz"
            id="createBtn"
          >
            Create
          </button>
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
