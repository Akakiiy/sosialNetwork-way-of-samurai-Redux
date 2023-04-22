import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {uploadUserProfile} from "../Redux/reducer-profile";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.uploadUserProfile(this.props.match.params.userId); //вытаскиваем ID из URL
    }

    render () {
        if (!this.props.isLogged) {
            return <Redirect to={'/login'} />
        }
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

export default compose(
    connect(mapStateToProps, {uploadUserProfile}),
    withRouter,
    WithAuthLogged,
)(ProfileContainer);