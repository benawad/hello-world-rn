import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actionCreators from '../../actions';
import View from './View';

function mapStateToProps(state) {
  return { 
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(actionCreators, dispatch) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
