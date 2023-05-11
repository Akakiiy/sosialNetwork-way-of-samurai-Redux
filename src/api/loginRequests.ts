import {LoginType} from "../components/Redux/auth-reducer";
import {
    EmptyDataType,
    GetLoginCaptchaType,
    requestsDefault,
    requestsForLoginOrLogout, ResponseData, UserIdDataType,
} from "./api";

export const loginRequests = {
    axiosLoginUser: (data: LoginType) => {
        return requestsForLoginOrLogout.post<ResponseData<UserIdDataType>>('', {...data});
    },
    axiosLogeOutUser: () => {
        return requestsForLoginOrLogout.delete<ResponseData<EmptyDataType>>('');
    },
    getLoginCaptcha: () => {
        return requestsDefault.get<GetLoginCaptchaType>('security/get-captcha-url');
    },
};