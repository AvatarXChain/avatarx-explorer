import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Link from 'umi/link';
import { FormattedMessage } from 'react-intl';
import { Table, Tabs } from 'antd';
import { limitedStr } from '../../../utils/filters';

import * as AvatarxJS from 'avatarx-js';

const TabPane = Tabs.TabPane;

// import BannerSVGAnim from './BannerSVGAnim';

class Content extends React.Component {

  static defaultProps = {
    className: 'content1',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = { ...this.props };
    delete props.isMobile;

    const columnsBlocks = [
      {
        title: '区块ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={`/blocks/${text}`}>{limitedStr(text, 48)}</Link>,
      }, {
        title: '区块高度',
        dataIndex: 'height',
        key: 'height',
      }, {
        title: '生成日期',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: text => <span>{AvatarxJS.utils.format.fullTimeStamp(text)}</span>,
      }, {
        title: '交易次数',
        dataIndex: 'numberOfTransactions',
        key: 'numberOfTransactions',
        align: 'right',
      }, {
        title: '生产者',
        dataIndex: 'generatorId',
        key: 'generatorId',
        render: text => <Link to={`/blocks/${text}`}>{text}</Link>,
      }, {
        title: '总金额',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'right',
      }, {
        title: '锻造收益',
        dataIndex: 'reward',
        key: 'reward',
        align: 'right',
        render: text => <span>{text / 100000000}</span>,
      }
    ];

    const columnTransactions = [
      {
        title: '区块ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={`/blocks/${text}`}>{limitedStr(text, 48)}</Link>,
      }, {
        title: '区块高度',
        dataIndex: 'height',
        key: 'height',
      }, {
        title: '生成日期',
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: text => <span>{AvatarxJS.utils.format.fullTimeStamp(text)}</span>,
      }, {
        title: '交易次数',
        dataIndex: 'numberOfTransactions',
        key: 'numberOfTransactions',
        align: 'right',
      }, {
        title: '生产者',
        dataIndex: 'generatorId',
        key: 'generatorId',
        render: text => <Link to={`/blocks/${text}`}>{text}</Link>,
      }, {
        title: '总金额',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'right',
      }, {
        title: '锻造收益',
        dataIndex: 'reward',
        key: 'reward',
        align: 'right',
        render: text => <span>{text / 100000000}</span>,
      }
    ];

    console.log(this.props)

    const { dataBlocks, dataTransactions } = this.props;

    console.log(dataBlocks)

    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <div className="inner">
            <Tabs
              defaultActiveKey="1">
              <TabPane tab={<FormattedMessage id="app.home.content1.about" />} key="1">
                <Table
                  columns={columnsBlocks}
                  dataSource={dataBlocks}
                  pagination={false}
                />
              </TabPane>
              <TabPane tab="最新交易" key="2">
                <Table
                  columns={columnTransactions}
                  dataSource={dataTransactions}
                  pagination={false}
                />
              </TabPane>
            </Tabs>
          </div>
        </OverPack>
      </div>
    );
  }
}

export default Content;
