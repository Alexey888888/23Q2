const buttons = document.querySelectorAll('.slider__button');
const sausage = document.querySelector('.sausage');
let pos = 0;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    buttons.forEach((el) =>
      el.classList.remove('slider-btn-active', 'pointer-default')
    );
    btn.classList.add('slider-btn-active', 'pointer-default');

    if (pos === 0 && buttons[1].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.add('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-left-1');
      pos = 1;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_1');
        sausage.classList.remove('transition-left-1');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_3',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 1 && buttons[2].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-left-2');
      pos = 2;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_2');
        sausage.classList.remove('transition-left-2');
        sausage.classList.remove(
          'stepLeft_1',
          'stepLeft_3',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 2 && buttons[3].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-left-3');
      pos = 3;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_3');
        sausage.classList.remove('transition-left-3');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 3 && buttons[4].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-left-4');
      document
        .querySelector('.slider__swap-right')
        .classList.add('pointer-default', 'arrow-opacity');
      pos = 4;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_4');
        sausage.classList.remove('transition-left-4');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_3',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 0 && buttons[2].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.add('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-left-5');
      pos = 2;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_5');
        sausage.classList.remove('transition-left-5');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_3',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 0 && buttons[3].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.add('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-left-6');
      pos = 3;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_6');
        sausage.classList.remove('transition-left-6');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_3',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 0 && buttons[4].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.add('pointer-active', 'arrow-opacity-active');
      document
        .querySelector('.slider__swap-right')
        .classList.add('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-left-7');
      pos = 4;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_7');
        sausage.classList.remove('transition-left-7');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_3',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 1 && buttons[3].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-left-8');
      pos = 3;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_8');
        sausage.classList.remove('transition-left-8');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_3',
          'stepLeft_9',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 1 && buttons[4].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-right')
        .classList.add('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-left-9');
      pos = 4;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_9');
        sausage.classList.remove('transition-left-9');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_3',
          'stepLeft_10',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 2 && buttons[4].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-right')
        .classList.add('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-left-10');
      pos = 4;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepLeft_10');
        sausage.classList.remove('transition-left-10');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_3',
          'stepRight_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 4 && buttons[3].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-right')
        .classList.remove('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-right-1');
      pos = 3;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_1');
        sausage.classList.remove('transition-right-1');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 3 && buttons[2].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-right-2');
      pos = 2;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_2');
        sausage.classList.remove('transition-right-2');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_1',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 2 && buttons[1].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-right-3');
      pos = 1;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_3');
        sausage.classList.remove('transition-right-3');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_1',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 1 && buttons[0].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.remove('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-right-4');
      pos = 0;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_4');
        sausage.classList.remove('transition-right-4');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_1',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 4 && buttons[2].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-right')
        .classList.remove('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-right-5');
      pos = 2;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_5');
        sausage.classList.remove('transition-right-5');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_1',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 4 && buttons[1].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-right')
        .classList.remove('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-right-6');
      pos = 1;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_6');
        sausage.classList.remove('transition-right-6');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_1',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 4 && buttons[0].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.remove('pointer-active', 'arrow-opacity-active');
      document
        .querySelector('.slider__swap-right')
        .classList.remove('pointer-default', 'arrow-opacity');
      sausage.classList.add('transition-right-7');
      pos = 0;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_7');
        sausage.classList.remove('transition-right-7');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_1',
          'stepRight_8',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 3 && buttons[1].classList.contains('slider-btn-active')) {
      sausage.classList.add('transition-right-8');
      pos = 1;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_8');
        sausage.classList.remove('transition-right-8');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_1',
          'stepRight_9',
          'stepRight_10'
        );
      });
    }

    if (pos === 3 && buttons[0].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.remove('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-right-9');
      pos = 0;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_9');
        sausage.classList.remove('transition-right-9');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_1',
          'stepRight_10'
        );
      });
    }

    if (pos === 2 && buttons[0].classList.contains('slider-btn-active')) {
      document
        .querySelector('.slider__swap-left')
        .classList.remove('pointer-active', 'arrow-opacity-active');
      sausage.classList.add('transition-right-10');
      pos = 0;
      sausage.addEventListener('animationend', () => {
        sausage.classList.add('stepRight_10');
        sausage.classList.remove('transition-right-10');
        sausage.classList.remove(
          'stepLeft_2',
          'stepLeft_1',
          'stepLeft_4',
          'stepLeft_5',
          'stepLeft_6',
          'stepLeft_7',
          'stepLeft_8',
          'stepLeft_9',
          'stepLeft_10',
          'stepLeft_1',
          'stepRight_2',
          'stepRight_3',
          'stepRight_4',
          'stepRight_5',
          'stepRight_6',
          'stepRight_7',
          'stepRight_8',
          'stepRight_9',
          'stepRight_1'
        );
      });
    }

    //
  });
});

