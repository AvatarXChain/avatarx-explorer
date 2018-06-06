import React from 'react';
import DocumentTitle from 'react-document-title';
import { formatMessage } from 'umi/locale';
import { enquireScreen } from 'enquire-js';

import Nav from './Nav';
import Content0 from './Content0';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Footer from './Footer';

import './less/style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !window.location.port,
    };
  }

  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
    // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
    if (window.location.port) {
      // 样式 build 时间在 200-300ms 之间;
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    } 
    
  }

  render() {
    // const children = [
    //   <Nav id="nav" key="nav" isMobile={this.state.isMobile} />,
    //   <Content0 id="content_0" key="content_0" isMobile={this.state.isMobile} />,
    //   <Content1 id="content_1" key="content_1" isMobile={this.state.isMobile} />,
    //   <Content2 id="content_2" key="content_2" isMobile={this.state.isMobile} />,
    //   <Content3 id="content_3" key="content_3" isMobile={this.state.isMobile} />,
    //   <Content4 id="content_4" key="content_4" isMobile={this.state.isMobile} />,
    //   <Content5 id="content_5" key="content_5" isMobile={this.state.isMobile} />,
    //   <Footer id="footer" key="footer" isMobile={this.state.isMobile} />,
    // ];

    return (
      <DocumentTitle title={`AvatarX - ${formatMessage({ id: 'app.common.slogan' })}`}>
        <div className="templates-wrapper">
          Top Wallets
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
