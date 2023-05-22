import {Button} from "antd";
import React from "react";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../Redux/store-redux";
import {useDispatch} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

const Settings = () => {
    const dispatch: ThunkDispatch<AppStateType, any, any> = useDispatch();

    const userLogout = () => {
        dispatch(logout())
    }
    return (
        <div>
            <h2 style={{textDecorationStyle: 'solid', marginBottom: '20px'}}>Settings are coming soon!</h2>
            <Button danger onClick={userLogout}>
                Log Out
            </Button>
        </div>
    )
}

export default Settings;