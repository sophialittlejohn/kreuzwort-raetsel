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
import { words } from "../random-words";
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
    if (isAdField) {
      return "#363434";
    } else if (isSolutionKey) {
      return "#90EE90";
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
          isAdField: false,
          questions: [],
          value: "",
        };
      }
    }
  });
};

export type Grid = ReturnType<typeof generateGridSkelleton>;

const checkIfAdField = (currentField, config) => {
  if (
    currentField.coordinates.x >= config.adFields.XRange.start &&
    currentField.coordinates.x <= config.adFields.XRange.end &&
    currentField.coordinates.y >= config.adFields.YRange.start &&
    currentField.coordinates.y <= config.adFields.YRange.end
  ) {
    return (currentField.isAdField = true);
  }
};

const getWordByLength = (charCount) => {
  return words.find((word) => word.length === charCount);
};
console.log("➜ ~ getWordByLength", getWordByLength(2));

const placeConfigInGridLayout = (grid: Grid, config: Record<string, any>) => {
  config.fields.forEach((configField) => {
    grid.forEach((currentField) => {
      // console.log("➜ ~ currentField", currentField);
      // black out add fields
      currentField.isAdField = checkIfAdField(currentField, config);
      if (
        currentField.coordinates.x === configField.question.position.x &&
        currentField.coordinates.y === configField.question.position.y
      ) {
        // add back if statement multuple questions in one cell
        currentField.isQuestionfield = true;
        currentField.questions.push({
          id: configField.id,
          value: "?",
          questionDirection: configField.question.direction,
          anwserLength: configField.answer.charCount,
          answer: getWordByLength(configField.answer.charCount), // get random word with correct length here
        });
      }
    });
  });

  grid.forEach((configCell) => {
    if (configCell.questions[0]?.questionDirection === "down") {
      const { answer } = configCell.questions[0];
      const startCoordinates = configCell.coordinates;
      // find start cell in grid
      const field = grid.find((gridCell) => {
        return (
          JSON.stringify(gridCell.coordinates) ===
          JSON.stringify(startCoordinates)
        );
      });
      [...answer].forEach((letter, index) => {
        // replace value in grid with y+n
        const smt = grid.find((gridCell) => {
          return (
            JSON.stringify(gridCell.coordinates) ===
            JSON.stringify({
              x: startCoordinates.x,
              y: startCoordinates.y + index + 1,
            })
          );
        });
        smt.value = letter;
        console.log("➜ ~ smt", smt);
      });
      // question coord  y++ 3
      // get grid cooridantes for each letter
      // write value to field
    }
  });
};

const enhanceGridSkelleton = (grid: Grid): Grid => {
  placeConfigInGridLayout(grid, crosswordConfig);
  return grid;
};

export default function Home() {
  const skeleton = generateGridSkelleton();
  const grid = enhanceGridSkelleton(skeleton);
  const [gridState, setGridState] = useState(grid);
  const [shouldDisplayInfo, toggleCellInfo] = useState(false);

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
            // console.log("➜ ~ cell", cell);
            const isSolutionKey = false;

            // if (
            //   cell.questions.length > 0 &&
            //   cell.questions[0].questionDirection === "down"
            // ) {
            // get word for cell.questions[0].answerLength
            // console.log("➜ ~ questionDirection", cell.questions[0]);
            // const answer =
            // }

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
                  isAdField={cell.isAdField}
                  disabled={cell.isQuestionfield || cell.isAdField}
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
                  value={
                    cell.questions.length
                      ? cell.questions.map((question) => {
                          return question.value;
                        })
                      : cell.value
                  }
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
 * fit random words in cells
 *
 * 1. on iteration: when question field found, check how many letter are need, selected word and place accordingly
 * 2. proceed by filling all horizontal words
 * 3. then try and merge in vertical words
 */

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
