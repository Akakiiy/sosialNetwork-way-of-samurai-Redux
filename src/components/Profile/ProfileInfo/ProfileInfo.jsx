import s from './ProfileInfo.module.css';
import profileImgPlug from '../../../assets/img/ryan-gosling.jpeg'
import React, {useEffect, useState} from "react";
import ProfileInfoContacts from "./ProfileInfoContacts/ProfileInfoContacts";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.statusText);
    let [imgInputEditMode, setImgInputEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.statusText);
    }, [props.statusText]);

    const showTextarea = () => {
        if (props.isOwner) {
            setEditMode(true);
        }
    };
    const hideTextarea = () => {
        setEditMode(false)
        props.setUserStatus(status);
    };
    const changeLocalStatus = (e) => {
        setStatus(e.target.value);
    }

    const changeUserPhoto = (event) => {
        if (event.target.files.length > 0) {
            props.savePhoto(event.target.files[0]);
        }
        setImgInputEditMode(false);
    }

    return (
        <div>
            <div className={s.profileInfo}>
                <div className={s.imgWrapper}>
                    <img className={s.avaImg} src={props.profile.photos.large || profileImgPlug}
                         alt={props.profile.fullName}/>
                    {
                        props.isOwner && (imgInputEditMode && <input className={s.inputForImg}
                                                                     type={'file'}
                                                                     onChange={changeUserPhoto}/>)
                    }
                    <button className={s.changePhoto}
                            onClick={() => setImgInputEditMode(!imgInputEditMode)}>{imgInputEditMode ? 'закрыть' : 'сменить фото'}</button>
                </div>
                <div>
                    <div className={s.fullName}>{props.profile.fullName}</div>
                    <div className={s.description}>
                        <span>Status:</span>
                        <div className={s.statusText}>
                            {
                                (props.isOwner && editMode)
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
                <ProfileInfoContacts contacts={props.profile.contacts}
                                     lookingForAJob={props.profile.lookingForAJob}
                                     lookingForAJobDescription={props.profile.lookingForAJobDescription}
                                     isOwner={props.isOwner}/>
            </div>
            <hr/>
            {/*!!! внимание тут стоит рандомная черта, чтоб визуально видеть конец дива, можно убрать в любой момент !!!*/}
        </div>
    );
}

export default ProfileInfo;