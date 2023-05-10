import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';
import classes from './XLg.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
  };
}
/* @figmaId 1814:57 */
export const XLg: FC<Props> = memo(function XLg(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}</div>
    </div>
  );
});
