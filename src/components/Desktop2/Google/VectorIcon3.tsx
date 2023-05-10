import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.89101 11.16C6.55146 10.16 6.35172 9.09999 6.35172 7.99999C6.35172 6.89999 6.55146 5.83999 6.87104 4.83999V4.61999L1.87755 0.73999L1.71776 0.81999C0.619192 2.97999 0 5.41999 0 7.99999C0 10.58 0.619192 13.02 1.69779 15.18L6.89101 11.16Z'
      fill='#FBBC05'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
