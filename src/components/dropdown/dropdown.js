document.addEventListener('click', ({ target }) => {
  if (target?.id.match('dropdown')) {
    const dropdownId = target.id.split('-')[1];

    document.getElementById(`dropdown-${dropdownId}`).classList.toggle('active');
  }
});
