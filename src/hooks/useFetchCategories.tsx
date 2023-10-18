import { useState, useEffect } from "react";
import { Category } from "../interfaces/Category";

const url = "https://opentdb.com/api_category.php";

export const useFetchCategories = (): Category[] => {
  const [data, setData] = useState<Category[]>([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        setData(d.trivia_categories);
        //setLoading(false);
      });
  }, []);

  return data;
};
