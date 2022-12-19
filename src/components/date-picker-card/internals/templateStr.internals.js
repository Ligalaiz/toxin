const templateStr = (id) => `
      <div class="date-picker">
        <input class="date-picker__field" type="text" name="date" />
        <div class="date-picker__head">
          <button class="date-picker__prev" id="prevBtn-${id}"></button>
          <div class="date-picker__date">
            <div class="date-picker__month-date date-month" id="blockMonth-${id}">
            </div>
            <div class="date-picker__year-date date-year" id="blockYear-${id}">
            </div>
          </div>
          <button class="date-picker__next" id="nextBtn-${id}"></button>
        </div>
        <div class="date-picker__body">
          <ul class="date-picker__week-line line-week" id="blockWeek-${id}">
          </ul>
          <ul class="date-picker__days-block block-days" id="blockDays-${id}">
          </ul>
        </div>
        <div class="date-picker__controls controls-picker">
          <button class="controls-picker__btn controls-picker__btn--clear" id="btnClear-${id}">
            Очистить
          </button>
          <button class="controls-picker__btn controls-picker__btn--accept" id="btnAccept-${id}">
            Применить
          </button>
        </div>
      </div>`;

export { templateStr };
