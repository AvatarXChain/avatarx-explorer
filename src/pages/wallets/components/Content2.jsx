import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { FormattedMessage } from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      {
        icon: 'iconfont icon-network',
        title: <FormattedMessage id="app.home.content2.innovation1-title" />,
        content: <FormattedMessage id="app.home.content2.innovation1-content" />
      }, {
        icon: 'iconfont icon-data',
        title: <FormattedMessage id="app.home.content2.innovation2-title" />,
        content: <FormattedMessage id="app.home.content2.innovation2-content" />
      }, {
        icon: 'iconfont icon-mix',
        title: <FormattedMessage id="app.home.content2.innovation3-title" />,
        content: <FormattedMessage id="app.home.content2.innovation3-content" />
      }, {
        icon: 'iconfont icon-ai',
        title: <FormattedMessage id="app.home.content2.innovation4-title" />,
        content: <FormattedMessage id="app.home.content2.innovation4-content" />
      }, {
        icon: 'iconfont icon-custom',
        title: <FormattedMessage id="app.home.content2.innovation5-title" />,
        content: <FormattedMessage id="app.home.content2.innovation5-content" />
      }, {
        icon: 'iconfont icon-develop',
        title: <FormattedMessage id="app.home.content2.innovation6-title" />,
        content: <FormattedMessage id="app.home.content2.innovation6-content" />
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
        <TweenOne
          animation={{ y: '-=10', type: 'from', ease: 'easeOutQuad' }}
          className="icon"
          key="icon"
        >
          <i className={item.icon} />
        </TweenOne>
        <div className="text">
          <TweenOne key="title" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={{ ...childrenAnim, delay: delay + 200 }} component="p">
            {item.content}
          </TweenOne>
        </div>
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
            <FormattedMessage id="app.home.content2.innovation" />
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
