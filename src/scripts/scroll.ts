import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => el.classList.add('is-visible'),
      onEnterBack: () => el.classList.add('is-visible'),
    });
  });

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  });

  const heroWords = document.querySelectorAll<HTMLElement>('[data-hero-word]');
  if (heroWords.length) {
    gsap.from(heroWords, {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      delay: 0.1,
      ease: 'power3.out',
    });
  }
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}
