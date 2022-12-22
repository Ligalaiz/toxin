import { RenderSlider } from './slider-render';

class Slider {
  constructor(id) {
    this.renderObj = new RenderSlider();
    this.slider = document.getElementById(`slider-${id}`);
    this.prevBtn = document.getElementById(`sliderPrevBtn-${id}`);
    this.nextBtn = document.getElementById(`sliderNextBtn-${id}`);
    this.sliderBar = document.getElementById(`sliderBar-${id}`);
    this.slidesWrap = document.getElementById(`slides-${id}`);
    this.isEnabled = true;
    this.slideIndex = 0;
    this.slides = [];
    this.id = id;
  }

  static renderTemplate(id) {
    RenderSlider.renderTemplate(id);
  }

  slideShow = (n) => {
    this.slideIndex = (n + this.slides.length) % this.slides.length;
  };

  hideItem = (direction) => {
    this.isEnabled = false;
    this.slides[this.slideIndex].classList.add(direction);
    this.slides[this.slideIndex].addEventListener('animationend', ({ target }) => {
      target.classList.remove('active', direction);
    });
  };

  showItem = (direction) => {
    this.slides[this.slideIndex].classList.add('next', direction);
    this.slides[this.slideIndex].addEventListener('animationend', ({ target }) => {
      target.classList.remove('next', direction);
      target.classList.add('active');
      this.isEnabled = true;
    });
  };

  nextItem = (n, type = 'default') => {
    const currentInd = type === 'default' ? n + 1 : n;

    this.hideItem('to-left');
    this.slideShow(currentInd);
    this.showItem('from-right');
  };

  previousItem = (n, type = 'default') => {
    const currentInd = type === 'default' ? n - 1 : n;

    this.hideItem('to-right');
    this.slideShow(currentInd);
    this.showItem('from-left');
  };

  addListeners = () => {
    document.addEventListener('click', ({ target }) => {
      if (target.closest('.slider__btn')) {
        const { slider } = target.closest('.slider__btn').dataset;

        if (slider === `prevBtn-${this.id}` && this.isEnabled) this.previousItem(this.slideIndex);
        if (slider === `nextBtn-${this.id}` && this.isEnabled) this.nextItem(this.slideIndex);
        this.renderObj.renderBar.call(this);
      }

      if (target.dataset.slider) {
        const { slider } = target.dataset;
        const [_, id, ind] = slider.split('-');

        if (this.id === id) {
          if (ind > this.slideIndex) this.nextItem(+ind, 'straight');
          if (ind < this.slideIndex) this.previousItem(+ind, 'straight');
          this.renderObj.renderBar.call(this);
        }
      }
    });
  };

  render() {
    this.renderObj.renderCards.call(this);
    this.renderObj.renderBar.call(this);
    this.addListeners();
  }
}

if (document.querySelectorAll('[id^=slider]')) {
  const sliders = document.querySelectorAll('[id^=slider]');

  sliders.forEach((item) => {
    const id = item.id.split('-')[1];
    Slider.renderTemplate(item.id);

    const slider = new Slider(id);
    slider.render();
  });
}
