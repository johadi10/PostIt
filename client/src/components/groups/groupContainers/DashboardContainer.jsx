import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import { getBoardMessages } from '../../../actions/group/groupActions';
import NullComponent from '../NullComponent';
import MessageBoard from '../MessageBoard';
import Page from '../Page';

/**
 * DashboardContainer class declaration
 * @class DashboardContainer
 * @extends {React.Component}
 */
class DashboardContainer extends React.Component {
  /**
   * @method componentWillMount
   * @return {void}
   */
  componentWillMount() {
    this.props.getBoardMessages();
  }

  /**
   * Renders component
   * @return {XML} JSX
   */
  render() {
    const { boardMessagesStore } = this.props.groupState;
    return this.props.tokenStatus.success && boardMessagesStore ?
      <Page>
        <MessageBoard boardMessages={boardMessagesStore}/>
      </Page> : <NullComponent/>;
  }
}
DashboardContainer.propTypes = {
  groupState: PropTypes.object.isRequired,
  tokenStatus: PropTypes.object.isRequired,
  getBoardMessages: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  tokenStatus: state.verifyTokenReducer,
  groupState: state.groupReducer
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getBoardMessages }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

