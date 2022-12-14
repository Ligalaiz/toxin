const getDateFromStr = (date) => ({
  year: parseInt(date.split('-')[0], 10),
  month: parseInt(date.split('-')[1], 10),
  day: parseInt(date.split('-')[2], 10),
});

export { getDateFromStr };
