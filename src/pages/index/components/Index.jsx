import React from 'react';
import DocumentTitle from 'react-document-title';
import { formatMessage } from 'umi/locale';

import Content from './Content';

import './less/style.less';

class Home extends React.Component {

  render() {
    const { blockList, transactionList } = this.props

    const children = [
      <Content
        id="content"
        key="content"
        dataBlocks={blockList && blockList.success ? blockList.blocks : []}
        dataTransactions={transactionList && transactionList.success ? transactionList.transactions : []}
      />
    ];

    return (
      <DocumentTitle title={`${formatMessage({ id: 'app.common.slogan' })}`}>
        <div className="templates-wrapper">
          {children}
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
