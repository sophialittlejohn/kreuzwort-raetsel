import { Data, MockData } from "../types";
import {
  // findCommonElements,
  getCommonLetters,
} from "../utils/findCommonElements";

import Head from "next/head";
// import { doesAnswerFitInGrid } from "../utils/doesAnswerFitInGrid";
import { mockData } from "../mockData";
import { crosswordConfig } from "../crossword_config";
import { sortItemsDesc } from "../utils/sortItemsDesc";
import styled from "styled-components";
// @ts-ignore
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { config } from "process";

export const COLUMNS_COUNT = 13;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${COLUMNS_COUNT}, 50px);
  grid-template-rows: repeat(${18}, 50px);
  border: 1px solid;
  box-sizing: content-box;
`;

const Cell = styled.div<{
  size: number;
  isSolutionKey: boolean;
  isQuestionField: boolean;
}>`
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => `${size}px`};
  padding: 4px;
  position: relative;
`;

const SmallInfos = styled.div<{ shouldDisplayInfo: boolean }>`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.5);
  align-self: flex-start;
  z-index: ${({ shouldDisplayInfo }) => (shouldDisplayInfo ? 1 : 0)};
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  border: none;
  font-size: ${({ size }) => `${size}px`};
  text-align: center;
  background: ${({ isSolutionKey, isQuestionField, isAdField }) => {
    if (isSolutionKey) {
      return "#c1c1c1";
    } else if (isAdField) {
      return "#0000 ";
    } else if (isQuestionField) {
      return "#F8F400 ";
    } else return "transparent";
  }};
`;

const QuestionDirectionArrow = styled.div`
  content: "&#9658";
`;

const SolutionChar = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 1px solid;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const SolutionWordWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`;

/**
 *
 * @param number the number of columns/rows
 * @returns coordinates of each cell in a quadratic plane
 */

const generateGridSkelleton = () => {
  const gridSkelleton = new Array(COLUMNS_COUNT * 18).fill("X");
  const rows = new Array(18).fill("X");
  return gridSkelleton.map((_, index) => {
    //@ts-ignore
    for (let [rowIndex] of rows.entries()) {
      if (
        index < COLUMNS_COUNT ||
        (index >= COLUMNS_COUNT && index < COLUMNS_COUNT * (rowIndex + 1))
      ) {
        return {
          coordinates: {
            x: index % COLUMNS_COUNT,
            y: rowIndex,
          },
          amountOfQuesitons: 0,
          isQuestionfield: false,
          questions: [],
        };
      }
    }
  });
};

export type Grid = ReturnType<typeof generateGridSkelleton>;

const placeQuestionFields = (grid: Grid, config: Record<string, any>) => {
  console.log("grid", grid);

  config.map((field) => {
    console.log("placeQuestionFields", field);
    const questionField = grid.find((gridItem) => {
      return (
        gridItem.coordinates.x === field.question.position.x &&
        gridItem.coordinates.y === field.question.position.y
      );
    });

    questionField.amountOfQuesitons++;
    if (questionField.amountOfQuesitons > 1) {
      const newQuestion = {
        id: field.id,
        value: "?",
        questionDirection: field.question.direction,
      };
      questionField.questions.push(newQuestion);
    } else {
      questionField.isQuestionfield = true;
      questionField.questions.push({
        id: field.id,
        value: "?",
        questionDirection: field.question.direction,
      });
    }
  });
};

// const placeFirstAnswerInGrid = (grid: Grid, items: Data[]) => {
//   const answerOneWithQuestion = [
//     items[0].question,
//     ...items[0].answer.toUpperCase().split(""),
//   ];
//   // check if word fits in grid
//   answerOneWithQuestion.forEach((letter, letterIndex) => {
//     const replacementItem = grid.find(
//       (gridItem) =>
//         gridItem.coordinates.y === 4 &&
//         gridItem.coordinates.x === letterIndex + 1
//     );
//     // this shouldn't work, potential source for bugs
//     replacementItem.value = letter;
//   });
// };

// const placeSecondAnswerInGrid = (
//   grid: Grid,
//   referenceGridItem: any,
//   items: Data[]
// ) => {
//   const answerTwoWithQuestion = [
//     items[1].question,
//     ...items[1].answer.toUpperCase().split(""),
//   ];

//   answerTwoWithQuestion.forEach((letter, letterIndex) => {
//     const replacementItem = grid.find((gridItem) => {
//       return (
//         gridItem.coordinates.y === letterIndex + 1 &&
//         gridItem.coordinates.x === referenceGridItem.coordinates.x
//       );
//     });

//     // this shouldn't work, potential source for bugs
//     replacementItem.value = letter;
//   });
// };

const placeAdsInGrid = (grid: Grid, config: any) => {
  console.log("placeAdsInGrid - config", config);
};

