import { connect } from 'dva';
import IndexView from './Index.jsx';

const Index = (blockList) => {

  return (
    <IndexView dataSource={blockList}/>
  );
}

const mapStateToProps = (state) => {
  const { blockList } = state.index;

  return {
    blockList,
  };
}

export default connect(mapStateToProps)(Index);
