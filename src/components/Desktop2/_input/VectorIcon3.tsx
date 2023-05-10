import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 11V11C0.895431 11 0 10.1046 0 9V2C0 0.895431 0.895431 0 2 0H9C10.1046 0 11 0.895431 11 2V2'
      stroke='#6B7280'
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
