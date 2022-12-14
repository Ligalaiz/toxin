import { state } from '@src/internals/data/state';

const setDropdownCount = (type, id, ind, count) => {
  const currentItem = state[type]?.[id];
  if (currentItem) {
    currentItem[ind].count = count;
    return true;
  }
  return false;
};

export { setDropdownCount };
