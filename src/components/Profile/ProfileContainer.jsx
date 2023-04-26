import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setUserStatus, uploadUserProfile} from "../Redux/reducer-profile";
import {withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";
import {getProfileSelector, getStatusSelector} from "../Redux/selectors/profile-selectors";
import {getUserIdSelector} from "../Redux/selectors/auth-selectors";

class ProfileContainer extends Component {

    componentDidMount () {
        let userId = this.props.match.params.userId     //вытаскиваем ID из URL
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.uploadUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render () {
        return (
            <Profile profile={this.props.profile}
                     statusText={this.props.statusText}
                     setUserStatus={this.props.setUserStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        statusText: getStatusSelector(state),
        userId: getUserIdSelector(state),
    }
};

export default compose(
    connect(mapStateToProps, {uploadUserProfile, getUserStatus, setUserStatus}),
    withRouter,
    WithAuthLogged,
)(ProfileContainer);