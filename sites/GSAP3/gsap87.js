const transition = {
  element: document.querySelector('.transition'),
  wrapper: document.querySelector('.transition-wrapper'),
  figures: document.querySelectorAll('.transition-figure'),
};

const initTransition = () =>{
  gsap.set(transition.wrapper, {yPercent: -125});
  gsap.set(transition.figures, {rotateY: 5, rotateX: 5, yPercent: -50});
};

const enterTransition = () =>{
  const tl = gsap.timeline({defaults: {duration: 1.8, ease: 'expo.out'}});

  return new Promise((resolve) => {
    tl.to(transition.wrapper,{
      yPercent: 25,
      onComplete: resolve,
    })
    .to(transition.figures,{
      duration: 2.4,
      rotateY: -5,
      rotateX: -5,
      yPercent: 100,
      ease: 'power2.in',
      stagger:{
        amount: 0,
        grid: 'auto',
        from: 'center',
      },
    },0)
    .to(
      '.hero',{
        autoAlpha: 0,
      },0.5
    );
  });
};

const leaveTransition = () =>{
  const tl = gsap.timeline({defaults: {duration: 1.8, ease: 'expo.inOut'}});
  gsap.set('.hero',{autoAlpha: 0});

  tl.to(transition.wrapper,{
    yPercent: 120,
    onStart: ()=>{
      gsap.set('.hero',{
        clipPath: 'polygon(30% 20%, 70% 20%, 70% 80%, 30% 80%)',
        yPercent: -100,
        rotateY: -15,
        rotateX: 15,
      })
    },
  })
  .to('.hero',{
    yPercent: 0,
    rotateY: 0,
    rotateX: 0,
    autoAlpha: 1,
  },0.04)
  .to('.hero',{
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    onComplete: () =>{
      initTransition();
    },
  });
};

barba.init({
  debug: true,
  transitions: [
    {
      name: 'page-transition',

      async leave() {
        await enterTransition();
      },

      enter() {
        leaveTransition();
      },
    },
  ],
});

window.addEventListener('load', initTransition);