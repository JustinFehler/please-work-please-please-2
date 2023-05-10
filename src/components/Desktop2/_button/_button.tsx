import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge_TypeWhiteColorWhiteSizeS } from '../Badge_TypeWhiteColorWhiteSizeS/Badge_TypeWhiteColorWhiteSizeS';
import { ChevronRight } from '../ChevronRight/ChevronRight';
import { Google } from '../Google/Google';
import { House } from '../House/House';
import classes from './_button.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon8 } from './VectorIcon8.js';
import { VectorIcon9 } from './VectorIcon9.js';
import { VectorIcon10 } from './VectorIcon10.js';
import { VectorIcon11 } from './VectorIcon11.js';
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
    avatar2?: boolean;
    house?: boolean;
    divider?: boolean;
    badge?: boolean;
    divider2?: boolean;
    chevronRight2?: boolean;
    avatar3?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 1814:2309 */
export const _button: FC<Props> = memo(function _button(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.avatar2 && (
        <Google
          className={classes.avatar}
          classes={{ vector: classes.vector }}
          swap={{
            vector: (
              <div className={classes.vector}>
                <VectorIcon className={classes.icon} />
              </div>
            ),
            vector2: <VectorIcon2 className={classes.icon2} />,
            vector3: <VectorIcon3 className={classes.icon3} />,
            vector4: <VectorIcon4 className={classes.icon4} />,
          }}
        />
      )}
      {!props.hide?.house && (
        <House
          className={classes.house}
          swap={{
            vector: <VectorIcon5 className={classes.icon5} />,
            vector2: <VectorIcon6 className={classes.icon6} />,
          }}
        />
      )}
      {!props.hide?.divider && <div className={classes.divider}></div>}
      {props.text?.placeholder != null ? props.text?.placeholder : <div className={classes.placeholder2}>Button</div>}
      {!props.hide?.badge && (
        <Badge_TypeWhiteColorWhiteSizeS
          classes={{ _badgeAndTagSmall: classes._badgeAndTagSmall }}
          text={{
            placeholder: <div className={classes.placeholder}>5</div>,
          }}
        />
      )}
      {!props.hide?.divider2 && <div className={classes.divider2}></div>}
      {!props.hide?.chevronRight2 && (
        <ChevronRight
          className={classes.chevronRight}
          swap={{
            vector: <VectorIcon7 className={classes.icon7} />,
          }}
        />
      )}
      {!props.hide?.avatar3 && (
        <Google
          className={classes.avatar2}
          classes={{ vector: classes.vector2 }}
          swap={{
            vector: (
              <div className={classes.vector2}>
                <VectorIcon8 className={classes.icon8} />
              </div>
            ),
            vector2: <VectorIcon9 className={classes.icon9} />,
            vector3: <VectorIcon10 className={classes.icon10} />,
            vector4: <VectorIcon11 className={classes.icon11} />,
          }}
        />
      )}
    </div>
  );
});
