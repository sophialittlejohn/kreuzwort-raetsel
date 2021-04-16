import { Data, MockData } from "../types";

import Head from "next/head";
import { findCommonElements } from "../utils/findCommonElements";
import { mockData } from "../mockData";
import styled from "styled-components";
// @ts-ignore
import styles from "../styles/Home.module.css";

const COLUMNS_COUNT = 6;

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

type Grid = ReturnType<typeof generateGridSkelleton>;

const placeFirstAnswerInGrid = (grid: Grid, items: Data[]) => {
  const answerOneWithQuestion = [items[0].question, ...items[0].answer.toUpperCase().split('')]
  answerOneWithQuestion.forEach((letter, letterIndex) => {
    const replacementItem = grid.find(gridItem =>
      (gridItem.coordinates.y === 3 && gridItem.coordinates.x === letterIndex + 1))
    replacementItem.value = letter
  })
}

const enhanceGridSkelleton = (grid: Grid, items: Data[]): Grid => {
  const answerOneLetters = items[0].answer.toUpperCase().split('')
  placeFirstAnswerInGrid(grid, items)
  // find word with one letter in common with the letters in the first word
  const answerTwo = items.find((item, index) => {
    if (index !== 0) {
      return findCommonElements(item.answer.toUpperCase().split(''), answerOneLetters)
    }
  })
  console.log("➜ ~ answerTwo", answerTwo)
  // find index of LIC (letter in common)
  // find lengths of:
  //  - preLIC string
  //  - postLIC string
  // find LIC's y-coord in grid and make sure difference in gridItem.y - preLIC > 0 and gridItem.y + postLIC < COLUMNS_COUNT
  // if yes, place answer there similarly to placeFirstAnswerInGrid except using x-coord
  // if no, look for another letter in common or move on to next answer

  return grid
}

export default function Home() {
  const skeleton = generateGridSkelleton();
  const grid = enhanceGridSkelleton(skeleton, mockData.data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Kreuzworträtsel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Kreuzworträtsel</h1>
        <Grid itemCount={COLUMNS_COUNT}>
          {grid.map((cell, index) => {
            return <Cell size={cell.value.length > 1 ? 16 : 32} key={index}>{cell.value}</Cell>;
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
