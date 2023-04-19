import s from "./Users.module.css";
import axios from 'axios';
import profileImgPlug from '../../assets/img/ryan-gosling.jpeg';

const Users = (props) => {

    const getUsersByClick = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => props.setUsers(response.data.items));
            console.log('подгружаю юзверей');
            // props.setUsers([
            //     {
            //         id: 1,
            //         userImgUrl: 'https://uncommonschools.org/wp-content/uploads/2018/02/ryan-gosling-2.jpg',
            //         followStatus: false, userName: 'Ryan G.', userStatus: 'I\'m Ryan Gosling',
            //         location: {country: 'USA', city: 'Los Angeles'},
            //     },
            // ]);
        }
    };

    return (
        <div className={s.usersWrapper}>
            <button onClick={getUsersByClick}>Get Users</button>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={s.user}>
                            <div>
                                <div>
                                    <img className={s.userImg} src={user.photos.small !== null ? user.photos.small : profileImgPlug} alt="user photo"/>
                                </div>
                                {user.followed ?
                                    <button className={s.buttonUnfollow}
                                            onClick={() => props.unfollow(user.id)}>unfollow</button>
                                    : <button className={s.buttonFollow}
                                              onClick={() => props.follow(user.id)}>follow</button>}
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.userName}>
                                    {user.name}
                                </div>
                                <div className={s.userStatus}>
                                    {user.status}
                                </div>
                                <div className={s.userLocation}>
                                    <div>{'user.location.country'}</div>
                                    <div>{'user.location.city'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Users;