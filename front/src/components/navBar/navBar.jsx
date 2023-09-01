import { NavLink } from 'react-router-dom';
import style from './navBar.module.css';

const NavBar = () => {
    return (
        <ul className={style.ul}>
            <NavLink className={style.nav1} to="/home">Home</NavLink>
            <NavLink className={style.nav2} to="/create">Form</NavLink>
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>

        </ul>
    )
};

export default NavBar;