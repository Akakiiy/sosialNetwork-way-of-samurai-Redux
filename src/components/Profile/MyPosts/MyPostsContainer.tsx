import {profileActions} from "../../Redux/profile-reducer";
import MyPosts, {PostType} from "./MyPosts";
import {connect} from "react-redux";
import {getPostsSelector} from "../../Redux/selectors/profile-selectors";
import {AppStateType} from "../../Redux/store-redux";

type MSTPType = {
    posts: Array<PostType>
}
type MDTPType = {
    addPost: (newPostText: string) => void
}
type OwnPropsType = {}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        posts: getPostsSelector(state),
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (postMessage: string) => dispatch(profileActions.addPost(postMessage))
    }
}

export default connect<MSTPType, MDTPType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)