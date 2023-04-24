import s from './ProfileInfo.module.css';
import profileImgPlug from '../../../assets/img/ryan-gosling.jpeg'
import React from "react";
import Preloader from "../../common/Preloader/Preloader";

class ProfileInfo extends React.Component {

    state = {
        editMode: false,
        status: this.props.statusText,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.statusText !== this.props.statusText) {
            this.setState({
                status: this.props.statusText,
            });
        }
    }

    showTextarea = () => {
        this.setState({
            editMode: true
        });
    };
    hideTextarea = () => {
        this.setState({
            editMode: false
        });
        this.props.setUserStatus(this.state.status);
    };
    changeLocalStatus = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    render () {

        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <div>
                <div>
                    {/*<img className={s.profileHeaderImg} src="https://phonoteka.org/uploads/posts/2021-07/1625336175_20-phonoteka-org-p-raian-gosling-oboi-oboi-krasivo-21.jpg" alt="GOSLING"/>*/}
                </div>
                <div className={s.profileInfo}>
                    <img className={s.avaImg} src={this.props.profile.data.photos.large || profileImgPlug} alt={this.props.profile.data.fullName} />
                    <div>
                        <div className={s.fullName}>{this.props.profile.data.fullName}</div>
                        <div className={s.description}>
                            <span>Status:</span>
                            <div>
                                {
                                    this.state.editMode
                                        ? <textarea className={s.statusTextarea}
                                                    autoFocus={true}
                                                    value={this.state.status}
                                                    onChange={this.changeLocalStatus}
                                                    onBlur={this.hideTextarea}></textarea>
                                        : <div onDoubleClick={this.showTextarea}>{this.props.statusText || '_______'}</div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        My contacts:
                        <div className={s.link}><span>facebook</span> -> { this.props.profile.data.contacts.facebook || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>website</span> -> { this.props.profile.data.contacts.website || 'у меня его нет :)'}</div>
                        <div className={s.link}><span>vk</span> -> { this.props.profile.data.contacts.vk || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>twitter</span> -> { this.props.profile.data.contacts.twitter || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>instagram</span> -> { this.props.profile.data.contacts.instagram || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>youtube</span> -> { this.props.profile.data.contacts.youtube || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>github</span> -> { this.props.profile.data.contacts.github || 'меня тут нет :)'}</div>
                        <div className={s.link}><span>My main link</span> -> { this.props.profile.data.contacts.mainLink || 'у меня её нет :)'}</div>
                    </div>
                </div>
                <hr/> {/*!!! внимание тут стоит рандомная черта, чтоб визуально видеть конец дива, можно убрать в любой момент !!!*/}
            </div>
        );
    }
}

export default ProfileInfo;