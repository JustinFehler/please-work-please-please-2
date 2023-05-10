import { memo, SVGProps } from 'react';

const Vector10Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.30781 3.84191C5.04889 2.20207 3.80607 -0.559763 0.906141 1.51161'
      stroke='black'
      strokeLinecap='round'
    />
  </svg>
);
const Memo = memo(Vector10Icon);
export { Memo as Vector10Icon };
