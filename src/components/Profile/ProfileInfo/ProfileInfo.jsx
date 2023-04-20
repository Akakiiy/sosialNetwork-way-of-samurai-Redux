import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={s.profileHeaderImg} src="https://www.film.ru/sites/default/files/styles/thumb_og_800x420/public/49626676-1248483.jpg" alt="GOSLING"/>
            </div>
            <div className={s.profileInfo}>
                <img className={s.avaImg} src={props.profile.data.photos.large} alt={props.profile.data.fullName} />
                <div>
                    <div className={s.fullName}>{props.profile.data.fullName}</div>
                    <div className={s.description}><span>About Me:</span> {props.profile.data.aboutMe}</div>
                </div>
                <div className={s.contacts}>
                    My contacts:
                    <div className={s.link}><span>facebook</span> -> { props.profile.data.contacts.facebook || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>website</span> -> { props.profile.data.contacts.website || 'у меня его нет :)'}</div>
                    <div className={s.link}><span>vk</span> -> { props.profile.data.contacts.vk || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>twitter</span> -> { props.profile.data.contacts.twitter || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>instagram</span> -> { props.profile.data.contacts.instagram || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>youtube</span> -> { props.profile.data.contacts.youtube || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>github</span> -> { props.profile.data.contacts.github || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>My main link</span> -> { props.profile.data.contacts.mainLink || 'у меня её нет :)'}</div>
                </div>
            </div>
            <hr/> {/*!!! внимание тут стоит рандомная черта, чтоб визуально видеть конец дива, можно убрать в любой момент !!!*/}
        </div>
    );
};

export default ProfileInfo;