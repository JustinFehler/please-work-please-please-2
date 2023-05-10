import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2 11V11C0.895431 11 0 10.1046 0 9V2C0 0.895431 0.895431 0 2 0H9C10.1046 0 11 0.895431 11 2V2'
      stroke='#1F2937'
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
