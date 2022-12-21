import { handleSwitcherClick } from '@src/components/header/header';

import '../../assets/styles/global/index.scss';

window.addEventListener('load', () => {
  const handleClick = (e) => {
    handleSwitcherClick(e);
  };
  document.addEventListener('click', handleClick);
});
