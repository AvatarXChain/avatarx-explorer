import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { FormattedMessage } from 'react-intl';

// import BannerSVGAnim from './BannerSVGAnim';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      {
        icon: 'iconfont icon-github',
        title: <FormattedMessage id="app.home.content1.github-title" />,
        content: <FormattedMessage id="app.home.content1.github-content" />,
        link: 'https://github.com/AvatarXChain?tab=repositories',
      }, {
        icon: 'iconfont icon-data',
        title: <FormattedMessage id="app.home.content1.browser-title" />,
        content: <FormattedMessage id="app.home.content1.browser-content" />,
        link: '#',
      }, {
        icon: 'iconfont icon-wallet',
        title: <FormattedMessage id="app.home.content1.wallet-title" />,
        content: <FormattedMessage id="app.home.content1.wallet-content" />,
        link: '#',
      }, {
        icon: 'iconfont icon-message',
        title: <FormattedMessage id="app.home.content1.forum-title" />,
        content: <FormattedMessage id="app.home.content1.forum-content" />,
        link: '#',
      },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, y: '+=10', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <a
          className="item"
          href={item.link}
          target="_blank"
        >
          <TweenOne
            animation={{ y: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
            className="icon"
            key="p"
          >
            <i className={item.icon} />
          </TweenOne>
          <div className="text">
            <TweenOne key="h1" animation={childrenAnim} component="h1">
              {item.title}
            </TweenOne>
            <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
              {item.content}
            </TweenOne>
          </div>
        </a>
      </TweenOne>);
    });

    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
            <FormattedMessage id="app.home.content1.about" />
          </TweenOne>
          <TweenOne
            key="introduce"
            animation={{ ...oneAnim, delay: 100 }}
            component="p"
            id={`${props.id}-about`}
          >
            <FormattedMessage id="app.home.content1.introduce" />
          </TweenOne>
          <TweenOne
            key="about"
            animation={{ ...oneAnim, delay: 100 }}
            component="div"
            className="about-info"
            id={`${props.id}-about`}
          >
          </TweenOne>
          <QueueAnim
            key="list"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
