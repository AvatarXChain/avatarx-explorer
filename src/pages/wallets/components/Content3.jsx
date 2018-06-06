import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popover } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { FormattedMessage } from 'react-intl';

import downloadQR from '../../../assets/images/app-download-qrcode.jpg'

const BgElement = Element.BgElement;
class Content extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'content3',
  };

  handleDownload = () => {
    window.location.href = 'https://kpc.markartisan.com/download';
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const downloadContent = (
      <div className={`${props.className}-download-popover`}>
        <img src={downloadQR} alt="Apple" />
      </div>
    );

    const follow = !isMobile ? {
      delay: 1000,
      minMove: 0.1,
      data: [
        { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
        { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
      ],
    } : null;

    const downloadBtn = !isMobile ? (
      <div>
        <Popover
          content={downloadContent}
          placement="top"
        >
          <Button
            type="primary"
            key="buttonApple"
            size="large"
            icon="apple"
            id={`${props.id}-buttonApple`}
          >
            <FormattedMessage id="app.home.content3.btn-down-apple" />
          </Button>
        </Popover>
        <Popover
          content={downloadContent}
          placement="top"
        >
          <Button
            type="primary"
            key="buttonAndroid"
            size="large"
            icon="android"
            id={`${props.id}-buttonAndroid`}
          >
            <FormattedMessage id="app.home.content3.btn-down-android" />
          </Button>
        </Popover>
      </div>
    ) : (
      <div>
        <Button
          type="primary"
          key="buttonApple"
          size="large"
          icon="apple"
          id={`${props.id}-buttonApple`}
          onClick={this.handleDownload}
        >
          <FormattedMessage id="app.home.content3.btn-down-apple" />
        </Button>
        <Button
          type="primary"
          key="buttonAndroid"
          size="large"
          icon="android"
          id={`${props.id}-buttonAndroid`}
          onClick={this.handleDownload}
        >
          <FormattedMessage id="app.home.content3.btn-down-android" />
        </Button>
      </div>
    );

    const childrenToRender = (<Element
      key="0"
      prefixCls="banner-user-elem"
      followParallax={follow}
    >
      <BgElement
        className="bg bg0"
        key="bg"
        id="bg$0"
        scrollParallax={{ y: 300 }}
      />
      <QueueAnim
        type={['bottom', 'top']}
        className={`${props.className}-title`}
        key="text"
        id={`${props.id}-wrapperBlock0`}
      >
        <span
          className="logo"
          key="logo"
          id={`${props.id}-titleBlock0`}
        >
          <FormattedMessage id="app.home.content3.kpc-name" />
        </span>
        <p
          className="intro"
          key="content"
          id={`${props.id}-contentBlock0`}
        >
          <FormattedMessage id="app.home.content3.kpc-intro" />
        </p>
        {downloadBtn}
      </QueueAnim>
    </Element>);

    return (
      <OverPack
        {...props}
      >
        <TweenOneGroup
          key="banner"
          enter={{ opacity: 0, type: 'from' }}
          leave={{ opacity: 0 }}
          component=""
        >
          <BannerAnim
            key="banner"
          >
            {childrenToRender}
          </BannerAnim>
        </TweenOneGroup>
      </OverPack>
    );
  }
}

export default Content;
