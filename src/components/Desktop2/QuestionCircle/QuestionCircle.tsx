import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './QuestionCircle.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
  };
}
/* @figmaId 1814:35842 */
export const QuestionCircle: FC<Props> = memo(function QuestionCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}</div>
    </div>
  );
});
