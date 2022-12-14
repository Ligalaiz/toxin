const writeText = (id, state) => {
  let result = '';
  const [_, type, itemId] = id.split('-');
  const currentState = state[type][itemId];

  currentState.forEach(({ count, name }) => {
    if (count > 0) {
      if (type === 'bedroom') result += `${count} ${name} `;
      if (type === 'guest') {
        result = Number(result) + count;
      }
    }
  });

  if (result === '') {
    if (type === 'bedroom') return 'Удобства номера';
    if (type === 'guest') return 'Сколько гостей';
  } else if (type === 'guest') {
    let guestWord = ' гость';
    if (result > 1 && result < 5) guestWord = ' гостя';
    if (result > 4) guestWord = ' гостей';
    result += guestWord;
  }

  return result;
};

export { writeText };
