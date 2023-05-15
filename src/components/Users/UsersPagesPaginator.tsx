import s from "./Users.module.css";
import React from "react";

type PropsType = {
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    setBlockOfPages: (blockOfPages: number) => void
    changePage: (page: number) => void
    blockOfPages: number
    pagesInABlock: number
    isLoading: boolean
}

const UsersPagesPaginator: React.FC<PropsType> = (props) => {

    const {currentPage, changePage,
        totalUsersCount, uploadingUsersCount,
        pagesInABlock, setBlockOfPages, blockOfPages, isLoading} = props


    let totalPages: number = Math.ceil((totalUsersCount || 0) / uploadingUsersCount),
        pagesArr: Array<number> = [];

    for (let i: number = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    let minPageNum: number = (blockOfPages - 1) * pagesInABlock + 1,
        maxPageNum: number = blockOfPages * pagesInABlock,
        slicedPages: Array<number> = pagesArr.slice(minPageNum - 1, maxPageNum);

    const prevPage = () => {
        if (blockOfPages > 1) {
            setBlockOfPages(blockOfPages - 1)
        }
    };
    const nextPage = () => {
        if ((totalPages / pagesInABlock) > blockOfPages) {
            setBlockOfPages(blockOfPages + 1)
        }
    };
    return (
        <div className={s.pages}>
            <button className={s.prevBtn} onClick={prevPage}>Prev</button>
            {
                slicedPages.map(page => {
                    return <button className={currentPage === +page ? s.activePage : s.page}
                                   key={page}
                                   onClick={() => changePage(page)}
                                   disabled={isLoading}>{page}</button>
                })
            }
            <button className={s.nextBtn} onClick={nextPage}>Next</button>
        </div>
    );
}

export default UsersPagesPaginator;