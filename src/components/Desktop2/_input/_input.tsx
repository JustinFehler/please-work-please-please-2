import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Avatar05 } from '../Avatar05/Avatar05';
import { Avatar06 } from '../Avatar06/Avatar06';
import { Badge_TypeOutlinedColorGraySiz } from '../Badge_TypeOutlinedColorGraySiz/Badge_TypeOutlinedColorGraySiz';
import { ChevronDown } from '../ChevronDown/ChevronDown';
import { Copy } from '../Copy/Copy';
import { Envelope } from '../Envelope/Envelope';
import { QuestionCircle } from '../QuestionCircle/QuestionCircle';
import { Us } from '../Us/Us';
import classes from './_input.module.css';
import { GroupIcon2 } from './GroupIcon2.js';
import { GroupIcon } from './GroupIcon.js';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    input?: string;
    root?: string;
  };
  hide?: {
    stars?: boolean;
    status?: boolean;
    chevronRight?: boolean;
    stars2?: boolean;
    status2?: boolean;
    chevronRight2?: boolean;
    stars3?: boolean;
    status3?: boolean;
    chevronRight3?: boolean;
    secondary?: boolean;
    avatar?: boolean;
    email?: boolean;
    chevronDown?: boolean;
    divider?: boolean;
    tags?: boolean;
    divider2?: boolean;
    trailing?: boolean;
    thisIsAFeedbackMessage?: boolean;
  };
  text?: {
    label?: ReactNode;
    placeholder?: ReactNode;
  };
}
/* @figmaId 1814:35890 */
export const _input: FC<Props> = memo(function _input(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.label}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label2}>Label</div>}
        {!props.hide?.secondary && <div className={classes.secondary}>Secondary</div>}
      </div>
      <div className={`${props.classes?.input || ''} ${classes.input}`}>
        <div className={classes.leading}>
          <Envelope
            swap={{
              vector: <VectorIcon className={classes.icon} />,
            }}
          />
          {!props.hide?.avatar && (
            <Us
              className={classes.avatar}
              classes={{ group: classes.group }}
              swap={{
                group: (
                  <div className={classes.group}>
                    <GroupIcon className={classes.icon2} />
                  </div>
                ),
              }}
            />
          )}
          {!props.hide?.email && <div className={classes.email}>Email</div>}
          {!props.hide?.chevronDown && (
            <ChevronDown
              swap={{
                vector: <VectorIcon2 className={classes.icon3} />,
              }}
            />
          )}
        </div>
        {!props.hide?.divider && <div className={classes.divider}></div>}
        <div className={classes.content}>
          {!props.hide?.tags && (
            <div className={classes.tags}>
              <Badge_TypeOutlinedColorGraySiz
                classes={{ avatar04: classes.avatar04 }}
                hide={{
                  avatar: false,
                  closeIcon: false,
                }}
                text={{
                  placeholder: <div className={classes.placeholder}>Maria</div>,
                }}
              />
              <Badge_TypeOutlinedColorGraySiz
                swap={{
                  avatar: <Avatar05 className={classes.avatar2} classes={{ avatar05: classes.avatar05 }} />,
                }}
                hide={{
                  avatar: false,
                  closeIcon: false,
                }}
                text={{
                  placeholder: <div className={classes.placeholder2}>Susan</div>,
                }}
              />
              <Badge_TypeOutlinedColorGraySiz
                swap={{
                  avatar: <Avatar06 className={classes.avatar3} classes={{ avatar06: classes.avatar06 }} />,
                }}
                hide={{
                  avatar: false,
                  closeIcon: false,
                }}
                text={{
                  placeholder: <div className={classes.placeholder3}>Alex</div>,
                }}
              />
            </div>
          )}
          <div className={classes.placeholder4}>
            {props.text?.placeholder != null ? (
              props.text?.placeholder
            ) : (
              <div className={classes.placeholder5}>Input</div>
            )}
          </div>
        </div>
        {!props.hide?.divider2 && <div className={classes.divider2}></div>}
        {!props.hide?.trailing && (
          <div className={classes.trailing}>
            <Us
              className={classes.avatar4}
              classes={{ group: classes.group2 }}
              swap={{
                group: (
                  <div className={classes.group2}>
                    <GroupIcon2 className={classes.icon4} />
                  </div>
                ),
              }}
            />
            <Copy
              classes={{ rectangle: classes.rectangle }}
              swap={{
                vector: <VectorIcon3 className={classes.icon5} />,
              }}
            />
            <div className={classes.copy}>Copy</div>
            <QuestionCircle
              swap={{
                vector: <VectorIcon4 className={classes.icon6} />,
                vector2: <VectorIcon5 className={classes.icon7} />,
              }}
            />
          </div>
        )}
      </div>
      {!props.hide?.thisIsAFeedbackMessage && (
        <div className={classes.thisIsAFeedbackMessage}>This is a feedback message</div>
      )}
    </div>
  );
});
