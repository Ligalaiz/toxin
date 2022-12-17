const disabledBtn = (id, state) => {
  const [_, type, itemId] = id.split('-');
  const currentState = state[type][itemId];
  const clearBtn = document.getElementById(`btnClear-${type}-${itemId}`);
  const acceptBtn = document.getElementById(`btnAccept-${type}-${itemId}`);

  const isExist = currentState.reduce((acc, { count }) => {
    if (count > 0) acc = true;
    return acc;
  }, false);

  clearBtn.disabled = !isExist;
  acceptBtn.disabled = !isExist;
};

export { disabledBtn };
