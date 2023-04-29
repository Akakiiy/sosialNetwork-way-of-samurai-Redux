import s from "./Users.module.css";
import {useState} from "react";

const UsersPagesPaginator = ({currentPage, changePage, totalUsersCount, uploadingUsersCount, countPagesInABlock}) => {
    const [currentBlockOfPages, setCurrentBlockOfPages] = useState(1);

    let totalPages = Math.ceil(totalUsersCount / uploadingUsersCount),
        pagesArr = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    let minPageNum = (currentBlockOfPages - 1) * countPagesInABlock + 1,
        maxPageNum = currentBlockOfPages * countPagesInABlock,
        filteredPages = pagesArr.slice(minPageNum - 1, maxPageNum);

    const prevPage = () => {
        if (currentBlockOfPages > 1) {
            setCurrentBlockOfPages(currentBlockOfPages - 1)
        }
    };
    const nextPage = () => {
        if ((totalPages / countPagesInABlock) > currentBlockOfPages) {
            setCurrentBlockOfPages(currentBlockOfPages + 1)
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