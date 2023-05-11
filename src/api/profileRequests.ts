import {EmptyDataType, GetUserStatusType, PhotosDataType, requestsDefault, ResponseData} from "./api";
import {ProfileType} from "../components/Redux/profile-reducer";

export const statusRequests = {
    getUserStatus: (userId: number) => {
        return  requestsDefault.get<GetUserStatusType>(`profile/status/${userId}`);
    },
    setUserStatus: (userStatusText: string) => {
        return requestsDefault.put<ResponseData<EmptyDataType>>('profile/status',{
            status: userStatusText,
        });
    },
};
export const photosRequests = {
    putPhoto: (photoFile: File) => {
        let newFormData = new FormData();
        newFormData.append('image', photoFile);
        return requestsDefault.put<ResponseData<PhotosDataType>>('profile/photo', newFormData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }});
    }
};
export const profileInfoRequests = {
    setUserProfileInfo: (profileInfoData: ProfileType) => {
        return requestsDefault.put<ResponseData<EmptyDataType>>('profile', {...profileInfoData});
    }
}