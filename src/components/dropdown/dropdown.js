const state = {
  '1-0': 2,
  '1-1': 2,
  '2-0': 2,
  '2-1': 2,
};

const listMap = {
  guest: ['Взрослые', 'Дети', 'Младенцы'],
  bedroom: ['Спальни', 'Кровати', 'Ванные комнаты'],
  expand: ['Завтрак', 'Письменный стол', 'Стул для кормления', 'Кроватка', 'Телевизор', 'Шампунь'],
};

document.addEventListener('click', ({ target }) => {
  if (target?.id.match('dropdown')) {
    const dropdownId = target.id.split('-')[1];

    document.getElementById(`dropdown-${dropdownId}`).classList.toggle('active');
  }

  if (target?.id.match('btnDec') || target?.id.match('btnInc')) {
    const arrName = target.id.split('-');
    const counterName = `${arrName[2]}-${arrName[3]}`;

    const calculateVal = (name, type, prop, list, state, ind) => {
      if (!state[name]) {
        state[name] = 0;
      }

      if (type === 'btnDec' && state[name] > 0) {
        state[name] -= 1;
        return state[name];
      }

      if (type === 'btnInc') {
        state[name] += 1;
        return state[name];
      }
      return state[name];
    };

    const writeText = (list, state, type, id) => {
      let result = '';

      Object.keys(state).forEach((item) => {
        const currentVal = item.split('-');
        const currentId = currentVal[0];
        const ind = currentVal[1];

        if (currentId === id && state[item] > 0) {
          result += `${state[item]} ${list[type][ind]} `;
        }
      });
      if (result === '') return 'Удобства номера';
      return result;
    };

    const currentVal = calculateVal(counterName, arrName[0], arrName[1], listMap, state, arrName[3]);
    const currentText = writeText(listMap, state, arrName[1], arrName[2]);

    document.getElementById(`field-${arrName[1]}-${counterName}`).textContent = currentVal;
    document.getElementById(`text-${arrName[2]}`).textContent = currentText;
  }
});
