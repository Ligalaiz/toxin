import { formatVal } from './utils/formatVal.utils';
import { templateStr } from './internals/templateStr.internals';

class MultipleRange {
  constructor() {
    this.fromField = document.getElementById('fromField');
    this.fromRange = document.getElementById('fromRange');
    this.toField = document.getElementById('toField');
    this.toRange = document.getElementById('toRange');
    this.thumbLeft = document.getElementById('thumbLeft');
    this.thumbRight = document.getElementById('thumbRight');
    this.range = document.getElementById('range');
  }
  static renderTemplate(parent = 'app') {
    const template = templateStr;
    const parentNode = document.getElementById(parent);

    if (parentNode) parentNode.innerHTML = template;
  }
  setFromInput = () => {
    const min = parseInt(this.fromRange.min, 10);
    const max = parseInt(this.fromRange.max, 10);

    this.fromRange.value = Math.min(parseInt(this.fromRange.value, 10), parseInt(this.toRange.value, 10));

    const percent = ((this.fromRange.value - min) / (max - min)) * 100;

    this.thumbLeft.style.left = `${percent}%`;
    this.range.style.left = `${percent}%`;
    this.fromField.textContent = `${formatVal(this.fromRange.value)}₽`;
  };

  setToInput = () => {
    const min = parseInt(this.toRange.min, 10);
    const max = parseInt(this.toRange.max, 10);

    this.toRange.value = Math.max(parseInt(this.toRange.value, 10), parseInt(this.fromRange.value, 10));

    const percent = ((this.toRange.value - min) / (max - min)) * 100;

    this.thumbRight.style.right = `${100 - percent}%`;
    this.range.style.right = `${100 - percent}%`;
    this.toField.textContent = `${formatVal(this.toRange.value)}₽`;
  };
}

window.addEventListener('load', () => {
  if (document.getElementById('rangeWrap')) {
    MultipleRange.renderTemplate('rangeWrap');
    const multipleRange = new MultipleRange();

    multipleRange.setFromInput();
    multipleRange.setToInput();

    document.getElementById('fromRange').addEventListener('input', multipleRange.setFromInput);
    document.getElementById('toRange').addEventListener('input', multipleRange.setToInput);
  }
});
