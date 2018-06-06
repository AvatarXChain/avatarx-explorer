import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { FormattedMessage } from 'react-intl';
import { Progress } from 'antd';

class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const queue = isMobile ? 'bottom' : 'left';
    const imgAnim = isMobile ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };

    const blockArray = [
      {
        title: <FormattedMessage id="app.home.content4.list-item-1-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-1-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-2-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-2-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-3-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-3-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-4-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-4-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-5-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-5-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-6-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-6-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-7-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-7-content" />
      }, {
        title: <FormattedMessage id="app.home.content4.list-item-8-title" />,
        content: <FormattedMessage id="app.home.content4.list-item-8-content" />
      },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, y: '+=1', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          key="title"
          animation={{ y: '-=1', type: 'from', ease: 'easeOutQuad' }}
          className="title"
          component="p"
        >
          {item.title}
        </TweenOne>
        <TweenOne
          key="content"
          className="content"
          animation={{ ...childrenAnim, delay: delay + 200 }}
          component="p"
        >
          <i className="circle"></i>
          {item.content}
        </TweenOne>
      </TweenOne>);
    });

    const progressArray = [
      {
        title: 100,
        content: <FormattedMessage id="app.home.content4.progress-item-ava" />
      }, {
        title: 25,
        content: <FormattedMessage id="app.home.content4.progress-item-mainnet" />
      }, {
        title: 75,
        content: <FormattedMessage id="app.home.content4.progress-item-wallet" />
      }, {
        title: 80,
        content: <FormattedMessage id="app.home.content4.progress-item-block-browser" />
      }
    ];
    const progress = progressArray.map((item, i) => {
      const id = `progress${i}`;
      const delay = this.getDelay(i);
      const liAnim = { type: 'from', ease: 'easeOutQuad', delay };
      // const childrenAnim = { ...liAnim, y: '+=1', delay: delay + 100,};

      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
        className="item"
      >
        <Progress type="circle" percent={item.title} />
        <p className="content">{item.content}</p>
      </TweenOne>);
    });

    return (
      <div {...props} className="content-template-wrapper content4-wrapper">
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
            <FormattedMessage id="app.home.content4.roadmap" />
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <QueueAnim
              component="ul"
              key="ulTimeline"
              className="timeline"
              type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {children}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <QueueAnim
              component="ul"
              key="ulProgress"
              className="progress"
              type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {progress}
            </QueueAnim>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;
