import s from "./Users.module.css";
import {useState} from "react";

const UsersPagesPaginator = ({currentPage, changePage, totalUsersCount, uploadingUsersCount, countPagesInABlock}) => {
    const [currentBlockOfPages, setCurrentBlockOfPages] = useState(5);

    let totalPages = Math.ceil(totalUsersCount / uploadingUsersCount);
    let pagesArr = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    let minPageNum = (currentBlockOfPages - 1) * countPagesInABlock + 1;
    let maxPageNum = currentBlockOfPages * countPagesInABlock;

    let filteredPages = pagesArr.slice(minPageNum - 1, maxPageNum);

    return (
        <div className={s.pages}>
            {
                currentBlockOfPages > 1
                    ? <button className={s.prevBtn}
                              onClick={() => setCurrentBlockOfPages(currentBlockOfPages - 1)}>Prev</button>
                    : null
            }
            {
                filteredPages.map(page => {
                    return <button className={currentPage === +page ? s.activePage : s.page}
                                   key={page}
                                   onClick={() => changePage(page)}>{page}</button>
                })
            }
            {
                (totalPages / countPagesInABlock) > currentBlockOfPages
                    ? <button className={s.nextBtn}
                              onClick={() => setCurrentBlockOfPages(currentBlockOfPages + 1)}>Next</button>
                    : null
            }
        </div>
    );
}

export default UsersPagesPaginator;