import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './DocsDividerHorizontal.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1814:46782 */
export const DocsDividerHorizontal: FC<Props> = memo(function DocsDividerHorizontal(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.docsDividerHorizontal}></div>
    </div>
  );
});
