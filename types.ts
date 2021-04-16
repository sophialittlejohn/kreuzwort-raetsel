export type Data = {
  id: number;
  question: string;
  answer: string;
  direction: "vertical" | "horizontal";
};

export type MockData = {
  title: string;
  solutionKey: string;
  data: Data[];
};
