import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import { tokenFormat } from '../../../utils/filters';
import { Table } from 'antd';

import styles from './style.less';

const Index = ({ accountsTop }) => {

  if (!accountsTop || accountsTop.success === false) {
    return null;
  }

  const { accounts } = accountsTop;

  const columnsBlocks = [
    {
      title: formatMessage({ id: 'app.accounts.top.column-rank' }),
      dataIndex: 'id',
      key: 'id',
      render: (text, record, index) => <span>{index + 1}</span>,
    }, {
      title: formatMessage({ id: 'app.accounts.top.column-address' }),
      dataIndex: 'address',
      key: 'address',
      render: text => <Link to={`/accounts/${text}`}>{text}</Link>,
    }, {
      title: formatMessage({ id: 'app.accounts.top.column-balance' }),
      dataIndex: 'balance',
      key: 'balance',
      align: 'right',
      render: text => <span>{tokenFormat(text)}</span>,
    }, {
      title: formatMessage({ id: 'app.accounts.top.column-percent' }),
      dataIndex: 'publicKey',
      key: 'publicKey',
      render: text => `0%`,
      className: styles['row-public-key'],
    }
  ];

  return (
    <DocumentTitle title={`${formatMessage({ id: 'app.common.slogan' })}`}>
      <div className="templates-wrapper">
        <div className="content-template">
          <h1>{formatMessage({ id: 'app.accounts.top' })}</h1>
          <div className={`content ${styles['content-accounts']}`}>
            <Table
              columns={columnsBlocks}
              dataSource={accounts}
              pagination={false}
            />
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  const { accountsTop } = state.accounts;

  console.log(accountsTop)

  return {
    accountsTop,
  };
}

export default connect(mapStateToProps)(Index);
