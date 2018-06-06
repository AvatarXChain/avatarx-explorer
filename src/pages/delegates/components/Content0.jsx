import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import Background from './Background';

class Content extends React.Component {
  render() {
    const props = { ...this.props };
    delete props.isMobile;
    return (
      <OverPack
        playScale={[0.3, 0.1]}
        {...props}
      >
        <Background />
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="logo"
            key="logo"
            id={`${props.id}-logo`}
          >
          </span>
          <h3
            className="name"
            key="name"
            id={`${props.id}-name`}
          >
            AvatarX
          </h3>
          <p
            className="slogan"
            key="content"
            id={`${props.id}-content`}
          >
            <FormattedMessage id="app.home.content0.slogan" />
          </p>
          <a
            href="http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/file/AvatarXWhitePaper_zh-CN_v1.0.pdf"
            className="btn-action"
            rel="noopener noreferrer"
            key="button1"
            target="_blank"
          >
            <FormattedMessage id="app.home.content0.btn-white-paper" />
          </a>
          <a
            href="#content_3"
            className="btn-action"
            key="button2"
          >
            <FormattedMessage id="app.home.content0.btn-app-download" />
          </a>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
