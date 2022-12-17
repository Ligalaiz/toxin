import { writeText } from './writeText';
import { renderValue } from './renderValue';
import { disabledBtn } from './disabledBtn';

const reRenderDropdown = (id, state) => {
  const [_, type, itemId] = id.split('-');
  const currentState = state[type][itemId];

  if (type === 'expand') return;

  renderValue({ fieldName: 'text', id, val: writeText(id, state) });

  currentState.forEach((dropdownItem, dropdownInd) => {
    if (type === 'guest') disabledBtn(id, state);
    const val = dropdownItem.count;

    renderValue({ fieldName: 'field', id: `${id}-${dropdownInd}`, val });
  });
};

export { reRenderDropdown };
