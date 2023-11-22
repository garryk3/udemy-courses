// @ts-check
const EMPTY_CODE = -1;

export const binarySearch = ({sortedList, item, start, finish, iteration = 1, maxIteration}) => {
    if(maxIteration && (iteration >= maxIteration) || item === undefined) {
        return EMPTY_CODE;
    }
    if(sortedList.length === 1) {
        return 0;
    }
    const startIndex = start ?? 0;
    const finishIndex = finish ?? sortedList.length - 1;
    const diff = finishIndex - startIndex;
    if(diff === 1) {
        if(sortedList[startIndex] === item) {
            return startIndex;
        }
        if(sortedList[finishIndex] === item) {
            return finishIndex;
        }
    }
    const halfIndex = Math.ceil(diff/ 2) + startIndex;
    const halfIndexItem = sortedList[halfIndex];

    if(halfIndexItem === item) {
        return halfIndex;
    }

    return binarySearch({
        sortedList,
        item,
        start: halfIndexItem > item ? startIndex : halfIndex,
        finish: halfIndexItem > item ? halfIndex : finishIndex,
        iteration: iteration + 1,
        maxIteration
    });
}
