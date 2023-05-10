import { memo, SVGProps } from 'react';

const VectorIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.98829 3.47625C10.6736 3.47625 11.8196 4.2075 12.46 4.815L14.9992 2.34C13.4375 0.88875 11.4151 0 8.98829 0C5.47163 0 2.43809 2.025 0.955021 4.96125L3.86498 7.2225C4.59527 5.05125 6.6064 3.47625 8.98829 3.47625Z'
      fill='#EB4335'
    />
  </svg>
);
const Memo = memo(VectorIcon4);
export { Memo as VectorIcon4 };
