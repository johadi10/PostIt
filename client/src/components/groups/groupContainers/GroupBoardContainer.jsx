import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'react-proptypes';
import {
  getGroupUsers,
  getGroupMessages,
  clearGroupMessagesError } from '../../../actions/group/groupActions';
import NullPage from '../NullPage.jsx';
import GroupNotificationBoard from '../GroupNotificationBoard.jsx';
import Page from '../Page.jsx';

/**
 * GroupBoardContainer class declaration
 */
class GroupBoardContainer extends React.Component {
  /**
   * @return {void} void
   */
  componentWillMount() {
    this.props.getGroupMessages(this.props.params.groupId);
    this.props.getGroupUsers(this.props.params.groupId);
  }
  /**
   * renders the component
   * @return {XML} XML
   */
  render() {
    const { groupUsersStore, groupMessages } = this.props.groupState;
    return this.props.tokenStatus.success && groupMessages && groupUsersStore ?
      <Page groupId={this.props.params.groupId}>
        <GroupNotificationBoard
          name={groupUsersStore.name}
          groupId={this.props.params.groupId}/>
      </Page> : <NullPage/>;
  }
}
GroupBoardContainer.propTypes = {
  getGroupMessages: PropTypes.func.isRequired,
  getGroupUsers: PropTypes.func.isRequired,
  groupState: PropTypes.object.isRequired,
  tokenStatus: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  tokenStatus: state.verifyTokenReducer,
  groupState: state.groupReducer
});
const mapDispatchToProps = dispatch => bindActionCreators({
  getGroupMessages, clearGroupMessagesError, getGroupUsers }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(GroupBoardContainer);

