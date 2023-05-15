import {NavLink} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoggedSelector, getLoginSelector} from "../Redux/selectors/auth-selectors";
import {logout} from "../Redux/auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../Redux/store-redux";
import {Col, Layout, Row, Button} from "antd";

const { Header} = Layout;

type PropsType = {
    bgc: string
}

export const AppHeader: React.FC<PropsType> = (props) => {
    const isLogged = useSelector(getIsLoggedSelector);
    const login = useSelector(getLoginSelector);

    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();

    const userLogout = () => {
        dispatch(logout())
    }

    return (
        <Header style={{ padding: 0, textAlign: "center", background: props.bgc }} >
            <Row>
                <Col span={18}></Col>
                {
                    isLogged
                        ? <>
                            <Col span={2}>
                                <Button>
                                    <NavLink to={'/profile'}>{login}</NavLink>
                                </Button>
                            </Col>
                            <Col span={3}>
                                <Button danger onClick={userLogout}>
                                    Log Out
                                </Button>
                            </Col>
                        </>
                        : <Col span={6}>
                            <Button type="primary">
                                <NavLink to={'/login'}>Log In</NavLink>
                            </Button>
                        </Col>
                }
            </Row>
        </Header>
    )
}