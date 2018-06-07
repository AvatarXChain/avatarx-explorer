import { connect } from 'dva';
import DocumentTitle from 'react-document-title';
import { formatMessage } from 'umi/locale';
import { tokenFormat, fullTimeStamp } from '../../../utils/filters';

import styles from './style.less';

const Index = ({ blockItem }) => {

  if (!blockItem || blockItem.success === false) {
    return null;
  }

  const { block } = blockItem;

  return (
    <DocumentTitle title={`AvatarX - ${formatMessage({ id: 'app.common.slogan' })}`}>
      <div className="templates-wrapper">
        <div className="content-template">
          <h1>Block</h1>
          <div className={`content ${styles['content-block']}`}>
            <div className={styles.header}>
              <p>Block Id</p>
              <h3>{block.id}</h3>
            </div>
            <ul className={`clearfix ${styles.detail}`}>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-transactions' })}</span>
                <span>{block.numberOfTransactions}</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-confirmations' })}</span>
                <span>{block.confirmations}</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-height' })}</span>
                <span>{block.height}</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-reward' })}</span>
                <span>{tokenFormat(block.reward)} (ATC)</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-total-fee' })}</span>
                <span>{block.totalFee} (ATC)</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-total-forged' })}</span>
                <span>{tokenFormat(block.totalForged)} (ATC)</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-total-amount' })}</span>
                <span>{block.totalAmount} (ATC)</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-generator' })}</span>
                <span>{block.generatorId}</span>
              </li>
              <li>
                <span>{formatMessage({ id: 'app.blocks.detail.row-timestamp' })}</span>
                <span>{fullTimeStamp(block.timestamp)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
}

const mapStateToProps = (state) => {
  const { blockItem } = state.blocks;

  return {
    blockItem,
  };
}

export default connect(mapStateToProps)(Index);
