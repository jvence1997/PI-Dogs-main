import { NavLink } from 'react-router-dom';
import style from './navBar.module.css';
import SearchBar from '../searchBar/SearchBar';

const NavBar = () => {
    return (
        <div className={style.ul}>
            <NavLink className={style.nav1} to="/home">Home</NavLink>
            <NavLink className={style.nav2} to="/create">Form</NavLink>
            <div className={style.searchBar}>
                <SearchBar />
            </div>
        </div>
    )
};

export default NavBar;