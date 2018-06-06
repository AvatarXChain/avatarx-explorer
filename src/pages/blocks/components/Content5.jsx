import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { FormattedMessage } from 'react-intl';

class Content extends React.Component {

  static defaultProps = {
    className: 'content5',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/max.jpg',
        name: <FormattedMessage id="app.home.content5.team-max-name" />,
        title: <FormattedMessage id="app.home.content5.team-max-title" />,
        content: <FormattedMessage id="app.home.content5.team-max-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/tom.jpg',
        name: <FormattedMessage id="app.home.content5.team-tom-name" />,
        title: <FormattedMessage id="app.home.content5.team-tom-title" />,
        content: <FormattedMessage id="app.home.content5.team-tom-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/sun.jpg',
        name: <FormattedMessage id="app.home.content5.team-sun-name" />,
        title: <FormattedMessage id="app.home.content5.team-sun-title" />,
        content: <FormattedMessage id="app.home.content5.team-sun-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/milly.jpg',
        name: <FormattedMessage id="app.home.content5.team-milly-name" />,
        title: <FormattedMessage id="app.home.content5.team-milly-title" />,
        content: <FormattedMessage id="app.home.content5.team-milly-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/peter.jpg',
        name: <FormattedMessage id="app.home.content5.team-peter-name" />,
        title: <FormattedMessage id="app.home.content5.team-peter-title" />,
        content: <FormattedMessage id="app.home.content5.team-peter-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/jing.jpg',
        name: <FormattedMessage id="app.home.content5.team-jing-name" />,
        title: <FormattedMessage id="app.home.content5.team-jing-title" />,
        content: <FormattedMessage id="app.home.content5.team-jing-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/eric.jpg',
        name: <FormattedMessage id="app.home.content5.team-eric-name" />,
        title: <FormattedMessage id="app.home.content5.team-eric-title" />,
        content: <FormattedMessage id="app.home.content5.team-eric-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/sen.jpg',
        name: <FormattedMessage id="app.home.content5.team-sen-name" />,
        title: <FormattedMessage id="app.home.content5.team-sen-title" />,
        content: <FormattedMessage id="app.home.content5.team-sen-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/logo-extent.jpg',
        name: <FormattedMessage id="app.home.content5.team-chen-name" />,
        title: <FormattedMessage id="app.home.content5.team-chen-title" />,
        content: <FormattedMessage id="app.home.content5.team-chen-content" />
      }, {
        image: 'http://avatarx.oss-cn-hangzhou.aliyuncs.com/assets/images/team/logo-extent.jpg',
        name: <FormattedMessage id="app.home.content5.team-feng-name" />,
        title: <FormattedMessage id="app.home.content5.team-feng-title" />,
        content: <FormattedMessage id="app.home.content5.team-feng-content" />
      }
    ];

    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = { ...liAnim, y: '+=5', delay: delay + 100,};
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ y: '-=5', type: 'from', ease: 'easeOutQuad' }}
          className="image"
          key="avatar"
        >
          <div className="inner">
            <img src={item.image} alt="" />
          </div>
        </TweenOne>
        <div className="text">
          <TweenOne key="title" animation={childrenAnim} component="div">
            <h1 className="name">{item.name}</h1>
            <p className="title">{item.title}</p>
          </TweenOne>
          <TweenOne
            key="content"
            className="content"
            animation={{ ...childrenAnim, delay: delay + 200 }}
            component="p"
          >
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
            <FormattedMessage id="app.home.content5.team" />
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
