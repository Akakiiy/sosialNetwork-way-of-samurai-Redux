import s from "./Users.module.css";
import User from "./User/User";


const Users = (props) => {

    return (
        <div className={s.usersWrapper}>
            <div className={s.pages}>
                {
                    props.pages.map(page => {
                        return <button className={props.currentPage === +page ? s.activePage : s.page}
                                       key={page}
                                       onClick={() => props.changePage(page)}>{page}</button>
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={s.user}>
                            <User id={user.id}
                                  photos={user.photos}
                                  name={user.name}
                                  followed={user.followed}
                                  status={user.status}
                                  areFollowing={props.areFollowing}/>
                        </div>
                        )
                })
            }
        </div>
    );
}

export default Users;