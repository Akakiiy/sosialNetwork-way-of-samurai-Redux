import axios from "axios";

const requestsDefault = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7e3596fa-e159-4992-8549-28337e60901c',
    }
});

const requestsForLogin = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    withCredentials: true,
});

const requestsForUserProfile = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
})

export const apiServices = {
    axiosGetUsers: (currentPage, uploadingUsers) => {
        return requestsDefault.get(`users?page=${currentPage}&count=${uploadingUsers}`)
            .then(response => {
                return response.data
            });
    },
    axiosFollow: (userId) => {
        return requestsDefault.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
    axiosUnfollow: (userId) => {
        return requestsDefault.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },
    axiosCheckLogin: () => {
        return requestsForLogin.get('me')
            .then(response => {
                return response.data;
            });
    },
    axiosGetUserProfile: (userId) => {
        return requestsForUserProfile.get("" + userId);
    },
}