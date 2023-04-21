import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {uploadUserProfile} from "../Redux/reducer-profile";
import {withRouter} from "react-router-dom";
import {apiServices} from "../../api/api";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        apiServices.axiosGetUserProfile(userId)
            .then(response => {
                this.props.uploadUserProfile(response);
            });
    }

    render () {
        return (
            <Profile profile={this.props.profile} userId={this.props.match.params.userId}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

const ProfileContainerWithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {uploadUserProfile})(ProfileContainerWithUrlData);