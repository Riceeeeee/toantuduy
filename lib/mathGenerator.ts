export type Difficulty = "de" | "trung-binh" | "kho";

export type Operation = "add" | "sub" | "mul" | "div" | "mix";

export type MathProblem = {
  question: string;
  answer: number;
};

function randomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRange(difficulty: Difficulty) {
  if (difficulty === "de") {
    return { min: 0, max: 10 };
  }
  if (difficulty === "trung-binh") {
    return { min: 0, max: 50 };
  }
  return { min: 0, max: 100 };
}

export function generateMathProblem(
  operation: Operation,
  difficulty: Difficulty
): MathProblem {
  const finalOperation =
    operation === "mix"
      ? (["add", "sub", "mul", "div"][
          randomInRange(0, 3)
        ] as Exclude<Operation, "mix">)
      : operation;

  const range = getRange(difficulty);

  if (finalOperation === "add") {
    const a = randomInRange(range.min, range.max);
    const b = randomInRange(range.min, range.max);
    return {
      question: `${a} + ${b} = ?`,
      answer: a + b,
    };
  }

  if (finalOperation === "sub") {
    const a = randomInRange(range.min, range.max);
    const b = randomInRange(range.min, range.max);
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    return {
      question: `${bigger} - ${smaller} = ?`,
      answer: bigger - smaller,
    };
  }

  if (finalOperation === "mul") {
    const max =
      difficulty === "de"
        ? 9
        : difficulty === "trung-binh"
        ? 12
        : 15;
    const a = randomInRange(0, max);
    const b = randomInRange(0, max);
    return {
      question: `${a} × ${b} = ?`,
      answer: a * b,
    };
  }

  const divisorMin = 1;
  const divisorMax =
    difficulty === "de"
      ? 10
      : difficulty === "trung-binh"
      ? 12
      : 15;
  const divisor = randomInRange(divisorMin, divisorMax);
  const quotient =
    difficulty === "de"
      ? randomInRange(0, 10)
      : difficulty === "trung-binh"
      ? randomInRange(0, 20)
      : randomInRange(0, 30);
  const dividend = divisor * quotient;

  return {
    question: `${dividend} ÷ ${divisor} = ?`,
    answer: quotient,
  };
}
