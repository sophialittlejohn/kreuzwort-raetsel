import { Data } from "../types";

export const sortItemsDesc = (items: Data[]) => items.sort((a, b) => {
    var nameA = a.answer.length;
    var nameB = b.answer.length;
    if (nameA < nameB) {
        return 1;
    }
    if (nameA > nameB) {
        return -1;
    }
    return 0;
});