import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img className={s.headerLogo}
                 src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420"
                 alt="header img"/>
            <div className={s.loggingDiv}>
                {
                    props.isLoading ?
                        <div className={s.loading}>
                            <Preloader />
                        </div> : null
                }
                {
                    props.isLogged
                        ? <>
                            <NavLink to={'/profile'}>{props.login}</NavLink>
                            <button onClick={props.logout}>Log Out</button>
                        </>
                        : <NavLink to={'/login'}>Log In</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;