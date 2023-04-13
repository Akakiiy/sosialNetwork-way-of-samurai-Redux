import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.film.ru/sites/default/files/styles/thumb_og_800x420/public/49626676-1248483.jpg" alt="GOSLING"/>
            </div>
            <div className={s.profileInfo}>
                <div>ava</div>
                <div>description</div>
            </div>
            <hr/> {/*!!! внимание тут стоит рандомная черта, чтоб визуально видеть конец дива, можно убрать в любой момент !!!*/}
        </div>
    );
};

export default ProfileInfo;