import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _button } from '../_button/_button';
import classes from './Button_StyleSolidColorBlueStat.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    avatar?: boolean;
    house?: boolean;
    divider?: boolean;
    badge?: boolean;
    divider2?: boolean;
    chevronRight?: boolean;
    avatar2?: boolean;
  };
  text?: {
    placeholder?: ReactNode;
  };
}
/* @figmaId 1814:2444 */
export const Button_StyleSolidColorBlueStat: FC<Props> = memo(function Button_StyleSolidColorBlueStat(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <_button
        className={classes._button}
        hide={{
          avatar2: true,
          house: true,
          divider: true,
          badge: true,
          divider2: true,
          chevronRight2: true,
          avatar3: true,
        }}
        text={{
          placeholder: props.text?.placeholder || <div className={classes.placeholder}>Button</div>,
        }}
      />
    </button>
  );
});
