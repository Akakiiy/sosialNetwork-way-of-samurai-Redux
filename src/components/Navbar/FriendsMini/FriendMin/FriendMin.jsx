import s from './FriendMin.module.css';

const FriendMin = ({state}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}></div>
            <div className={s.name}>{state.name}</div>
        </div>
    );
};

export default FriendMin;