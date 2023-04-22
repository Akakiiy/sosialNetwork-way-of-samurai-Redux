import {Component} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {changeProfileStatus, uploadUserProfile} from "../Redux/reducer-profile";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthLogged} from "../hoc/withAuthLogged";
import {compose} from "redux";

class ProfileContainer extends Component {

    componentDidMount () {
        this.props.uploadUserProfile(this.props.match.params.userId); //вытаскиваем ID из URL
    }

    render () {
        if (!this.props.isLogged) {
            return <Redirect to={'/login'} />
        }
        return (
            <Profile profile={this.props.profile}
                     statusText={this.props.statusText}
                     changeProfileStatus={this.props.changeProfileStatus}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        statusText: state.profilePage.statusText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        uploadUserProfile: () => {
            dispatch(uploadUserProfile());
        },
        changeProfileStatus: (e) => {
            let text = e.currentTarget.value;
            dispatch(changeProfileStatus(text))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthLogged,
)(ProfileContainer);