import { memo, SVGProps } from 'react';

const VectorIcon8 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.61704 2.20251C9.61704 1.46001 9.56086 0.92001 9.42604 0.35751H0.988293V3.69876H5.94308C5.84196 4.53126 5.30267 5.78001 4.10048 6.62376L4.08925 6.73626L6.75203 8.80626L6.93179 8.82876C8.63956 7.25376 9.61704 4.93626 9.61704 2.20251Z'
      fill='#4285F4'
    />
  </svg>
);
const Memo = memo(VectorIcon8);
export { Memo as VectorIcon8 };
