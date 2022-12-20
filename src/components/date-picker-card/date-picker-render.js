import { getDate, createElem, getCurrentMonthArr, getPrevOffsetDays, getPastOffsetDays } from './utils/index';
import { templateStr, months } from './internals/index';

class RenderDatePicker {
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

export { RenderDatePicker };
