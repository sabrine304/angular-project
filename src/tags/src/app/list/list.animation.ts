import { animate, AnimationMetadata, style, transition, trigger } from '@angular/animations';

const close = style({
  overflow: 'hidden',
  visibility: 'visible',
  height: '0px',
});
const open = style({
  visibility: 'visible',
  overflow: 'hidden',
  height: '*',
});

const slideFrom: AnimationMetadata[] = [
  close,
  animate('{{ time }} ease-in-out', open),
];
const slideTo: AnimationMetadata[] = [
  open,
  animate('{{ time }} ease-in-out', close),
];

const defaultSlideOptions = {
  params: {
    time: '300ms',
  },
};

export const slide = trigger('slide', [
  transition(':enter', slideFrom, defaultSlideOptions),
  transition(':leave', slideTo, defaultSlideOptions),
]);
