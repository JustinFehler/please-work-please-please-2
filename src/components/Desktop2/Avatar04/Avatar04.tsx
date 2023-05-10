import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar04.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar04?: string;
    root?: string;
  };
}
/* @figmaId 1814:53 */
export const Avatar04: FC<Props> = memo(function Avatar04(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.avatar04 || ''} ${classes.avatar04}`}></div>
    </div>
  );
});
