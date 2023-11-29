import { cva } from '../../styled-system/css';

export const cardStyle = cva({
  base: {
    width: '140px',
    height: '230px',
    perspective: '500px',
    boxShadow: '0 0 15px',
    boxShadowColor: 'rgba(0,0,0,0.1)',
    transitionProperty: 'all',
    transitionDuration: '0.5s',
    transformStyle: 'preserve-3d',
    cursor: 'pointer',
  },
  variants: {
    flipped: {
      flip: {
        transform: 'rotateY(180deg)',
        cursor: 'not-allowed'
      },
      noFlip: {
        transform: 'rotateY(0deg)',
      },
    },
  },
});

export const imageStyle = cva({
  base: {
    width: 'full',
    height: 'full',
    position: 'absolute',
    backfaceVisibility: 'hidden',
  },
  variants: {
    visual: {
      front: {
        transform: 'rotateY(180deg)',
      },
      back: {
        transform: 'rotateY(0deg)',
      },
    },
  },
  defaultVariants: {
    visual: 'front',
  },
});