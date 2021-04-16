import { Data, MockData } from "../types";
import {
  findCommonElements,
  getCommonLetters,
} from "../utils/findCommonElements";

import Head from "next/head";
import { doesAnswerFitInGrid } from "../utils/doesAnswerFitInGrid";
import { mockData } from "../mockData";
import { sortItemsDesc } from "../utils/sortItemsDesc";
import styled from "styled-components";
// @ts-ignore
import styles from "../styles/Home.module.css";
import { useState } from "react";

export const COLUMNS_COUNT = 6;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${COLUMNS_COUNT}, 100px);
  grid-template-rows: repeat(${COLUMNS_COUNT}, 100px);
  border: 1px solid;
  box-sizing: content-box;
`;

const Cell = styled.div<{ size: number }>`
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => `${size}px`};
  padding: 4px;
  position: relative;
`;

const SmallInfos = styled.div`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  align-self: flex-start;
`;

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  position: absolute;
  border: none;
  font-size: ${({ size }) => `${size}px`};
  text-align: center;
`;

/**
 *
 * @param number the number of columns/rows
 * @returns coordinates of each cell in a quadratic plane
 */

const generateGridSkelleton = () => {
  const gridSkelleton = new Array(COLUMNS_COUNT * COLUMNS_COUNT).fill("X");
  const rows = new Array(COLUMNS_COUNT).fill("X");
  return gridSkelleton.map((_, index) => {
    //@ts-ignore
    for (let [rowIndex] of rows.entries()) {
      if (
        index < COLUMNS_COUNT ||
        (index >= COLUMNS_COUNT && index < COLUMNS_COUNT * (rowIndex + 1))
      ) {
        return {
          id: index + 1,
          value: "",
          coordinates: {
            x: (index % COLUMNS_COUNT) + 1,
            y: rowIndex + 1,
          },
        };
      }
    }
  });
};

export type Grid = ReturnType<typeof generateGridSkelleton>;

const placeFirstAnswerInGrid = (grid: Grid, items: Data[]) => {
  const answerOneWithQuestion = [
    items[0].question,
    ...items[0].answer.toUpperCase().split(""),
  ];
  // check if word fits in grid
  answerOneWithQuestion.forEach((letter, letterIndex) => {
    const replacementItem = grid.find(
      (gridItem) =>
        gridItem.coordinates.y === 4 &&
        gridItem.coordinates.x === letterIndex + 1
    );
    // this shouldn't work, potential source for bugs
    replacementItem.value = letter;
  });
};

const placeSecondAnswerInGrid = (
  grid: Grid,
  referenceGridItem: any,
  items: Data[]
) => {
  const answerTwoWithQuestion = [
    items[1].question,
    ...items[1].answer.toUpperCase().split(""),
  ];

  answerTwoWithQuestion.forEach((letter, letterIndex) => {
    const replacementItem = grid.find((gridItem) => {
      return (
        gridItem.coordinates.y === letterIndex + 1 &&
        gridItem.coordinates.x === referenceGridItem.coordinates.x
      );
    });

    // this shouldn't work, potential source for bugs
    replacementItem.value = letter;
  });
};

const enhanceGridSkelleton = (grid: Grid, unsortedItems: Data[]): Grid => {
  // sort answers by length before processing data
  const items = sortItemsDesc(unsortedItems);
  const answerOneLetters = items[0].answer.toUpperCase().split("");
  const answerTwoWithQuestion = [
    items[1].question,
    ...items[1].answer.toUpperCase().split(""),
  ];

  placeFirstAnswerInGrid(grid, items);
  // find word with one letter in common with the letters in the first word
  const answerTwo = items.find((item, index) => {
    if (index !== 0) {
      return findCommonElements(
        item.answer.toUpperCase().split(""),
        answerOneLetters
      );
    }
  });

  // get letters than intersect
  const commonLetters = getCommonLetters(
    items[1].answer.toUpperCase().split(""),
    answerOneLetters
  );

  // get coordinates of items that intersect
  let intersectingItems: Grid = [];
  commonLetters.forEach((letter) => {
    grid.forEach((gridItem) => {
      if (gridItem.value === letter) {
        intersectingItems.push(gridItem);
      }
    });
  });

  const answerFits = doesAnswerFitInGrid(answerTwo.answer, intersectingItems);

  if (answerFits?.intersectingItem)
    placeSecondAnswerInGrid(grid, answerFits.intersectingItem, items);

  return grid;
};

export default function Home() {
  const skeleton = generateGridSkelleton();
  const grid = enhanceGridSkelleton(skeleton, mockData.data);

  const [gridState, setGridState] = useState(grid);

  const updateGridValue = (id: number, value: string) => {
    setGridState((prevGrid) =>
      prevGrid.map((gridItem) => {
        if (gridItem.id === id) {
          return {
            ...gridItem,
            value: value.toUpperCase(),
          };
        }
        return gridItem;
      })
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kreuzworträtsel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Kreuzworträtsel</h1>
        <Grid itemCount={COLUMNS_COUNT}>
          {gridState.map((cell, index) => {
            return (
              <Cell size={cell.value.length > 1 ? 16 : 32} key={index}>
                <SmallInfos>
                  id:{cell.id} | x:{cell.coordinates.x} y:{cell.coordinates.y}
                </SmallInfos>
                {/* <p >{cell.value}</p> */}
                {cell.value.length > 1 ? (
                  <p>{cell.value}</p>
                ) : (
                  <StyledInput
                    size={cell.value.length > 1 ? 16 : 32}
                    maxLength={1}
                    onChange={(e) => {
                      updateGridValue(cell.id, e.target.value);
                    }}
                    value={cell.value}
                  />
                )}
              </Cell>
            );
          })}
        </Grid>
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
