import {ProfileType} from "../components/Redux/profile-reducer";
import {
    AxiosGetUsersResponseType, EmptyDataType, LoginData,
    requestsDefault,
    requestsForCheckLogin,
    requestsForUserProfile, ResponseData,
} from "./api";

export const usersRequests = {
    axiosCheckLogin: () => {
        return requestsForCheckLogin.get<ResponseData<LoginData>>('')
            .then(response => {
                return response.data;
            });
    },
    axiosFollow: (userId: number) => {
        return requestsDefault.post<ResponseData<EmptyDataType>>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
    axiosGetUserProfile: (userId: number) => {
        return requestsForUserProfile.get<ProfileType>("profile/" + userId);
    },
    axiosGetUsers: (currentPage: number, uploadingUsers: number) => {
        return requestsDefault.get<AxiosGetUsersResponseType>(`users?page=${currentPage}&count=${uploadingUsers}`)
            .then(response => {
                return response.data
            });
    },
    axiosUnfollow: (userId: number) => {
        return requestsDefault.delete<ResponseData<EmptyDataType>>(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
}