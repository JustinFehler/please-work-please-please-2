import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Envelope.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 1814:35845 */
export const Envelope: FC<Props> = memo(function Envelope(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector}>{props.swap?.vector || <VectorIcon className={classes.icon} />}</div>
    </div>
  );
});
