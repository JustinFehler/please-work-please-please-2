import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Avatar06.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar06?: string;
    root?: string;
  };
}
/* @figmaId 1814:35859 */
export const Avatar06: FC<Props> = memo(function Avatar06(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.avatar06 || ''} ${classes.avatar06}`}></div>
    </div>
  );
});
