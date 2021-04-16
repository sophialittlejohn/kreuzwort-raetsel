import { COLUMNS_COUNT, Grid } from "../pages";

export const doesAnswerFitInGrid = (answer: string, intersectingItems: Grid) => {
    // find index of LIC (letter in common)
    const indexLIC = answer.toUpperCase().split('').findIndex(letter => letter === intersectingItems[0].value)
    const preLIC = answer.slice(0, indexLIC);
    const postLIC = answer.slice(indexLIC + 1);

    // Does first half of word fit? --> preLIC.length + 1 to reserve one cell for the question
    const firstHalfFits = (intersectingItems[0].coordinates.y - (preLIC.length + 1)) > 0;
    console.log('does it fit before?', firstHalfFits)
    // Does second half of word fit?
    const secondHalfFits = intersectingItems[0].coordinates.y - postLIC.length <= COLUMNS_COUNT
    console.log('does it fit before?', secondHalfFits)

    // TODO: make sure there's no letter of another word at the end secondHalf, if there is the word doesn't fit MANGOZ ⚡️

    return firstHalfFits && secondHalfFits
        ? { indexLIC, preLIC, postLIC, intersectingItem: intersectingItems[0] }
        : { intersectingItem: undefined }
}