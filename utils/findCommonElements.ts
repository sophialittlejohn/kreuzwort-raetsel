export const findCommonElements = (arr1: Array<any>, arr2: Array<any>) => {
  return arr1.some((item) => arr2.includes(item));
};

export const getCommonLetters = (arr1: Array<any>, arr2: Array<any>) => {
  return arr1.filter((item) => arr2.includes(item));
};
