import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _badgeAndTag } from '../_badgeAndTag/_badgeAndTag';
import classes from './Badge_TypeOutlinedColorGraySiz.module.css';

interface Props {
  className?: string;
  classes?: {
    avatar04?: string;
  };
  swap?: {
    avatar?: ReactNode;
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
/* @figmaId 1814:270 */
export const Badge_TypeOutlinedColorGraySiz: FC<Props> = memo(function Badge_TypeOutlinedColorGraySiz(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <_badgeAndTag
        className={classes._badgeAndTag}
        classes={{ avatar04: props.classes?.avatar04 || '' }}
        swap={{
          avatar: props.swap?.avatar,
        }}
        hide={{
          avatar: props.hide?.avatar || true,
          stars: true,
          status: true,
          chevronRight: true,
          closeIcon: props.hide?.closeIcon || true,
        }}
        text={{
          placeholder: props.text?.placeholder,
        }}
      />
    </div>
  );
});
