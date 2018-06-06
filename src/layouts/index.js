import React from 'react';
import withRouter from 'umi/withRouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { enquireScreen } from 'enquire-js';

import '../assets/less/base.less';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

const Layout = ({ children, location }) => {
  return (
    <div className={'container'}>
      <Header id="header" key="header" isMobile={isMobile} />
      {children}
      <Footer id="footer" key="footer" isMobile={isMobile} />
    </div>
  );
}

export default withRouter(Layout);
