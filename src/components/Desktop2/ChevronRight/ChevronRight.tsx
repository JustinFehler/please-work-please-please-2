import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ChevronRight.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    vector?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1814:49 */
export const ChevronRight: FC<Props> = memo(function ChevronRight(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
    </div>
  );
});
