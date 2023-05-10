import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Copy.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    rectangle?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1814:35839 */
export const Copy: FC<Props> = memo(function Copy(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.rectangle || ''} ${classes.rectangle}`}></div>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
