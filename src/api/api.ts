import axios from "axios";
import {UserType} from "../components/Redux/users-reducer";

export const _baseUrl = 'https://social-network.samuraijs.com/api/1.0/'
export const requestsDefault = axios.create({
    withCredentials: true,
    baseURL: _baseUrl,
    headers: {
        'API-KEY': '7e3596fa-e159-4992-8549-28337e60901c',
    }
});
export const requestsForCheckLogin = axios.create({
    baseURL: _baseUrl + 'auth/me',
    withCredentials: true,
});
export const requestsForLoginOrLogout = axios.create({
    baseURL: _baseUrl + 'auth/login',
    withCredentials: true,
});
export const requestsForUserProfile = axios.create({
    baseURL: _baseUrl,
});

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaError = 10
}

export type ResponseData<T> = {
    resultCode: ResultCodeEnum
    messages: Array<string | null>
    data: T
}
export type EmptyDataType = {} //так идет с самой апи документации, могут быть проблемы
export type PhotosDataType = {
    photos: {
        small: string | null
        large: string | null
    }
}
export type LoginData = {
    id: number
    email: string
    login: string
}
export type UserIdDataType = {
    userId: number
}

export type AxiosGetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type GetUserStatusType = {
    status: string
}
export type GetLoginCaptchaType = {
    url: string
}