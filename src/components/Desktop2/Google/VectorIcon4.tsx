import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.9792 6.18C17.9753 6.18 20.0126 7.48 21.1511 8.56L25.6652 4.16C22.8889 1.58 19.2936 0 14.9792 0C8.72734 0 3.33438 3.6 0.697815 8.82L5.87107 12.84C7.16937 8.98 10.7447 6.18 14.9792 6.18Z'
      fill='#EB4335'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
