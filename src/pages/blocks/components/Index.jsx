import React from 'react';
import DocumentTitle from 'react-document-title';
import { formatMessage } from 'umi/locale';
import { enquireScreen } from 'enquire-js';

import './less/style.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});



class Home extends React.Component {

  // static contextTypes = {
  //   intl: PropTypes.object.isRequired,
  //   isMobile: PropTypes.bool.isRequired,
  // }

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
    const { dataSource } = this.props
    console.log(dataSource.blockList)

    return (
      <DocumentTitle title={`AvatarX - ${formatMessage({ id: 'app.common.slogan' })}`}>
        <div className="templates-wrapper">
          item
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
