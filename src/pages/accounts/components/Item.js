import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { formatMessage } from 'umi/locale';
import { tokenFormat } from '../../../utils/filters';

import styles from './style.less';

const Index = ({ accountsItem }) => {

  if (!accountsItem || accountsItem.success === false) {
    return null;
  }

  const { account } = accountsItem;

  return (
    <DocumentTitle title={`AvatarX - ${formatMessage({ id: 'app.common.slogan' })}`}>
      <div className="templates-wrapper">
        <div className="content-template">
          <h1>{formatMessage({ id: 'app.accounts.detail.title' })}</h1>
          <div className={`content ${styles['accounts-item']}`}>
            <div className={styles.header}>
              <p>{formatMessage({ id: 'app.accounts.detail.address' })}</p>
              <h3>{account.address}</h3>
            </div>
            <ul className={`clearfix ${styles.detail}`}>
              <li>
                <span>{formatMessage({ id: 'app.accounts.detail.row-balance' })}</span>
                <span>{tokenFormat(account.balance)}</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.accounts.detail.row-lock-height' })}</span>
                <span>{account.lockHeight}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  const { accountsItem } = state.accounts;

  return {
    accountsItem,
  };
}

export default connect(mapStateToProps)(Index);
