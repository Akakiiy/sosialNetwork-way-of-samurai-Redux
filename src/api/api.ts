import axios from "axios";
import {ProfileType} from "../components/Redux/profile-reducer";
import {LoginType} from "../components/Redux/auth-reducer";
import {UserType} from "../components/Redux/users-reducer";

const _baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const requestsDefault = axios.create({
    withCredentials: true,
    baseURL: _baseUrl,
    headers: {
        'API-KEY': '7e3596fa-e159-4992-8549-28337e60901c',
    }
});
const requestsForCheckLogin = axios.create({
    baseURL: _baseUrl + 'auth/me',
    withCredentials: true,
});
const requestsForLoginOrLogout = axios.create({
    baseURL: _baseUrl + 'auth/login',
    withCredentials: true,
});
const requestsForUserProfile = axios.create({
    baseURL: _baseUrl,
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaError = 10
}
type ResponseMessagesEmptyData = {
    resultCode: ResultCodeEnum
    messages: Array<string | void>
    data: {} //идет из документации АПИ, возможно ошибка в документации, нужно быть осторожным
}

type AxiosGetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
type AxiosCheckLogin = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const apiServices = {
    axiosGetUsers: (currentPage: number, uploadingUsers: number) => {
        return requestsDefault.get<AxiosGetUsersResponseType>(`users?page=${currentPage}&count=${uploadingUsers}`)
            .then(response => {
                return response.data
            });
    },
    axiosFollow: (userId: number) => {
        return requestsDefault.post<ResponseMessagesEmptyData>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
    axiosUnfollow: (userId: number) => {
        return requestsDefault.delete<ResponseMessagesEmptyData>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
    axiosCheckLogin: () => {
        return requestsForCheckLogin.get<AxiosCheckLogin>('')
            .then(response => {
                return response.data;
            });
    },
    axiosGetUserProfile: (userId: number) => {
        return requestsForUserProfile.get<ProfileType>("profile/" + userId);
    },
}

type GetUserStatusType = {
    status: string
}
type SetUserStatusType = {
    resultCode: ResultCodeEnum
    messages: Array<string | null>
    data: {}
}

export const statusRequests = {
    getUserStatus: (userId: number) => {
        return  requestsDefault.get<GetUserStatusType>(`profile/status/${userId}`);
    },
    setUserStatus: (userStatusText: string) => {
        return requestsDefault.put<SetUserStatusType>('profile/status',{
            status: userStatusText,
        });
    },
};

type AxiosLoginUserType = {
    resultCode: ResultCodeEnum
    messages: Array<string | null>
    data: {
        userId: number
    }
}
type GetLoginCaptchaType = {
    url: string
}


export const loginRequests = {
    axiosLoginUser: (data: LoginType) => {
        return requestsForLoginOrLogout.post<AxiosLoginUserType>('', {...data});
    },
    axiosLogeOutUser: () => {
        return requestsForLoginOrLogout.delete<ResponseMessagesEmptyData>('');
    },
    getLoginCaptcha: () => {
        return requestsDefault.get<GetLoginCaptchaType>('security/get-captcha-url');
    },
};

type PutPhotoType = {
    resultCode: ResultCodeEnum
    messages: Array<string | void>
    data: {
        photos: {
            small: string | null
            large: string | null
        }
    }
}

export const photosRequests = {
    putPhoto: (photoFile: any) => {
        let newFormData = new FormData();
        newFormData.append('image', photoFile);
        return requestsDefault.put<PutPhotoType>('profile/photo', newFormData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }});
    }
};
export const profileInfoRequests = {
    setUserProfileInfo: (profileInfoData: ProfileType) => {
        return requestsDefault.put<ResponseMessagesEmptyData>('profile', {...profileInfoData});
    }
}