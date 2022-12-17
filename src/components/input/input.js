const dateInputMask = (el) => {
  el.addEventListener('keypress', (e) => {
    if (e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }

    const { value } = el;
    const { length } = value;
    el.maxLength = 10;

    if (length !== 1 || length !== 3) {
      if (e.keyCode === 47) {
        e.preventDefault();
      }
    }

    if (length === 2 || length === 5) el.value += '.';
    if (length >= 10) el.value = value;
  });
};

window.addEventListener('load', () => {
  const dateMask = document.getElementById('dateMask');

  if (dateMask) dateInputMask(dateMask);
});
