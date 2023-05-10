import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.87619 6.77749C3.68519 6.21499 3.57284 5.61874 3.57284 4.99999C3.57284 4.38124 3.68519 3.78499 3.86496 3.22249V3.09874L1.05612 0.916245L0.96624 0.961244C0.348296 2.17624 0 3.54874 0 4.99999C0 6.45124 0.348296 7.82374 0.955004 9.03874L3.87619 6.77749Z'
      fill='#FBBC05'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
