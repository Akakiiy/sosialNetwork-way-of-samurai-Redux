import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {uploadUserProfile} from "../Redux/reducer-profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.uploadUserProfile(this.props.match.params.userId); //вытаскиваем ID из URL
    }

    render () {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};

const ProfileContainerWithUrlData = withRouter(ProfileContainer);

export default connect(mapStateToProps, {uploadUserProfile})(ProfileContainerWithUrlData);