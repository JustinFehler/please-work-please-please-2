import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.74275 4.68525C5.82525 4.43775 6.17475 4.43775 6.25725 4.68525L6.741 6.138C6.84748 6.45735 7.02688 6.74751 7.26498 6.98548C7.50308 7.22345 7.79334 7.4027 8.11275 7.509L9.56475 7.99275C9.81225 8.07525 9.81225 8.42475 9.56475 8.50725L8.112 8.991C7.79265 9.09748 7.50249 9.27688 7.26452 9.51498C7.02655 9.75308 6.8473 10.0433 6.741 10.3627L6.25725 11.8147C6.23946 11.8689 6.20502 11.9161 6.15882 11.9496C6.11262 11.9831 6.05704 12.0011 6 12.0011C5.94296 12.0011 5.88738 11.9831 5.84118 11.9496C5.79499 11.9161 5.76054 11.8689 5.74275 11.8147L5.259 10.362C5.1526 10.0427 4.97331 9.75262 4.73535 9.51465C4.49738 9.27669 4.20727 9.0974 3.888 8.991L2.43525 8.50725C2.38105 8.48946 2.33386 8.45501 2.3004 8.40882C2.26694 8.36262 2.24893 8.30704 2.24893 8.25C2.24893 8.19296 2.26694 8.13738 2.3004 8.09118C2.33386 8.04498 2.38105 8.01054 2.43525 7.99275L3.888 7.509C4.20727 7.4026 4.49738 7.22331 4.73535 6.98534C4.97331 6.74738 5.1526 6.45727 5.259 6.138L5.74275 4.68525V4.68525ZM2.8455 0.861C2.85625 0.828521 2.87697 0.800257 2.90471 0.780224C2.93244 0.760192 2.96579 0.74941 3 0.74941C3.03421 0.74941 3.06756 0.760192 3.09529 0.780224C3.12303 0.800257 3.14375 0.828521 3.1545 0.861L3.44475 1.7325C3.5745 2.121 3.879 2.4255 4.2675 2.55525L5.139 2.8455C5.17148 2.85625 5.19974 2.87697 5.21978 2.90471C5.23981 2.93244 5.25059 2.96579 5.25059 3C5.25059 3.03421 5.23981 3.06756 5.21978 3.09529C5.19974 3.12303 5.17148 3.14374 5.139 3.1545L4.2675 3.44475C4.07589 3.50859 3.90179 3.61617 3.75898 3.75898C3.61617 3.90179 3.50859 4.07589 3.44475 4.2675L3.1545 5.139C3.14375 5.17148 3.12303 5.19974 3.09529 5.21978C3.06756 5.23981 3.03421 5.25059 3 5.25059C2.96579 5.25059 2.93244 5.23981 2.90471 5.21978C2.87697 5.19974 2.85625 5.17148 2.8455 5.139L2.55525 4.2675C2.49141 4.07589 2.38383 3.90179 2.24102 3.75898C2.09821 3.61617 1.92411 3.50859 1.7325 3.44475L0.861 3.1545C0.828521 3.14374 0.800257 3.12303 0.780224 3.09529C0.760192 3.06756 0.74941 3.03421 0.74941 3C0.74941 2.96579 0.760192 2.93244 0.780224 2.90471C0.800257 2.87697 0.828521 2.85625 0.861 2.8455L1.7325 2.55525C1.92411 2.49141 2.09821 2.38383 2.24102 2.24102C2.38383 2.09821 2.49141 1.92411 2.55525 1.7325L2.8455 0.861V0.861ZM8.14725 0.07425C8.15465 0.0528947 8.16853 0.0343769 8.18694 0.0212712C8.20536 0.00816546 8.2274 0.00112303 8.25 0.00112303C8.2726 0.00112303 8.29464 0.00816546 8.31306 0.0212712C8.33147 0.0343769 8.34535 0.0528947 8.35275 0.07425L8.54625 0.65475C8.6325 0.91425 8.83575 1.1175 9.09525 1.20375L9.67575 1.39725C9.69711 1.40465 9.71562 1.41853 9.72873 1.43694C9.74184 1.45536 9.74888 1.4774 9.74888 1.5C9.74888 1.5226 9.74184 1.54464 9.72873 1.56306C9.71562 1.58147 9.69711 1.59535 9.67575 1.60275L9.09525 1.79625C8.96737 1.83879 8.85116 1.91056 8.75586 2.00586C8.66056 2.10116 8.58879 2.21737 8.54625 2.34525L8.35275 2.92575C8.34535 2.94711 8.33147 2.96562 8.31306 2.97873C8.29464 2.99183 8.2726 2.99888 8.25 2.99888C8.2274 2.99888 8.20536 2.99183 8.18694 2.97873C8.16853 2.96562 8.15465 2.94711 8.14725 2.92575L7.95375 2.34525C7.91121 2.21737 7.83944 2.10116 7.74414 2.00586C7.64884 1.91056 7.53263 1.83879 7.40475 1.79625L6.825 1.60275C6.80365 1.59535 6.78513 1.58147 6.77202 1.56306C6.75892 1.54464 6.75187 1.5226 6.75187 1.5C6.75187 1.4774 6.75892 1.45536 6.77202 1.43694C6.78513 1.41853 6.80365 1.40465 6.825 1.39725L7.4055 1.20375C7.665 1.1175 7.86825 0.91425 7.9545 0.65475L8.14725 0.075V0.07425Z'
      fill='#6B7280'
      stroke='#6B7280'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
