import { MockData } from "./types";

export const mockData: MockData = {
  title: "Puzzling",
  solutionKey: "Hi",
  data: [
    {
      id: 3,
      question: "Was fällt nicht Himmel?",
      answer: "Engel",
      direction: "vertical",
    },
    {
      id: 1,
      question: "Tropical fruit",
      answer: "Mango",
      direction: "horizontal",
    },
    {
      id: 2,
      question: "Was fällt auch vom Himmel?",
      answer: "Regen",
      direction: "horizontal",
    },
    {
      id: 0,
      question: "Beliebtes Instrument",
      answer: "Piano",
      direction: "horizontal",
    },
    { id: 4, question: "Rationale Zahl?", answer: "Pi", direction: "vertical" },
    // { id: 5, question: 'Wenn es regnet und die Sonne scheint', answer: 'Regenbogen', direction: 'vertical' },
    { id: 6, question: "Wintersport", answer: "Ski", direction: "horizontal" },
    // { id: 7, question: 'Weinregion in FR', answer: 'Bordeaux', direction: 'horizontal' },
  ],
};
