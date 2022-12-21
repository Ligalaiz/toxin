import { state } from '@src/internals/data/state';
import { renderState, renderValue, calculateVal, writeText, disabledBtn, reRenderDropdown } from './utils';

window.addEventListener('load', () => {
  renderState(state);
  const activeDropdown = ['dropdown-bedroom-1', 'dropdown-expand-2', 'dropdown-guest-1', 'dropdown-guest-2'];

  activeDropdown.forEach((activeClass) => {
    const el = document.getElementById(activeClass);
    if (el) el.classList.add('active');
  });
});

document.addEventListener('click', ({ target }) => {
  if (target?.closest('button')?.id?.match('dropdown')) {
    const [_, type, id] = target.id.split('-');

    document.getElementById(`dropdown-${type}-${id}`).classList.toggle('active');
  }

  if (target?.id.match('btnDec') || target?.id.match('btnInc')) {
    const currentVal = calculateVal(target.id, state);
    const currentText = writeText(target.id, state);
    disabledBtn(target.id, state);

    renderValue({ fieldName: 'field', id: target.id, val: currentVal });
    renderValue({ fieldName: 'text', id: target.id, val: currentText });
  }

  const clearDropdown = (id, state) => {
    const [_, type, itemId] = id.split('-');
    const currentState = state[type][itemId];
    currentState.forEach((item) => {
      item.count = 0;
    });
  };

  if (target?.id.match('btnClear')) {
    const [_, type] = target.id.split('-');

    if (type !== 'date') {
      clearDropdown(target.id, state);
      disabledBtn(target.id, state);
      reRenderDropdown(target.id, state);
    }
  }
});
