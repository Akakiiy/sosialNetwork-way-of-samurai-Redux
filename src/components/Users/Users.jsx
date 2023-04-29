import s from "./Users.module.css";
import User from "./User/User";
import UsersPagesPaginator from "./UsersPagesPaginator";


const Users = (props) => {

    return (
        <div className={s.usersWrapper}>
            <UsersPagesPaginator uploadingUsersCount={props.uploadingUsersCount}
                                 totalUsersCount={props.totalUsersCount}
                                 currentPage={props.currentPage}
                                 changePage={props.changePage}
                                 countPagesInABlock={10} />
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={s.user}>
                            <User id={user.id}
                                  photos={user.photos}
                                  name={user.name}
                                  followed={user.followed}
                                  status={user.status}
                                  areFollowing={props.areFollowing}
                                  unfollow={props.unfollow}
                                  follow={props.follow}/>
                        </div>
                        )
                })
            }
        </div>
    );
}

export default Users;