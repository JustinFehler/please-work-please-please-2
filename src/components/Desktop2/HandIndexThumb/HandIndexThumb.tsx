import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HandIndexThumb.module.css';
import { Vector9Icon } from './Vector9Icon.js';
import { Vector10Icon } from './Vector10Icon.js';
import { Vector11Icon } from './Vector11Icon.js';
import { Vector12Icon } from './Vector12Icon.js';
import { Vector14Icon } from './Vector14Icon.js';
import { Vector15Icon } from './Vector15Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1814:12 */
export const HandIndexThumb: FC<Props> = memo(function HandIndexThumb(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vector9}>
        <Vector9Icon className={classes.icon} />
      </div>
      <div className={classes.vector10}>
        <Vector10Icon className={classes.icon2} />
      </div>
      <div className={classes.vector11}>
        <Vector11Icon className={classes.icon3} />
      </div>
      <div className={classes.vector12}>
        <Vector12Icon className={classes.icon4} />
      </div>
      <div className={classes.vector15}>
        <Vector15Icon className={classes.icon5} />
      </div>
      <div className={classes.vector14}>
        <Vector14Icon className={classes.icon6} />
      </div>
    </div>
  );
});
