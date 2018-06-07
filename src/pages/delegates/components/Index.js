import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import { tokenFormat } from '../../../utils/filters';
import { Table } from 'antd';

import styles from './style.less';

const Index = ({ delegatesList }) => {

  if (!delegatesList || delegatesList.success === false) {
    return null;
  }

  const { delegates } = delegatesList;

  const columnsBlocks = [
    {
      title: formatMessage({ id: 'app.delegates.list.column-rank' }),
      dataIndex: 'rate',
      key: 'rate',
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-name' }),
      dataIndex: 'username',
      key: 'username',
      render: (text, record, index) => <Link to={`/accounts/${record.address}`}>{text}</Link>,
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-forged-blocks' }),
      dataIndex: 'producedblocks',
      key: 'producedblocks',
      align: 'center',
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-missed-blocks' }),
      dataIndex: 'missedblocks',
      key: 'missedblocks',
      align: 'center',
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-rewards' }),
      dataIndex: 'rewards',
      key: 'rewards',
      render: text => tokenFormat(text),
      align: 'right',
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-vote' }),
      dataIndex: 'vote',
      key: 'vote',
      align: 'right',
    },  {
      title: formatMessage({ id: 'app.delegates.list.column-productivity' }),
      dataIndex: 'productivity',
      key: 'productivity',
      render: text => `${text}%`,
      align: 'right',
    }, {
      title: formatMessage({ id: 'app.delegates.list.column-approval' }),
      dataIndex: 'approval',
      key: 'approval',
      render: text => `${text}%`,
      align: 'right',
    }
  ];

  return (
    <DocumentTitle title={`${formatMessage({ id: 'app.common.slogan' })}`}>
      <div className="templates-wrapper">
        <div className="content-template">
          <h1>{formatMessage({ id: 'app.delegates.title' })}</h1>
          <div className={`content ${styles['content-delegates']}`}>
            <Table
              columns={columnsBlocks}
              dataSource={delegates}
            />
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  const { delegatesList } = state.delegates;

  return {
    delegatesList,
  };
}

export default connect(mapStateToProps)(Index);
