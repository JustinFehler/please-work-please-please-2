import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Badge_TypeSoftColorBlueSizeSma } from '../Badge_TypeSoftColorBlueSizeSma/Badge_TypeSoftColorBlueSizeSma';
import { ChevronDown } from '../ChevronDown/ChevronDown';
import { House } from '../House/House';
import classes from './_navActiveLink.module.css';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    content?: string;
  };
  hide?: {
    avatar?: boolean;
    stars?: boolean;
    status?: boolean;
    chevronRight?: boolean;
    closeIcon?: boolean;
    house?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    borderBottom?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 1814:384 */
export const _navActiveLink: FC<Props> = memo(function _navActiveLink(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={`${props.classes?.content || ''} ${classes.content}`}>
        <div className={classes.inline}>
          {!props.hide?.house && (
            <House
              className={classes.house}
              swap={{
                vector: <VectorIcon className={classes.icon} />,
                vector2: <VectorIcon2 className={classes.icon2} />,
              }}
            />
          )}
          {props.text?.placeholder != null ? props.text?.placeholder : <div className={classes.placeholder2}>Link</div>}
          {!props.hide?.badge && (
            <Badge_TypeSoftColorBlueSizeSma
              text={{
                placeholder: <div className={classes.placeholder}>9+</div>,
              }}
            />
          )}
        </div>
        {!props.hide?.chevronDown && (
          <ChevronDown
            className={classes.chevronDown}
            swap={{
              vector: <VectorIcon3 className={classes.icon3} />,
            }}
          />
        )}
      </div>
      {!props.hide?.borderBottom && <div className={classes.borderBottom}></div>}
    </div>
  );
});
