const templateStr = (id) => `
  <div class="slider__wrap">
    <div class="slider__slides slides-slider" id="slides-${id}"></div>
    <button class="slider__btn slider__btn--prev" type="button" data-slider="prevBtn-${id}">
      <span></span>
    </button>
    <button class="slider__btn slider__btn--next" type="button" data-slider="nextBtn-${id}">
      <span></span>
    </button>
    <ul class="slider__bar bar-slider" id="sliderBar-${id}"></ul>
  </div>
`;

export { templateStr };
