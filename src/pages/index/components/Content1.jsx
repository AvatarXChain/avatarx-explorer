import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import Link from 'umi/link';
import { FormattedMessage } from 'react-intl';
import { Table, Tabs } from 'antd';
import { limitedStr, tokenFormat, fullTimeStamp } from '../../../utils/filters';

const TabPane = Tabs.TabPane;

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
        title: <FormattedMessage id="app.index.blocks.column-id" />,
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={`/blocks/${text}`}>{limitedStr(text, 40)}</Link>,
      }, {
        title: <FormattedMessage id="app.index.blocks.column-height" />,
        dataIndex: 'height',
        key: 'height',
      }, {
        title: <FormattedMessage id="app.index.blocks.column-timestamp" />,
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: text => fullTimeStamp(text),
      }, {
        title: <FormattedMessage id="app.index.blocks.column-transactions" />,
        dataIndex: 'numberOfTransactions',
        key: 'numberOfTransactions',
        align: 'center',
      }, {
        title: <FormattedMessage id="app.index.blocks.column-generator" />,
        dataIndex: 'generatorId',
        key: 'generatorId',
        render: (text, record) => <Link to={`/accounts/${record.generatorId}`}>{text}</Link>,
      }, {
        title: <FormattedMessage id="app.index.blocks.column-total-amount" />,
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'right',
      }, {
        title: <FormattedMessage id="app.index.blocks.column-reward" />,
        dataIndex: 'reward',
        key: 'reward',
        align: 'right',
        render: text => `${tokenFormat(text)}`,
      }
    ];

    const columnTransactions = [
      {
        title: <FormattedMessage id="app.index.transactions.column-id" />,
        dataIndex: 'id',
        key: 'id',
        render: text => <Link to={`/blocks/${text}`}>{limitedStr(text, 48)}</Link>,
      }, {
        title: <FormattedMessage id="app.index.transactions.column-timestamp" />,
        dataIndex: 'numberOfTransactions',
        key: 'numberOfTransactions',
        align: 'right',
      }, {
        title: <FormattedMessage id="app.index.transactions.column-sender" />,
        dataIndex: 'generatorId',
        key: 'generatorId',
        render: text => <Link to={`/blocks/${text}`}>{text}</Link>,
      }, {
        title: <FormattedMessage id="app.index.transactions.column-recipient" />,
        dataIndex: 'totalAmount',
        key: 'totalAmount',
        align: 'right',
      }, {
        title: <FormattedMessage id="app.index.transactions.column-total-amount" />,
        dataIndex: 'reward',
        key: 'reward',
        align: 'right',
        render: text => tokenFormat(text),
      }, {
        title: <FormattedMessage id="app.index.transactions.column-total-fee" />,
        dataIndex: 'timestamp',
        key: 'timestamp',
        render: text => fullTimeStamp(text),
      }
    ];

    const { dataBlocks, dataTransactions } = this.props;

    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <div className="inner">
            <Tabs
              defaultActiveKey="1">
              <TabPane tab={<FormattedMessage id="app.index.latest-blocks" />} key="1">
                <Table
                  columns={columnsBlocks}
                  dataSource={dataBlocks}
                  pagination={false}
                />
              </TabPane>
              <TabPane tab={<FormattedMessage id="app.index.latest-transactions" />} key="2">
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
