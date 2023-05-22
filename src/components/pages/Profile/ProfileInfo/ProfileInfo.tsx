import s from './ProfileInfo.module.css';
import profileImgPlug from '../../../../assets/img/ryan-gosling.jpeg'
import React, {ChangeEvent, useEffect, useState} from "react";
import ProfileInfoContacts from "./ProfileInfoContacts/ProfileInfoContacts";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Button} from "antd";

type PropsType = {
    profile: ProfileType
    setUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    statusText: string
    isOwner: boolean
}

const ProfileInfo: React.FC<PropsType> = (props) => {

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
    const changeLocalStatus = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setStatus(e.target.value);
    }
    const changeUserPhoto = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target && event.target.files && event.target.files.length > 0) { //здесь идет проверка на null
            props.savePhoto(event.target.files[0]);
        }
        setImgInputEditMode(false);
    };

    return (
        <div>
            <div className={s.profileInfo}>
                <div className={s.imgWrapper}>
                    <img className={s.avaImg} src={(props.profile.photos && props.profile.photos.large) || profileImgPlug}
                         alt={props.profile.fullName || ''}/>
                    {
                        props.isOwner && (imgInputEditMode && <input className={s.inputForImg}
                                                                     type={'file'}
                                                                     onChange={changeUserPhoto}/>)
                    }
                    {props.isOwner && <Button onClick={() => setImgInputEditMode(!imgInputEditMode)}
                                              style={{marginTop: '10px'}} type={"default"} htmlType={"submit"}>
                        {imgInputEditMode ? 'закрыть' : 'сменить фото'}
                    </Button>}
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
                <ProfileInfoContacts profile={props.profile}
                                     isOwner={props.isOwner}/>
            </div>
        </div>
    );
}

export default ProfileInfo;