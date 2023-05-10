import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _badgeAndTag } from '../_badgeAndTag/_badgeAndTag';
import classes from './Badge_TypeSoftColorGraySizeDef.module.css';

interface Props {
  className?: string;
  hide?: {
    avatar?: boolean;
    stars?: boolean;
    status?: boolean;
    chevronRight?: boolean;
    closeIcon?: boolean;
  };
}
/* @figmaId 1814:312 */
export const Badge_TypeSoftColorGraySizeDef: FC<Props> = memo(function Badge_TypeSoftColorGraySizeDef(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_badgeAndTag
        className={classes._badgeAndTag}
        hide={{
          avatar: true,
          stars: true,
          status: true,
          chevronRight: true,
          closeIcon: true,
        }}
      />
    </div>
  );
});
