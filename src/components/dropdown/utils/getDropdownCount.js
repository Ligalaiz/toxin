import { initialState } from '@src/internals/data/state';

const getDropdownCount = (type, id, ind, state) => {
  if (!state[type]?.[id]) {
    state[type][id] = [...initialState[type]];
    return 0;
  }

  return state[type]?.[id]?.[ind]?.count;
};

export { getDropdownCount };
