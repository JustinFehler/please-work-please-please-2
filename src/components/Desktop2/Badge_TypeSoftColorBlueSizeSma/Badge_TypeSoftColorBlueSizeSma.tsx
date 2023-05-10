import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _badgeAndTagSmall } from '../_badgeAndTagSmall/_badgeAndTagSmall';
import classes from './Badge_TypeSoftColorBlueSizeSma.module.css';

interface Props {
  className?: string;
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
/* @figmaId 1814:330 */
export const Badge_TypeSoftColorBlueSizeSma: FC<Props> = memo(function Badge_TypeSoftColorBlueSizeSma(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_badgeAndTagSmall
        className={classes._badgeAndTagSmall}
        hide={{
          avatar: true,
          stars: true,
          status: true,
          chevronRight: true,
          closeIcon: true,
        }}
        text={{
          placeholder: props.text?.placeholder || <div className={classes.placeholder}>Badge-sm</div>,
        }}
      />
    </div>
  );
});
