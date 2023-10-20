import { useState, useEffect } from "react";
import { Category } from "../interfaces/Category";

const url = "https://opentdb.com/api_category.php";

export const useFetchCategories = (): Category[] => {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.trivia_categories);
      });
  }, []);

  return data;
};
