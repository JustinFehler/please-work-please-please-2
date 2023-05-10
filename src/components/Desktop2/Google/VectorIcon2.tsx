import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.9792 13C19.2935 13 22.9088 11.58 25.5654 9.11997L20.5319 5.19997C19.1737 6.13997 17.376 6.79997 14.9991 6.79997C10.7647 6.79997 7.18933 3.99997 5.911 0.159973L5.73123 0.179973L0.777695 3.99997L0.717773 4.17997C3.33436 9.39997 8.72733 13 14.9792 13Z'
      fill='#34A853'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
