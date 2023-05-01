import s from "./Users.module.css";

const UsersPagesPaginator = ({currentPage, changePage, totalUsersCount, uploadingUsersCount, countPagesInABlock, setBlockOfPages, blockOfPages}) => {

    let totalPages = Math.ceil(totalUsersCount / uploadingUsersCount),
        pagesArr = [];

    for (let i = 1; i <= totalPages; i++) {
        pagesArr.push(i)
    }

    let minPageNum = (blockOfPages - 1) * countPagesInABlock + 1,
        maxPageNum = blockOfPages * countPagesInABlock,
        filteredPages = pagesArr.slice(minPageNum - 1, maxPageNum);

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