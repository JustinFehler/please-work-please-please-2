import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar04 } from '../Avatar04/Avatar04';
import { ChevronRight } from '../ChevronRight/ChevronRight';
import { Stars } from '../Stars/Stars';
import { XLg } from '../XLg/XLg';
import classes from './_badgeAndTagSmall.module.css';
import { StatusIcon } from './StatusIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    avatar?: boolean;
    stars?: boolean;
    status?: boolean;
    chevronRight?: boolean;
    closeIcon?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 1814:79 */
export const _badgeAndTagSmall: FC<Props> = memo(function _badgeAndTagSmall(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.avatar && <Avatar04 className={classes.avatar} classes={{ avatar04: classes.avatar04 }} />}
      {!props.hide?.stars && (
        <Stars
          className={classes.stars}
          swap={{
            vector: <VectorIcon className={classes.icon} />,
          }}
        />
      )}
      <div className={classes.placeholder}>
        {!props.hide?.status && (
          <div className={classes.status}>
            <StatusIcon className={classes.icon5} />
          </div>
        )}
        {props.text?.placeholder != null ? (
          props.text?.placeholder
        ) : (
          <div className={classes.placeholder2}>Badge-sm</div>
        )}
      </div>
      {!props.hide?.chevronRight && (
        <ChevronRight
          className={classes.chevronRight}
          classes={{ vector: classes.vector }}
          swap={{
            vector: (
              <div className={classes.vector}>
                <VectorIcon2 className={classes.icon2} />
              </div>
            ),
          }}
        />
      )}
      {!props.hide?.closeIcon && (
        <div className={classes.closeIcon}>
          <XLg
            className={classes.xLg}
            swap={{
              vector: <VectorIcon3 className={classes.icon3} />,
              vector2: <VectorIcon4 className={classes.icon4} />,
            }}
          />
        </div>
      )}
    </div>
  );
});
