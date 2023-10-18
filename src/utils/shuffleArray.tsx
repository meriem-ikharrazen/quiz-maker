export function shuffleArray(
  correctAnswer: string,
  incorrectAnswers: string[]
) {
  const choices: string[] = [correctAnswer, ...incorrectAnswers];
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return choices;
}
