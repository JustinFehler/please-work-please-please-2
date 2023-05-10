import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 11.5V5H1V11.5C1 11.6326 1.05268 11.7598 1.14645 11.8536C1.24021 11.9473 1.36739 12 1.5 12H10.5C10.6326 12 10.7598 11.9473 10.8536 11.8536C10.9473 11.7598 11 11.6326 11 11.5V5H12V11.5C12 11.8978 11.842 12.2794 11.5607 12.5607C11.2794 12.842 10.8978 13 10.5 13H1.5C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5V11.5ZM11 0.5V4L9 2V0.5C9 0.367392 9.05268 0.240215 9.14645 0.146447C9.24021 0.0526785 9.36739 0 9.5 0H10.5C10.6326 0 10.7598 0.0526785 10.8536 0.146447C10.9473 0.240215 11 0.367392 11 0.5Z'
      fill='#1F2937'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
