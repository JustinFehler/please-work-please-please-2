import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.98828 7.99998C11.4151 7.99998 13.4487 7.20124 14.943 5.81749L12.1117 3.61248C11.3477 4.14123 10.3365 4.51248 8.99952 4.51248C6.61763 4.51248 4.6065 2.93749 3.88744 0.777485L3.78632 0.788735L0.999954 2.93748L0.966248 3.03873C2.43808 5.97498 5.47162 7.99998 8.98828 7.99998Z'
      fill='#34A853'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
