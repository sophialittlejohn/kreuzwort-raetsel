export const findCommonElements = (arr1, arr2) => {
    return arr1.some(item => arr2.includes(item))
}