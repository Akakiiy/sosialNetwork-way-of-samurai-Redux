import s from './ProfileInfo.module.css';
import profileImgPlug from '../../../assets/img/ryan-gosling.jpeg'
import React, {useEffect, useState} from "react";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.statusText)

    useEffect(() => {
        setStatus(props.statusText);
    }, [props.statusText]);

    const showTextarea = () => {
        setEditMode(true);
    };
    const hideTextarea = () => {
        setEditMode(false)
        props.setUserStatus(status);
    };
    const changeLocalStatus = (e) => {
        setStatus(e.target.value);
    }

    const changeUserPhoto = (e) => {
        if (e.target.files.length > 0) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <img className={s.avaImg} src={props.profile.photos.large || profileImgPlug}
                     alt={props.profile.fullName}/>

                <div>
                    <div className={s.fullName}>{props.profile.fullName}</div>

                    <input type={'file'} placeholder={'доьавить фото'} onChange={changeUserPhoto}/>

                    <div className={s.description}>
                        <span>Status:</span>
                        <div>
                            {
                                editMode
                                    ? <textarea className={s.statusTextarea}
                                                autoFocus={true}
                                                value={status}
                                                onChange={changeLocalStatus}
                                                onBlur={hideTextarea}></textarea>
                                    : <div onDoubleClick={showTextarea}>{props.statusText || '_______'}</div>
                            }
                        </div>
                    </div>
                </div>
                <div className={s.contacts}>
                    My contacts:
                    <div className={s.link}>
                        <span>facebook</span> -> {props.profile.contacts.facebook || 'меня тут нет :)'}</div>
                    <div className={s.link}>
                        <span>website</span> -> {props.profile.contacts.website || 'у меня его нет :)'}</div>
                    <div className={s.link}><span>vk</span> -> {props.profile.contacts.vk || 'меня тут нет :)'}</div>
                    <div className={s.link}>
                        <span>twitter</span> -> {props.profile.contacts.twitter || 'меня тут нет :)'}</div>
                    <div className={s.link}>
                        <span>instagram</span> -> {props.profile.contacts.instagram || 'меня тут нет :)'}</div>
                    <div className={s.link}>
                        <span>youtube</span> -> {props.profile.contacts.youtube || 'меня тут нет :)'}</div>
                    <div className={s.link}><span>github</span> -> {props.profile.contacts.github || 'меня тут нет :)'}
                    </div>
                    <div className={s.link}>
                        <span>My main link</span> -> {props.profile.contacts.mainLink || 'у меня её нет :)'}</div>
                </div>
            </div>
            <hr/>
            {/*!!! внимание тут стоит рандомная черта, чтоб визуально видеть конец дива, можно убрать в любой момент !!!*/}
        </div>
    );
}

export default ProfileInfo;