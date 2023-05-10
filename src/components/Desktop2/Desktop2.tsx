import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _input } from './_input/_input';
import { _navActiveLink } from './_navActiveLink/_navActiveLink';
import { _navLink } from './_navLink/_navLink';
import { ArrowDownRight } from './ArrowDownRight/ArrowDownRight';
import { Badge_TypeOutlinedColorGraySiz } from './Badge_TypeOutlinedColorGraySiz/Badge_TypeOutlinedColorGraySiz';
import { Badge_TypeSoftColorGraySizeDef } from './Badge_TypeSoftColorGraySizeDef/Badge_TypeSoftColorGraySizeDef';
import { Button_StyleSolidColorBlueStat } from './Button_StyleSolidColorBlueStat/Button_StyleSolidColorBlueStat';
import { ChevronDown } from './ChevronDown/ChevronDown';
import { Copy } from './Copy/Copy';
import classes from './Desktop2.module.css';
import { DocsDividerHorizontal } from './DocsDividerHorizontal/DocsDividerHorizontal';
import { Envelope } from './Envelope/Envelope';
import { HandIndexThumb } from './HandIndexThumb/HandIndexThumb';
import { PlusCircle } from './PlusCircle/PlusCircle';
import { QuestionCircle } from './QuestionCircle/QuestionCircle';
import { Us } from './Us/Us';
import { VectorIcon2 } from './VectorIcon2.js';
import { VectorIcon3 } from './VectorIcon3.js';
import { VectorIcon4 } from './VectorIcon4.js';
import { VectorIcon5 } from './VectorIcon5.js';
import { VectorIcon6 } from './VectorIcon6.js';
import { VectorIcon7 } from './VectorIcon7.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  hide?: {
    house?: boolean;
    badge?: boolean;
    chevronDown?: boolean;
    borderBottom?: boolean;
    house2?: boolean;
    badge2?: boolean;
    chevronDown2?: boolean;
    borderBottom2?: boolean;
    house3?: boolean;
    badge3?: boolean;
    chevronDown3?: boolean;
    borderBottom3?: boolean;
    house4?: boolean;
    badge4?: boolean;
    chevronDown4?: boolean;
    borderBottom4?: boolean;
    house5?: boolean;
    badge5?: boolean;
    chevronDown5?: boolean;
    borderBottom5?: boolean;
    secondary?: boolean;
    avatar?: boolean;
    email?: boolean;
    chevronDown6?: boolean;
    divider?: boolean;
    tags?: boolean;
    divider2?: boolean;
    trailing?: boolean;
    thisIsAFeedbackMessage?: boolean;
    avatar2?: boolean;
    house6?: boolean;
    divider3?: boolean;
    badge6?: boolean;
    divider4?: boolean;
    chevronRight?: boolean;
    avatar3?: boolean;
  };
}
/* @figmaId 1827:26011 */
export const Desktop2: FC<Props> = memo(function Desktop2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.types}>
        <div className={classes._headerNavbar}>
          <div className={classes.container}>
            <div className={classes.logo}>
              <div className={classes.group351}></div>
            </div>
            <div className={classes.nav}>
              <div className={classes.links}>
                <_navActiveLink
                  classes={{ content: classes.content }}
                  hide={{
                    house: true,
                    badge: true,
                    chevronDown: true,
                    borderBottom: true,
                  }}
                  text={{
                    placeholder: <div className={classes.placeholder}>Home</div>,
                  }}
                />
                <_navLink
                  classes={{ content: classes.content2 }}
                  hide={{
                    house: true,
                    badge: true,
                    chevronDown: true,
                    borderBottom: true,
                  }}
                  text={{
                    placeholder: <div className={classes.placeholder2}>Projects</div>,
                  }}
                />
                <_navLink
                  classes={{ content: classes.content3 }}
                  hide={{
                    house: true,
                    badge: true,
                    chevronDown: true,
                    borderBottom: true,
                  }}
                  text={{
                    placeholder: <div className={classes.placeholder3}>Capabilities</div>,
                  }}
                />
                <_navLink
                  classes={{ content: classes.content4 }}
                  hide={{
                    house: true,
                    badge: true,
                    chevronDown: true,
                    borderBottom: true,
                  }}
                  text={{
                    placeholder: <div className={classes.placeholder4}>The Team</div>,
                  }}
                />
                <_navLink
                  classes={{ content: classes.content5 }}
                  hide={{
                    house: true,
                    badge: true,
                    chevronDown: true,
                    borderBottom: true,
                  }}
                  text={{
                    placeholder: <div className={classes.placeholder5}>Contact </div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle1}></div>
      <div className={classes.frame36}>
        <div className={classes.design}>Design.</div>
        <div className={classes.development}>Development.</div>
        <div className={classes.knowledge}>Knowledge.</div>
      </div>
      <div className={classes.projects}>Projects</div>
      <div className={classes.capabilities}>Capabilities </div>
      <div className={classes.frame362}>
        <div className={classes.frame38}>
          <div className={classes.recipe}>Recipe </div>
        </div>
        <div className={classes.tablesdish}>Tablesdish</div>
      </div>
      <div className={classes.frame382}>
        <div className={classes.frame383}>
          <div className={classes.resturant}>Resturant</div>
        </div>
        <div className={classes.ariaMgmresorts}>Aria.mgmresorts</div>
      </div>
      <div className={classes.buildingStunningProductsCreati}>
        Building stunning products, creating attractive websites
      </div>
      <ArrowDownRight
        className={classes.arrowDownRight}
        swap={{
          vector: <VectorIcon className={classes.icon} />,
        }}
      />
      <div className={classes.frame37}>
        <div className={classes.rectangle2}></div>
        <div className={classes.rectangle4}></div>
      </div>
      <div className={classes._accordion}>
        <div className={classes.inline}>
          <div className={classes.content6}>
            <div className={classes.placeholder8}>Website Design</div>
          </div>
          <PlusCircle
            className={classes.plusCircle}
            swap={{
              vector: <VectorIcon2 className={classes.icon2} />,
              vector2: <VectorIcon3 className={classes.icon3} />,
            }}
          />
        </div>
      </div>
      <div className={classes._accordion2}>
        <div className={classes.inline2}>
          <div className={classes.content7}>
            <div className={classes.placeholder9}>Website Development</div>
          </div>
          <PlusCircle
            className={classes.plusCircle2}
            swap={{
              vector: <VectorIcon4 className={classes.icon4} />,
              vector2: <VectorIcon5 className={classes.icon5} />,
            }}
          />
        </div>
      </div>
      <div className={classes._accordion3}>
        <div className={classes.inline3}>
          <div className={classes.content8}>
            <div className={classes.placeholder10}>Website Maintenance</div>
          </div>
          <PlusCircle
            className={classes.plusCircle3}
            swap={{
              vector: <VectorIcon6 className={classes.icon6} />,
              vector2: <VectorIcon7 className={classes.icon7} />,
            }}
          />
        </div>
      </div>
      <div className={classes.line1}></div>
      <div className={classes.line2}></div>
      <div className={classes.line3}></div>
      <div className={classes.getInTouch}>Get in Touch</div>
      <div className={classes.input2}>
        <_input
          className={classes._input}
          classes={{ input: classes.input }}
          hide={{
            secondary: true,
            avatar: true,
            email: true,
            chevronDown: true,
            divider: true,
            tags: true,
            divider2: true,
            trailing: true,
            thisIsAFeedbackMessage: true,
          }}
          text={{
            label: <div className={classes.label}>Email</div>,
            placeholder: <div className={classes.placeholder6}>you@site.com</div>,
          }}
        />
      </div>
      <div className={classes.input3}>
        <div className={classes._input2}>
          <div className={classes.label2}>
            <div className={classes.label3}>Message</div>
          </div>
          <div className={classes.input4}>
            <div className={classes.leading}></div>
            <div className={classes.content9}></div>
          </div>
        </div>
      </div>
      <Button_StyleSolidColorBlueStat
        className={classes.button}
        text={{
          placeholder: <div className={classes.placeholder7}>Send Message</div>,
        }}
      />
      <div className={classes.rectangle5}></div>
      <div className={classes.docsFooter}>
        <div className={classes.list}>
          <div className={classes.logo2}>
            <div className={classes.group3512}></div>
          </div>
          <div className={classes._2022PrelineAProductOfHtmlstrea}>© 2023 Lab 54</div>
          <div className={classes.prelineUIIsAnOpenSourceFigmaUI}>Enter text here</div>
        </div>
      </div>
    </div>
  );
});
