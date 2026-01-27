barba.init({
  debug: true,
  transitions: [
    {
      name: 'page-transition',
      once() {},
      async leave() {
        await transitionIn();
      },
      enter() {
        transitionOut();
      },
    },
  ],
});

const transition = {
  element: document.querySelector('.transition'),
  wrapper: document.querySelector('.transition-wrapper'),
  rows: document.querySelectorAll('.transition-row'),
  rowBackground: document.querySelector('.transition-row-background'),
  words: document.querySelectorAll('.transition-row > h2'),
};

const tltransition = gsap.timeline({
  defaults: {
    duration: 1.6,
    ease: 'expo.inOut',
  },
});

const init = () =>{
  gsap.set(transition.wrapper, {autoAlpha: 1, yPercent: 100});
  gsap.set(transition.rows[1], {overflow: 'hidden'});
  gsap.set(transition.rowBackground, {scaleY: 0, transformOrigin: 'center'});
  gsap.set(transition.words, {xPercent: -150, yPercent: 100, autoAlpha: 1});
  gsap.set('.reverse > h2', {xPercent: 150});
};

const transitionIn = () => {
  return new Promise((resolve) => {
    tltransition
      .to(transition.wrapper,{
        yPercent: 0,
      })
      .to(transition.rowBackground,{
        scaleY: 1
      },0.8)
      .to(transition.words,{
        duration: 2.4,
        xPercent: 0,
      },1.2)
      .to(transition.words,{
        yPercent: 0,
        stagger: 0.064,
        onComplete: resolve,
      },1.2);
  });
};

const transitionOut = () => {

  tltransition

      .to(transition.rows[1], {

          overflow: 'unset',

      })

      .to(

          transition.rowBackground,

          {

              scaleY: 3,

          },

          '<0.2'

      )

      .to(

          '.transition-row > h2:not(.unique)',

          {

              autoAlpha: 0,

          },

          '<1'

      )

      .to(transition.wrapper, {

          duration: 2,

          autoAlpha: 0,

          onComplete: () => {

              tltransition.clear();

              init();

          },

      });

};
window.addEventListener('DOMContentLoaded', init);