const state = {
  guest: {
    1: [
      { count: 0, name: 'Взрослые' },
      { count: 0, name: 'Дети' },
      { count: 0, name: 'Младенцы' },
    ],
    2: [
      { count: 2, name: 'Взрослые' },
      { count: 1, name: 'Дети' },
      { count: 0, name: 'Младенцы' },
    ],
    3: [
      { count: 0, name: 'Взрослые' },
      { count: 0, name: 'Дети' },
      { count: 0, name: 'Младенцы' },
    ],
  },

  bedroom: {
    1: [
      { count: 2, name: 'Спальни' },
      { count: 2, name: 'Кровати' },
      { count: 0, name: 'Ванные комнаты' },
    ],
    2: [
      { count: 2, name: 'Спальни' },
      { count: 2, name: 'Кровати' },
      { count: 0, name: 'Ванные комнаты' },
    ],
  },

  expand: {
    1: [
      { count: 0, name: 'Завтрак' },
      { count: 0, name: 'Письменный стол' },
      { count: 0, name: 'Стул для кормления' },
      { count: 0, name: 'Кроватка' },
      { count: 0, name: 'Телевизор' },
      { count: 0, name: 'Шампунь' },
    ],
  },
};

const initialState = {
  guest: [
    { count: 0, name: 'Взрослые' },
    { count: 0, name: 'Дети' },
    { count: 0, name: 'Младенцы' },
  ],
  bedroom: [
    { count: 0, name: 'Спальни' },
    { count: 0, name: 'Кровати' },
    { count: 0, name: 'Ванные комнаты' },
  ],
  expand: [
    { count: 0, name: 'Завтрак' },
    { count: 0, name: 'Письменный стол' },
    { count: 0, name: 'Стул для кормления' },
    { count: 0, name: 'Кроватка' },
    { count: 0, name: 'Телевизор' },
    { count: 0, name: 'Шампунь' },
  ],
};

export { state, initialState };
