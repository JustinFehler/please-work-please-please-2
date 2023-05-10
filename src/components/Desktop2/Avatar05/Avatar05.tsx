import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar05.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar05?: string;
    root?: string;
  };
}
/* @figmaId 1814:35857 */
export const Avatar05: FC<Props> = memo(function Avatar05(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.avatar05 || ''} ${classes.avatar05}`}></div>
    </div>
  );
});
