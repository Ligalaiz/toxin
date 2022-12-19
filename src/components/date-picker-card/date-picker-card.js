import {
  getDate,
  calcMonth,
  createElem,
  getCurrentMonthArr,
  getPrevOffsetDays,
  getPastOffsetDays,
} from './utils/index';
import { templateStr, months, weekDays } from './internals/index';

class Datepicker {
  constructor(id, type) {
    this.blockYear = document.getElementById(`blockYear-${id}`);
    this.blockWeek = document.getElementById(`blockWeek-${id}`);
    this.blockMonth = document.getElementById(`blockMonth-${id}`);
    this.blockDays = document.getElementById(`blockDays-${id}`);
    this.prevBtn = document.getElementById(`prevBtn-${id}`);
    this.clearBtn = document.getElementById(`btnClear-${id}`);
    this.acceptBtn = document.getElementById(`btnAccept-${id}`);
    this.textField = document.getElementById(`text-${id}`);
    this.textFieldSec = document.getElementById(`text-${id.split('-')[0]}-${+id.split('-')[1] + 1}`);
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

  static renderTemplate(parentId = 'app') {
    let currentId = 'app';

    if (parentId !== 'app') {
      const idArr = parentId.split('-');
      currentId = `${idArr[1]}-${idArr[2]}`;
    }

    const template = templateStr(currentId);
    const parentNode = document.getElementById(parentId);

    if (parentNode) parentNode.innerHTML = template;
  }

  renderYear() {
    const { year: currentYear, month: currentMonth } = getDate(this.currentDate);
    const { year, month } = getDate(new Date());

    if (year === currentYear && month === currentMonth) {
      this.prevBtn.disabled = true;
    } else {
      this.prevBtn.disabled = false;
    }

    this.blockYear.innerHTML = '';
    createElem('div', 'select-year__item', `${currentYear}`, this.blockYear, ['value', currentYear]);
  }

  renderMonths() {
    const currentMonth = getDate(this.currentDate).month;

    this.blockMonth.innerHTML = '';
    createElem('div', 'select-month__item', this.months[currentMonth], this.blockMonth, [
      'value',
      this.months[currentMonth],
    ]);
  }

  renderWeek() {
    this.blockWeek.innerHTML = '';

    for (let i = 0; i < this.weekDays.length; i += 1) {
      createElem('li', 'line-week__item', this.weekDays[i], this.blockWeek);
    }
  }

  renderDays() {
    this.blockDays.innerHTML = '';

    const todayDate = new Date();
    const { year: todayYear, month: todayMonth, day: todayDay } = getDate(todayDate);
    const dayArr = getCurrentMonthArr(this.currentDate);

    this.monthDays = getPrevOffsetDays(dayArr).concat(dayArr).concat(getPastOffsetDays(dayArr));

    for (let i = 0; i < this.monthDays.length; i += 1) {
      const { year: currentYear, month: currentMonth, day: currentDay } = getDate(this.monthDays[i]);

      let className = this.monthDays[i] < todayDate ? 'block-days__item disabled' : 'block-days__item';
      let dataAttr =
        this.monthDays[i] < todayDate
          ? [`${this.id}`, `disabled`]
          : [`${this.id}`, `${currentYear}-${currentMonth + 1}-${currentDay}`];

      if (todayYear === currentYear && todayMonth === currentMonth && todayDay === currentDay) {
        className = 'block-days__item block-days__item--today';
        dataAttr = [`${this.id}`, `${currentYear}-${currentMonth + 1}-${currentDay}`];
      }

      const liElem = createElem(
        'li',
        className,
        createElem('span', 'block-days__text', `${currentDay}`),
        this.blockDays,
        dataAttr,
      );

      liElem.addEventListener('mouseenter', ({ target }) => {
        const dateItem = target.closest(`[data-${this.id}]`);
        if (dateItem && this.from && Date.parse(this.from) < Date.parse(dateItem.dataset.date) && !this.to) {
          const daysNode = document.querySelectorAll(`[data-${this.id}]`);
          daysNode.forEach((item) => {
            item.classList.remove('focus-date-picker');
            item.classList.remove('range-date-picker');
          });
          target.classList.add('focus-date-picker');
          this.focus = dateItem.dataset.date;

          daysNode.forEach((item) => {
            const {
              dataset: { date },
            } = item;

            if (Date.parse(date) > Date.parse(this.from) && Date.parse(date) < Date.parse(this.focus))
              item.classList.add('range-date-picker');
          });
        }
      });
    }
  }

  render() {
    this.renderYear();
    this.renderMonths();
    this.renderWeek();
    this.renderDays();
    this.renderPickDate();
    this.renderCurrentDate();
  }

  changeMonth(sign = 'inc') {
    if (sign === 'inc') this.currentDate = calcMonth(this.currentDate);
    if (sign === 'dec') this.currentDate = calcMonth(this.currentDate, 'dec');
    this.render();
    this.renderPickDate();
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

  renderPickDate() {
    const daysNode = document.querySelectorAll(`[data-${this.id}]`);

    this.clearBtn.disabled = true;
    this.acceptBtn.disabled = true;

    if (this.from && this.to) {
      this.clearBtn.disabled = false;
      this.acceptBtn.disabled = false;

      daysNode.forEach((item) => {
        const {
          dataset: { [`${this.id}`]: date },
        } = item;
        if (Date.parse(date) === Date.parse(this.from)) {
          item.classList.add('block-days__item--from');
        }

        if (Date.parse(date) > Date.parse(this.from) && Date.parse(date) < Date.parse(this.to)) {
          item.classList.add('range-date-picker');
        }
        if (Date.parse(date) === Date.parse(this.to)) {
          item.classList.add('block-days__item--to');
        }
      });
    }
  }

  clearPickDate() {
    this.from = null;
    this.to = null;
    this.clearBtn.disabled = true;
    this.acceptBtn.disabled = true;
    this.renderDays();
    this.renderCurrentDate();
  }

  acceptPickDate() {
    this.renderCurrentDate();
    document.getElementById(`dropdown-${this.id}`).classList.remove('active');
  }

  renderCurrentDate() {
    if (!this.from && !this.to) this.textField.textContent = 'дд.мм.гггг';
    if (this.from) this.textField.textContent = this.from.split('-').reverse().join('.');
    if (this.from && this.to && this.pickerType === 'double')
      this.textFieldSec.textContent = this.to.split('-').reverse().join('.');
    if (this.from && this.to && this.pickerType === 'range') {
      const [_fromId, fromMonth, fromDay] = this.from.split('-');
      const [_toId, toMonth, toDay] = this.to.split('-');

      const strResult = `${fromDay} ${months[fromMonth - 1].slice(0, 3)} - ${toDay} ${months[toMonth - 1].slice(0, 3)}`;
      this.textField.textContent = strResult;
    }
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