document.querySelector('.slider__swap-right').addEventListener('click', () => {
  buttons.forEach((btn) => {
    btn.classList.remove('slider-btn-active', 'pointer-default');
  });
  if (pos === 0) {
    document
      .querySelector('.slider__swap-left')
      .classList.add('pointer-active', 'arrow-opacity-active');
    sausage.classList.add('transition-left-1');
    buttons[1].classList.add('slider-btn-active', 'pointer-default');
    pos = 1;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepLeft_1');
      sausage.classList.remove('transition-left-1');
      sausage.classList.remove(
        'stepLeft_2',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_1',
        'stepRight_2',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 1) {
    sausage.classList.add('transition-left-2');
    buttons[2].classList.add('slider-btn-active', 'pointer-default');
    pos = 2;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepLeft_2');
      sausage.classList.remove('transition-left-2');
      sausage.classList.remove(
        'stepLeft_1',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_1',
        'stepRight_2',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 2) {
    sausage.classList.add('transition-left-3');
    buttons[3].classList.add('slider-btn-active', 'pointer-default');
    pos = 3;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepLeft_3');
      sausage.classList.remove('transition-left-3');
      sausage.classList.remove(
        'stepLeft_2',
        'stepLeft_1',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_1',
        'stepRight_2',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 3) {
    document
      .querySelector('.slider__swap-right')
      .classList.add('pointer-default', 'arrow-opacity');
    sausage.classList.add('transition-left-4');
    buttons[4].classList.add('slider-btn-active', 'pointer-default');
    pos = 4;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepLeft_4');
      sausage.classList.remove('transition-left-4');
      sausage.classList.remove(
        'stepLeft_2',
        'stepLeft_1',
        'stepLeft_3',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_1',
        'stepRight_2',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 4) {
    buttons[4].classList.add('slider-btn-active', 'pointer-default');
    pos = 4;
  }

  //
});

document.querySelector('.slider__swap-left').addEventListener('click', () => {
  buttons.forEach((btn) => {
    btn.classList.remove('slider-btn-active', 'pointer-default');
  });
  if (pos === 4) {
    sausage.classList.add('transition-right-1');
    buttons[3].classList.add('slider-btn-active', 'pointer-default');
    document
      .querySelector('.slider__swap-right')
      .classList.remove('pointer-default', 'arrow-opacity');
    pos = 3;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepRight_1');
      sausage.classList.remove('transition-right-1');
      sausage.classList.remove(
        'stepLeft_1',
        'stepLeft_2',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_2',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 3) {
    sausage.classList.add('transition-right-2');
    buttons[2].classList.add('slider-btn-active', 'pointer-default');
    pos = 2;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepRight_2');
      sausage.classList.remove('transition-right-2');
      sausage.classList.remove(
        'stepLeft_1',
        'stepLeft_2',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_1',
        'stepRight_3',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 2) {
    sausage.classList.add('transition-right-3');
    buttons[1].classList.add('slider-btn-active', 'pointer-default');
    pos = 1;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepRight_3');
      sausage.classList.remove('transition-right-3');
      sausage.classList.remove(
        'stepLeft_1',
        'stepLeft_2',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_2',
        'stepRight_1',
        'stepRight_4',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 1) {
    document
      .querySelector('.slider__swap-left')
      .classList.remove('pointer-active', 'arrow-opacity-active');
    sausage.classList.add('transition-right-4');
    buttons[0].classList.add('slider-btn-active', 'pointer-default');
    pos = 0;
    sausage.addEventListener('animationend', () => {
      sausage.classList.add('stepRight_4');
      sausage.classList.remove('transition-right-4');
      sausage.classList.remove(
        'stepLeft_1',
        'stepLeft_2',
        'stepLeft_3',
        'stepLeft_4',
        'stepLeft_5',
        'stepLeft_6',
        'stepLeft_7',
        'stepLeft_8',
        'stepLeft_9',
        'stepLeft_10',
        'stepRight_2',
        'stepRight_3',
        'stepRight_1',
        'stepRight_5',
        'stepRight_6',
        'stepRight_7',
        'stepRight_8',
        'stepRight_9',
        'stepRight_10'
      );
    });
  } else if (pos === 0) {
    buttons[0].classList.add('slider-btn-active', 'pointer-default');
    pos = 0;
  }

  //
});
