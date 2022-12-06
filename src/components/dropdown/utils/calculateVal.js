export { getDropdownCount } from './getDropdownCount';
export { setDropdownCount } from './setDropdownCount';

const calculateVal = (id, state) => {
  const [calcType, type, itemId, itemInd] = id.split('-');
  let currentCount = getDropdownCount(type, itemId, itemInd, state);

  if (calcType === 'btnDec' && currentCount > 0) {
    currentCount -= 1;
    setDropdownCount(type, itemId, itemInd, currentCount);
    return currentCount;
  }

  if (calcType === 'btnInc') {
    currentCount += 1;
    setDropdownCount(type, itemId, itemInd, currentCount);
    return currentCount;
  }

  return currentCount;
};

export { calculateVal}
