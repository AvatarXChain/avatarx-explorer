import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { FormattedMessage } from 'react-intl';
import { Table } from 'antd';

// import BannerSVGAnim from './BannerSVGAnim';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;

    const columns = [
      {
        title: '区块ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '区块高度',
        dataIndex: 'height',
        key: 'height',
      }, {
        title: '生成日期',
        dataIndex: 'timestamp',
        key: 'timestamp',
      }, {
        title: '交易次数',
        dataIndex: 'numberOfTransactions',
        key: 'numberOfTransactions',
      }, {
        title: '生产者',
        dataIndex: 'generatorId',
        key: 'generatorId',
        render: text => <a href="javascript:;">{text}</a>,
      }, {
        title: '总金额',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
      }, {
        title: '锻造收益',
        dataIndex: 'reward',
        key: 'reward',
      }
    ];

    const { dataSource } = this.props;

    console.log(dataSource)

    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <h1><FormattedMessage id="app.home.content1.about" /></h1>
          <div className="inner">
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={false} />
          </div>
        </OverPack>
      </div>
    );
  }
}

export default Content;
