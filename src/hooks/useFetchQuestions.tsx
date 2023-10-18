import { useState, useEffect } from "react";
import { Question } from "../interfaces/Question";

type ResponseType = {
  category: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export function useFetchQuestions(
  category: string,
  difficulty: string,
  isVisible: boolean
) {
  const [data, setData] = useState<Question[]>([]);
  const url = `https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;

  useEffect(() => {
    if (isVisible) {
      fetch(url)
        .then((res) => res.json())
        .then((d) => {
          d.results.forEach((element: ResponseType, index: number) => {
            setData((prev: Question[]) => [
              ...prev,
              {
                id: index,
                question: element.question,
                correctAnswer: element.correct_answer,
                incorrectAnswers: element.incorrect_answers,
              },
            ]);
          });
        });
    }
  }, [url, isVisible]);

  return data;
}
