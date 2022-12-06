import { writeText } from './writeText';
import { renderValue } from './renderValue';

const renderState = (state) => {
  Object.keys(state).forEach((type) => {
    const currentType = state[type];

    Object.keys(currentType).forEach((dropdownId) => {
      if (type === 'expand') return;
      const tempId = `-${type}-${dropdownId}`;
      renderValue({ fieldName: 'text', id: tempId, val: writeText(tempId, state) });

      currentType[dropdownId].forEach((dropdownItem, dropdownInd) => {
        const val = dropdownItem.count;

        renderValue({ fieldName: 'field', id: `${tempId}-${dropdownInd}`, val });
      });
    });
  });
};

export { renderState };
