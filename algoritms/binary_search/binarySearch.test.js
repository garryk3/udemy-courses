import { expect, it } from "bun:test";
import { binarySearch } from "./binarySearch";

const sortedList = [1, 2, 3, 4, 5];

it('should return EMPTY_CODE when maxIteration is reached', () => {
    const item = 6;
    const start = 0;
    const finish = sortedList.length - 1;
    const maxIteration = 3;
    const result = binarySearch({ sortedList, item, start, finish, maxIteration });
    expect(result).toBe(-1);
  }
);

it('should return the index of the item in the middle of the sortedList', () => {
    const item = 3;
    const result = binarySearch({ sortedList, item, });
    expect(result).toBe(2);
  }
);

it('should return the index of the item in the start of the sortedList', () => {
    const item = 1;
    const result = binarySearch({ sortedList, item, });
    expect(result).toBe(0);
  }
);

it('should return the index of the item in the finish of the sortedList', () => {
    const item = 5;
    const result = binarySearch({ sortedList, item, });
    expect(result).toBe(4);
  }
);

it('empty list', () => {
    const item = 3;
    const result = binarySearch({ sortedList: [], item, maxIteration: 10});
    expect(result).toBe(-1);
  }
);

it('one item list', () => {
    const item = 3;
    const result = binarySearch({ sortedList: [1], item, maxIteration: 10});
    expect(result).toBe(0);
  }
);