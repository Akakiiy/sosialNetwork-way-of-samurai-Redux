import FriendsMini, {FriendsObjType} from "./FriendsMini";
import {connect} from "react-redux";
import {getIsLoggedSelector} from "../../Redux/selectors/auth-selectors";
import {AppStateType} from "../../Redux/store-redux";

type MSTPType = {
    friends: Array<FriendsObjType>
    isLogged: boolean
}
type MDTPType = {}
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        friends: state.sidebar.friends,
        isLogged: getIsLoggedSelector(state),
    };
};

export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, {})(FriendsMini);