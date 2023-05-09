import './Preloader.css';
import classNames from "classnames";
const Preloader = () => {
    return (
        <div className={"cell"}>
            <div className={classNames("pl", "pl-kinetic")}></div>
            <div className={"pl-name"}>Loading...</div>
        </div>
    );
}

export default Preloader;