import axios from "axios";

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
        return requestsForCheckLogin.get('')
            .then(response => {
                return response.data;
            });
    },
    axiosGetUserProfile: (userId) => {
        return requestsForUserProfile.get("profile/" + userId);
    },
}
export const statusRequests = {
    getUserStatus: (userId) => {
        return  requestsDefault.get(`profile/status/${userId}`);
    },
    setUserStatus: (userStatusText) => {
        return requestsDefault.put('profile/status',{
            status: userStatusText,
        });
    },
};
export const loginRequests = {
    axiosLoginUser: (data) => {
        return requestsForLoginOrLogout.post('', {...data});
    },
    axiosLogeOutUser: () => {
        return requestsForLoginOrLogout.delete('');
    },
    getLoginCaptcha: () => {
        return requestsDefault.get('security/get-captcha-url');
    },
};
export const photosRequests = {
    putPhoto: (photoFile) => {
        let newFormData = new FormData();
        newFormData.append('image', photoFile);
        return requestsDefault.put('profile/photo', newFormData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }});
    }
};
export const profileInfoRequests = {
    setUserProfileInfo: (profileInfoData) => {
        return requestsDefault.put('profile', {...profileInfoData});
    }
}