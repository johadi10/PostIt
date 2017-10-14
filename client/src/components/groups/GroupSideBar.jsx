import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';
import UserDetail from './UserDetail.jsx';

/**
 * GroupSideBar class declaration
 */
class GroupSideBar extends React.Component {
  /**
   * renders the component
   * @return {XML} XML/JSX
   */
  render() {
    return (
        <div className="col-md-push-2 col-md-3 col-sm-12 col-xs-12 well">
          <p>
            <Link className="btn btn-block btn-lg navy-header">
              Activities
            </Link>
            <Link to={`/group/${this.props.groupId}/board`}
                  className="btn btn-default btn-block">
              <i className="fa fa-envelope-open text-display" aria-hidden="true">
              </i> Group notifications
            </Link>
            <Link to={`/group/${this.props.groupId}/message`}
                  className="btn btn-default btn-block">
              <i className="fa fa-pencil-square text-display" aria-hidden="true">
              </i> Send notification here
            </Link>
            <Link to={`/group/${this.props.groupId}/add`}
                  className="btn btn-default btn-block">
              <i className="fa fa-user-plus text-display" aria-hidden="true">
              </i> Add User to group
            </Link>
            <Link to={`/group/${this.props.groupId}/users`}
                  className="btn btn-default btn-block">
              <i className="fa fa-users text-display" aria-hidden="true">
              </i> Group members
            </Link>
          </p>
          <hr/>
          <UserDetail userDetail={this.props.tokenStatus.userDetail} />
        </div>
    );
  }
}
GroupSideBar.propTypes = {
  groupId: PropTypes.string.isRequired,
  tokenStatus: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  tokenStatus: state.verifyTokenReducer
});
export default connect(mapStateToProps)(GroupSideBar);