const enhanceGridSkelleton = (grid: Grid, unsortedItems: Data[]): Grid => {
  // sort answers by length before processing data
  const items = sortItemsDesc(unsortedItems);
  const answerOneLetters = items[0].answer.toUpperCase().split("");
  const answerTwoWithQuestion = [
    items[1].question,
    ...items[1].answer.toUpperCase().split(""),
  ];

  // placeFirstAnswerInGrid(grid, items);
  // find word with one letter in common with the letters in the first word
  // const answerTwo = items.find((item, index) => {
  //   if (index !== 0) {
  //     return findCommonElements(
  //       item.answer.toUpperCase().split(""),
  //       answerOneLetters
  //     );
  //   }
  // });

  placeQuestionFields(grid, crosswordConfig.fields);

  // get letters than intersect
  const commonLetters = getCommonLetters(
    items[1].answer.toUpperCase().split(""),
    answerOneLetters
  );

  // get coordinates of items that intersect
  let intersectingItems: Grid = [];
  commonLetters.forEach((letter) => {
    grid.forEach((gridItem) => {
      if (gridItem.questions[0]?.value === letter) {
        intersectingItems.push(gridItem);
      }
    });
  });

  // const answerFits = doesAnswerFitInGrid(answerTwo.answer, intersectingItems);

  // if (answerFits?.intersectingItem)
  //   placeSecondAnswerInGrid(grid, answerFits.intersectingItem, items);

  return grid;
};

export default function Home() {
  const skeleton = generateGridSkelleton();
  const grid = enhanceGridSkelleton(skeleton, mockData.data);

  // const selectSolutionCells = () => {
  //   return grid.filter((gridItem) => {
  //     if (gridItem.id === 22 || gridItem.id === 33) {
  //       return gridItem;
  //     }
  //   });
  // };
  const [gridState, setGridState] = useState(grid);
  const [shouldDisplayInfo, toggleCellInfo] = useState(false);
  // const [solutionCells, setSolutionCells] = useState(selectSolutionCells());
  // console.log(solutionCells);

  // const updateGridValue = (id: number, value: string) => {
  //   setGridState((prevGrid) =>
  //     prevGrid.map((gridItem) => {
  //       if (gridItem.id === id) {
  //         return {
  //           ...gridItem,
  //           value: value.toUpperCase(),
  //         };
  //       }
  //       return gridItem;
  //     })
  //   );
  // };

  // const updateSolutionValue = (id: number, value: string) => {
  //   setSolutionCells((prevGrid) =>
  //     prevGrid.map((gridItem) => {
  //       if (gridItem.id === id) {
  //         return {
  //           ...gridItem,
  //           value: value.toUpperCase(),
  //         };
  //       }
  //       return gridItem;
  //     })
  //   );
  // };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kreuzworträtsel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Kreuzworträtsel</h1>
        <h3>Lösungswort</h3>
        {/* <SolutionWordWrapper>
          {solutionCells.map((char) => {
            return <SolutionChar>{char.value}</SolutionChar>;
          })}
        </SolutionWordWrapper> */}
        <Grid itemCount={COLUMNS_COUNT}>
          {gridState.map((cell, index) => {
            const isSolutionKey = false;
            const isAdField = false;

            return (
              <Cell
                size={cell.questions[0]?.value.length > 1 ? 4 : 8}
                key={index}
              >
                <SmallInfos shouldDisplayInfo={true}>
                  x:{cell.coordinates.x} y:{cell.coordinates.y}
                </SmallInfos>
                <StyledInput
                  isSolutionKey={isSolutionKey}
                  isQuestionField={cell.isQuestionfield}
                  isAdField={isAdField}
                  disabled={cell.isQuestionfield}
                  size={cell.questions[0]?.value.length > 1 ? 16 : 32}
                  maxLength={1}
                  onChange={(e) => {
                    //   if (isQuestionField) {
                    //     console.log("updateQuestionValue");
                    //     // updateSolutionValue(cell.id, e.target.value);
                    //   }
                    //   console.log("updateGridValue");
                    //   // updateGridValue(cell.id, e.target.value);
                  }}
                  value={cell.questions.map((question) => {
                    console.log("heere", question);
                    return question.value;
                  })}
                />
              </Cell>
            );
          })}
        </Grid>
        <button onClick={() => toggleCellInfo(!shouldDisplayInfo)}>
          toggle cell info
        </button>
      </main>
    </div>
  );
}

/**
 * Step 0:
 *   - install styled-components for easier dynamic styles ✅
 *
 * Step 1:
 *   - render a grid with css grid ✅
 *   - predefine number of columns and rows, answers must fit (figure out max length per word)
 *   - place one answer in grid including direction and question cell as example
 *
 * Step 2 Place words in grid:
 *   - try this algo https://stackoverflow.com/questions/943113/algorithm-to-generate-a-crossword
 *
 * Step 3:
 *   - convert letters in grid to inputs
 *   - validate input
 *   - auto tab to next input in correct direction
 *
 * Step 4:
 *   - implement Lösungswort
 *
 * Additional steps:
 *   - make space for ads (image for now 😉)
 *
 */

//  const basicWrapperObject = {
//   coordinates: {
//     start: {
//       x: 1,
//       y: 1,
//     },
//     end: {
//       x: 3,
//       y: 1,
//     },
//     direction: "horizontal",
//     value: "Piano",
//   },
// };

// const basicCellObject = {
//   coordinates: {
//     x: 1,
//     y: 1,
//   },
//   value: "E",
// };
