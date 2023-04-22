import s from "./Users.module.css";
import profileImgPlug from '../../assets/img/ryan-gosling.jpeg'
import {NavLink} from "react-router-dom";


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
                            <div>
                                <div>
                                    <img className={s.userImg}
                                         src={user.photos.small !== null ? user.photos.small : profileImgPlug}
                                         alt={user.name}/>
                                </div>
                                {user.followed ?
                                    <button disabled={props.areFollowing.some(idBtn => idBtn === user.id)} className={s.buttonUnfollow}
                                            onClick={() => props.unfollow(user.id)}>unfollow</button>
                                    : <button disabled={props.areFollowing.some(idBtn => idBtn === user.id)} className={s.buttonFollow}
                                              onClick={() => props.follow(user.id)}>follow</button>}
                            </div>
                            <div className={s.userInfo}>
                                <NavLink className={s.userName} to={`/profile/${user.id}`}>
                                    {user.name}
                                </NavLink>
                                <div className={s.userStatus}>
                                    {user.status}
                                </div>
                                <div className={s.userLocation}>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Users;