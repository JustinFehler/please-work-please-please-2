import { memo, SVGProps } from 'react';

const Vector11Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.16507 3.7192C3.99246 1.82044 2.92225 -1.35567 0.0223217 1.12998' stroke='black' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector11Icon);
export { Memo as Vector11Icon };
