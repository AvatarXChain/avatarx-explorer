import { connect } from 'dva';
import IndexView from './Index.jsx';

const Index = ({ blockList, transactionList }) => {

  return (
    <IndexView blockList={blockList} transactionList={transactionList} />
  );
}

const mapStateToProps = (state) => {
  const { blockList, transactionList } = state.index;

  return {
    blockList,
    transactionList,
  };
}

export default connect(mapStateToProps)(Index);
