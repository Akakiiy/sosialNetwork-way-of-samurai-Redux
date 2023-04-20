import {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {uploadUserProfile} from "../Redux/reducer-profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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