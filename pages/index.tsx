import Head from "next/head";
// @ts-ignore
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { mockData } from "../mockData";

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.itemCount}, 50px)`};
  grid-template-rows: ${(props) => `repeat(${props.itemCount}, 50px)`};
  border: 1px solid;
  box-sizing: content-box;
`;

const Cell = styled.div`
  border: solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const basicWrapperObject = {
  coordinates: {
    start: {
      x: 1,
      y: 1,
    },
    end: {
      x: 3,
      y: 1,
    },
    direction: "horizontal",
    value: "Piano",
  },
};

const basicCellObject = {
  coordinates: {
    x: 1,
    y: 1,
  },
  value: "E",
};

const generateGridSkelleton = (number: number) => {
  const gridSkelleton = new Array(number * number).fill("X");
  const rows = new Array(number).fill("X");
  return gridSkelleton.map((_elem, index) => {
    //@ts-ignore
    for (let [rowIndex] of rows.entries()) {
      if (
        index < number ||
        (index >= number && index < number * (rowIndex + 1))
      ) {
        return {
          coordinates: {
            x: (index % number) + 1,
            y: rowIndex + 1,
          },
          value: "X",
        };
      }
    }
  });
};

const testAnswer = mockData.data[0].answer.split("");
const testQuestion = mockData.data[0].question;
const gridSkelleton = generateGridSkelleton(10);
// const xxx = enhanceGridSkelleton(gridSkelleton, testAnswer, testQuestion);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kreuzworträtsel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Grid itemCount={10}>
          {gridSkelleton.map((cell, index) => {
            return <Cell key={index}>{cell.value}</Cell>;
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
