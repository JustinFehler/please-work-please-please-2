import { memo, SVGProps } from 'react';

const StatusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={3} cy={3} r={2.5} fill='#6B7280' />
  </svg>
);
const Memo = memo(StatusIcon);
export { Memo as StatusIcon };
