const handleSwitcherClick = ({ target }) => {
  const parent = document.querySelector('html');
  const menuBtn = target.closest('.mobile-header__switcher');

  if (menuBtn) {
    parent.classList.toggle('show-nav');
    menuBtn.classList.toggle('active');
  }
};

export { handleSwitcherClick };
