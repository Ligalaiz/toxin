import { state } from '@src/internals/data/state';
import { renderState, renderValue, calculateVal, writeText } from './utils';

window.addEventListener('load', () => {
  renderState(state);
  const activeDropdown = ['dropdown-bedroom-2', 'dropdown-expand-2', 'dropdown-guest-2'];

  activeDropdown.forEach((activeClass) => {
    document.getElementById(activeClass).classList.add('active');
  });
});

document.addEventListener('click', ({ target }) => {
  if (target?.id.match('dropdown')) {
    const [_, type, id] = target.id.split('-');

    document.getElementById(`dropdown-${type}-${id}`).classList.toggle('active');
  }

  if (target?.id.match('btnDec') || target?.id.match('btnInc')) {
    const currentVal = calculateVal(target.id, state);
    const currentText = writeText(target.id, state);

    renderValue({ fieldName: 'field', id: target.id, val: currentVal });
    renderValue({ fieldName: 'text', id: target.id, val: currentText });
  }
});
