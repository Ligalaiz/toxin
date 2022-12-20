import { calcMonth } from './utils/index';
import { months, weekDays } from './internals/index';
import { RenderDatePicker } from './date-picker-render';

class Datepicker {
  constructor(id, type) {
    this.renderObj = new RenderDatePicker(id);
    this.blockYear = document.getElementById(`blockYear-${id}`);
    this.blockWeek = document.getElementById(`blockWeek-${id}`);
    this.blockMonth = document.getElementById(`blockMonth-${id}`);
    this.blockDays = document.getElementById(`blockDays-${id}`);
    this.prevBtn = document.getElementById(`prevBtn-${id}`);
    this.textField = document.getElementById(`text-${id}`);
    this.textFieldSec = document.getElementById(`text-${id.split('-')[0]}-${+id.split('-')[1] + 1}`);
    this.clearBtn = document.getElementById(`btnClear-${id}`);
    this.acceptBtn = document.getElementById(`btnAccept-${id}`);
    this.currentDate = new Date();
    this.weekDays = weekDays;
    this.monthDays = null;
    this.months = months;
    this.pickerType = type;
    this.focus = null;
    this.from = null;
    this.id = id;
    this.to = null;
  }

  changeMonth(sign = 'inc') {
    if (sign === 'inc') this.currentDate = calcMonth(this.currentDate);
    if (sign === 'dec') this.currentDate = calcMonth(this.currentDate, 'dec');
    this.render();
    this.renderObj.renderPickDate.call(this);
  }

  pickDate(target) {
    const daysNode = document.querySelectorAll(`[data-${this.id}]`);
    const {
      dataset: { [`${this.id}`]: pickedDate },
    } = target.closest('.block-days__item');

    if (pickedDate !== 'disabled') {
      if (!this.from) {
        daysNode.forEach((item) => {
          item.classList.remove('range-date-picker');
        });
        this.from = pickedDate;
        target.closest('.block-days__item').classList.add('block-days__item--from');

        this.clearBtn.disabled = false;
        this.acceptBtn.disabled = false;
      } else if (Date.parse(pickedDate) > Date.parse(this.from) && !this.to) {
        this.to = pickedDate;
        target.closest('.block-days__item').classList.add('block-days__item--to');
        daysNode.forEach((item) => {
          const {
            dataset: { [`${this.id}`]: date },
          } = item;

          if (Date.parse(date) > Date.parse(this.from) && Date.parse(date) < Date.parse(this.to))
            item.classList.add('range-date-picker');
        });
      }
    }
  }

  clearPickDate() {
    this.from = null;
    this.to = null;
    this.clearBtn.disabled = true;
    this.acceptBtn.disabled = true;
    this.renderObj.renderDays.call(this);
    this.renderObj.renderCurrentDate.call(this);
  }

  acceptPickDate() {
    this.renderObj.renderCurrentDate.call(this);
    document.getElementById(`dropdown-${this.id}`).classList.remove('active');
  }

  static renderTemplate(id) {
    RenderDatePicker.renderTemplate(id);
  }

  render() {
    this.renderObj.renderYear.call(this);
    this.renderObj.renderMonths.call(this);
    this.renderObj.renderWeek.call(this);
    this.renderObj.renderDays.call(this);
    this.renderObj.renderPickDate.call(this);
    this.renderObj.renderCurrentDate.call(this);
  }
}

window.addEventListener('load', () => {
  if (document.querySelectorAll('[id^=pickerWrap]')) {
    const datePickersParent = document.querySelectorAll('[id^=pickerWrap]');
    datePickersParent.forEach((item) => {
      Datepicker.renderTemplate(item.id);

      const idArr = item.id.split('-');
      const currentId = `${idArr[1]}-${idArr[2]}`;

      const datepicker = new Datepicker(currentId, `${idArr[3]}`);
      datepicker.render();

      document.addEventListener('click', ({ target }) => {
        if (target.id === `prevBtn-${currentId}`) datepicker.changeMonth('dec');
        if (target.id === `nextBtn-${currentId}`) datepicker.changeMonth();
        if (target.id === `btnClear-${currentId}`) datepicker.clearPickDate();
        if (target.id === `btnAccept-${currentId}`) datepicker.acceptPickDate();
        if (target.closest(`[data-${currentId}]`)) datepicker.pickDate(target);
      });
    });
  }
});
