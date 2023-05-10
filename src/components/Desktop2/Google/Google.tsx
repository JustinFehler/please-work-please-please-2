import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Google.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    vector?: string;
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
    vector3?: ReactNode;
    vector4?: ReactNode;
  };
}
/* @figmaId 1814:408 */
export const Google: FC<Props> = memo(function Google(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vector || ''} ${classes.vector}`}>
        {props.swap?.vector || <VectorIcon className={classes.icon} />}
      </div>
      <div className={classes.vector2}>{props.swap?.vector2 || <VectorIcon2 className={classes.icon2} />}</div>
      <div className={classes.vector3}>{props.swap?.vector3 || <VectorIcon3 className={classes.icon3} />}</div>
      <div className={classes.vector4}>{props.swap?.vector4 || <VectorIcon4 className={classes.icon4} />}</div>
    </div>
  );
});
