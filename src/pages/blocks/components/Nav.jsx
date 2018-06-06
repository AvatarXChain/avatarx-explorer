import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, setLocale, getLocale } from 'umi/locale';

import TweenOne from 'rc-tween-one';
import { Menu, Affix, Button } from 'antd';

const Item = Menu.Item;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneOpen: false,
    };
  }

  phoneClick = () => {
    this.setState({
      phoneOpen: !this.state.phoneOpen,
    });
  }

  handleLangChange = () => {
    const currentLocale = getLocale();
    const targetLocale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN';
    setLocale(targetLocale);
  }

  render() {
    const props = { ...this.props };
    const isMobile = props.isMobile;
    delete props.isMobile;

    const navData = {
      menu1: <FormattedMessage id="app.header.menu.home" />,
      menu2: <FormattedMessage id="app.header.menu.wallets" />,
      menu3: <FormattedMessage id="app.header.menu.delegates" />,
    };

    const navChildren = Object.keys(navData).map((key, i) => (<Item key={i}><a href={`#content_${i}`}>{navData[key]}</a></Item>));

    return (<TweenOne
      component="header"
      animation={{ opacity: 0, type: 'from' }}
      {...props}
    >
      <Affix
        style={{ position: 'absolute', left: '0', right: '0'}}>
        <TweenOne
          className={`${this.props.className}-logo`}
          animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
          component="a"
          href="/"
          id={`${this.props.id}-logo`}
        >
        </TweenOne>
        {isMobile ? (<div
          className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
          id={`${this.props.id}-menu`}
        >
          <Button
            ghost
            size="small"
            className={`${this.props.className}-btn-lang`}
            onClick={this.handleLangChange}
            key="lang-button"
          >
            <FormattedMessage id="app.header.lang" />
          </Button>
          <div
            className={`${this.props.className}-phone-nav-bar`}
            onClick={() => {
              this.phoneClick();
            }}
          >
            <em />
            <em />
            <em />
          </div>
          <div
            className={`${this.props.className}-phone-nav-text`}
          >
            <Menu
              defaultSelectedKeys={['0']}
              mode="inline"
              theme="dark"
            >
              {navChildren}
            </Menu>
          </div>
        </div>) : (<TweenOne
          className={`${this.props.className}-nav`}
          animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
        >
          <Menu
            mode="horizontal" defaultSelectedKeys={['0']}
            id={`${this.props.id}-menu`}
          >
            {navChildren}
          </Menu>
          <Button
            ghost
            size="small"
            className={`${this.props.className}-btn-lang`}
            onClick={this.handleLangChange}
            key="lang-button"
          >
            <FormattedMessage id="app.header.lang" />
          </Button>
        </TweenOne>)}
      </Affix>
    </TweenOne>);
  }
}

Header.propTypes = {
  className: PropTypes.string,
  dataSource: PropTypes.object,
  id: PropTypes.string,
};

Header.defaultProps = {
  className: 'header0',
};

export default Header;
