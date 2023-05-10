import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.293 0.5C7.48053 0.312529 7.73484 0.207214 8 0.207214C8.26516 0.207214 8.51947 0.312529 8.707 0.5L15.354 7.146C15.4479 7.23989 15.5006 7.36722 15.5006 7.5C15.5006 7.63278 15.4479 7.76011 15.354 7.854C15.2601 7.94789 15.1328 8.00063 15 8.00063C14.8672 8.00063 14.7399 7.94789 14.646 7.854L8 1.207L1.354 7.854C1.26011 7.94789 1.13278 8.00063 1 8.00063C0.867224 8.00063 0.739887 7.94789 0.646 7.854C0.552113 7.76011 0.499368 7.63278 0.499368 7.5C0.499368 7.36722 0.552113 7.23989 0.646 7.146L7.293 0.5Z'
      fill='#1F2937'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
