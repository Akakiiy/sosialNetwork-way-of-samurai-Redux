import React from "react";
import {Pagination} from "antd";

type PropsType = {
    totalUsersCount: number | null
    uploadingUsersCount: number
    changePage: (page: number) => void
    isLoading: boolean
}

const UsersPagesPaginator: React.FC<PropsType> = (props) => {

    const {changePage, totalUsersCount, uploadingUsersCount, isLoading} = props

    let totalPages: number = Math.ceil((totalUsersCount || 0) / uploadingUsersCount);

    return (
        <Pagination defaultCurrent={1}
                    size="default"
                    total={totalPages}
                    defaultPageSize={uploadingUsersCount}
                    showSizeChanger={false}
                    showQuickJumper={false}
                    disabled={isLoading}
                    onChange={(page) => changePage(page)}/>
    );
}

export default UsersPagesPaginator;