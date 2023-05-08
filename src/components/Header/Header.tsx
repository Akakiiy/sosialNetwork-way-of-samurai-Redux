import {NavLink} from "react-router-dom";
import * as React from "react";
import classNames from "classnames";
import s from "./Header.module.css";

type PropsType = {
    isLogged: boolean
    login: string | null
    logout: () => void
}

const Header: React.FC<PropsType> = (props) => {

    return (
        <header className={classNames(s.header)}>
            <img className={classNames(s.headerLogo)}
                 src="https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/865d2d0e-bac6-4a78-a0ed-17a87b285069/280x420"
                 alt="header img"/>
            <div className={classNames(s.loggingDiv)}>
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