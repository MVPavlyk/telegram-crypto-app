import {Link} from "react-router-dom";
import {ROUTES} from "../../../config/routes";

const NavBar = () => {
    return (
        <div className='h-20 fixed bottom-0 w-full flex items-center bg-main-blue text-white px-8 justify-between'>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.LEADERBOARD}>Leaderboard</Link>
        </div>
    );
};

export default NavBar;
