import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.3192 3.36002C16.3192 2.04002 16.2193 1.08002 15.9796 0.0800171H0.979187V6.02002H9.7877C9.60793 7.50002 8.64918 9.72002 6.51197 11.22L6.492 11.42L11.2258 15.1L11.5454 15.14C14.5814 12.34 16.3192 8.22002 16.3192 3.36002Z'
      fill='#4285F4'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
