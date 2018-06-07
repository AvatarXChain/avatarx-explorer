import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

class Footer extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: 'footer0',
  };

  getLiChildren = (data, i) => {
    const content = data.children.map((item, ii) => {
      const isImg = item.type === 'img';
      return (<li className={isImg ? 'img' : ''} key={ii}>
        <a href={item.link} target="_blank">
          {isImg ? <img src={item.url} width="100%" alt={item.title} /> : item.title}
        </a>
      </li>);
    });
    return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
      <h2>{data.title}</h2>
      <ul>
        {content}
      </ul>
    </li>);
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const dataSource = [
      { 
        title: <FormattedMessage id="app.footer.product-title" />,
        className: 'product',
        children: [
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.product-child-github" />,
            link: 'https://github.com/AvatarXChain?tab=repositories'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.product-child-block-browser" />,
            link: 'https://explorer.avatarx.io/'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.product-child-web-wallet" />,
            link: '#'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.product-child-dapps" />,
            link: '#content_3'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.product-child-whitepaper" />,
            link: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/file/AvatarX-Whitepaper_zh-CN_v1.0.pdf'
          }
        ],
      },
      {
        title: <FormattedMessage id="app.footer.contact-title" />,
        className: 'contact',
        children: [
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.contact-child-bd" />,
            link: 'mailto:bd@avatarx.io'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.contact-child-support" />,
            link: 'mailto:support@avatarx.io'
          },
          {
            type: 'text',
            title: <FormattedHTMLMessage id="app.footer.contact-child-wechat" />,
            link: ''
          }
        ],
      },
      {
        title: <FormattedMessage id="app.footer.wxmp-title" />,
        className: 'social',
        children: [
          {
            type: 'img',
            title: <FormattedHTMLMessage id="app.footer.product-child-1-title" />,
            url: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/qrcode-wxmp.jpg',
            link: ''
          }
        ],
      },
      {
        title: <FormattedMessage id="app.footer.weibo-title" />,
        className: 'social',
        children: [
          {
            type: 'img',
            title: <FormattedHTMLMessage id="app.footer.product-child-1-title" />,
            url: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/qrcode-wxmp.jpg',
            link: '#'
          }
        ],
      },
    ];
    const liChildrenToRender = dataSource.map(this.getLiChildren);

    return (<OverPack
      {...props}
      component="footer"
      playScale={isMobile ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <p className="logo"></p>
          <p><FormattedMessage id="app.footer.slogan" /></p>
        </li>
        {liChildrenToRender}
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2018 The Project by <a href="https://www.avatarx.io">AvatarX</a>. All Rights Reserved
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default Footer;
