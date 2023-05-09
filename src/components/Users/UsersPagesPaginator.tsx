import s from "./Users.module.css";
import React from "react";

type PropsType = {
    totalUsersCount: number | null
    currentPage: number
    uploadingUsersCount: number
    setBlockOfPages: (blockOfPages: number) => void
    changePage: (page: number) => void
    blockOfPages: number
    countPagesInABlock: number
}

const UsersPagesPaginator: React.FC<PropsType> = ({currentPage, changePage,
                                                      totalUsersCount, uploadingUsersCount,
                                                      countPagesInABlock, setBlockOfPages, blockOfPages}) => {

    if (totalUsersCount === null) {
        totalUsersCount = 0
    }

    let totalPages: number = Math.ceil(totalUsersCount / uploadingUsersCount),
        pagesArr: Array<number> = [];

    for (let i: number = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    let minPageNum: number = (blockOfPages - 1) * countPagesInABlock + 1,
        maxPageNum: number = blockOfPages * countPagesInABlock,
        filteredPages: Array<number> = pagesArr.slice(minPageNum - 1, maxPageNum);

    const prevPage = () => {
        if (blockOfPages > 1) {
            setBlockOfPages(blockOfPages - 1)
        }
    };
    const nextPage = () => {
        if ((totalPages / countPagesInABlock) > blockOfPages) {
            setBlockOfPages(blockOfPages + 1)
        }
    };
    return (
        <div className={s.pages}>
            <button className={s.prevBtn} onClick={prevPage}>Prev</button>
            {
                filteredPages.map(page => {
                    return <button className={currentPage === +page ? s.activePage : s.page}
                                   key={page}
                                   onClick={() => changePage(page)}>{page}</button>
                })
            }
            <button className={s.nextBtn} onClick={nextPage}>Next</button>
        </div>
    );
}

export default UsersPagesPaginator;