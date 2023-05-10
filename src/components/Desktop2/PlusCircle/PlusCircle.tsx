import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './PlusCircle.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

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
/* @figmaId 1814:35698 */
export const PlusCircle: FC<Props> = memo(function PlusCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}</div>
    </div>
  );
});
