import gsap from 'gsap';

class Home {
  homeAnimations() {
    gsap.to('.block-1', {
      duration: 2,
      x: '-180',
      y: '-100',
      scale: '2.4',
      ease: 'Expo.easeInOut',
    });

    gsap.to('.block-2', {
      duration: 2,
      x: '-180',
      y: '200',
      scale: '1.2',
      ease: 'Expo.easeInOut',
    });

    gsap.to('.block-3', {
      duration: 2,
      x: '180',
      y: '-240',
      scale: '1.6',
      ease: 'Expo.easeInOut',
    });

    gsap.to('.block-4', {
      duration: 2,
      x: '280',
      y: '240',
      scale: '0.8',
      ease: 'Expo.easeInOut',
    });

    gsap.to('.box', {
      duration: 2.4,
      y: '-100%',
      ease: 'Expo.easeInOut',
    });

    gsap.from('.circle-shape', {
      duration: 2.4,
      scale: '0',
      ease: 'Expo.easeInOut',
    });

    gsap.from('.circle-shape-2', {
      duration: 2.4,
      scale: '0',
      ease: 'Expo.easeInOut',
    });

    gsap.from('.circle-shape-3', {
      duration: 2.4,
      scale: '0',
      ease: 'Expo.easeInOut',
    });

    gsap.from('.navbar > div', {
      duration: 1.6,
      opacity: 0,
      y: 60,
      ease: 'Expo.easeInOut',
      delay: 0.6,
    });

    gsap.from('.site-logo', {
      duration: 1.6,
      opacity: 0,
      y: 40,
      ease: 'Expo.easeInOut',
      delay: 0.6,
    });

    gsap.from('.showreel', {
      duration: 1.6,
      opacity: 0,
      y: 40,
      ease: 'Expo.easeInOut',
      delay: 0.6,
    });

    gsap.from('.site-menu > div', {
      duration: 1,
      opacity: 0,
      y: 60,
      ease: 'Power2.easeOut',
      stagger: 0.3,
    });
  }

  init() {
    this.homeAnimations();
  }
}

export default Home;
