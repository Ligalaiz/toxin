import { createElem } from '@src/utils/createElem.utils';

import { templateStr, roomsGallery } from './internals/index';

class RenderSlider {
  static renderTemplate(parentId = 'app') {
    let currentId = 'app';

    if (parentId !== 'app') {
      const idArr = parentId.split('-');
      currentId = `${idArr[1]}`;
    }

    const template = templateStr(currentId);
    const parentNode = document.getElementById(parentId);

    if (parentNode) parentNode.innerHTML = template;
  }

  renderCards() {
    const currentGallery = roomsGallery[this.id];

    if (currentGallery && this.slidesWrap) {
      currentGallery.forEach((item, ind) => {
        const elem = createElem(
          'div',
          `slides-slider__item slides-slider__item--${ind}${ind === 0 ? ' active' : ''}`,
          createElem(
            'div',
            'slides-slider__img-wrap',
            createElem('img', 'slides-slider__img', null, null, ['src', item]),
          ),
          this.slidesWrap,
        );
        this.slides.push(elem);
      });
    }
  }

  renderBar() {
    const len = this.slides.length;
    this.sliderBar.innerHTML = '';

    for (let i = 0; i < len; i += 1) {
      createElem('li', `bar-slider__item ${i === this.slideIndex && 'active'}`, null, this.sliderBar, [
        'slider',
        `bar-${this.id}-${i}`,
      ]);
    }
  }
}

export { RenderSlider };
