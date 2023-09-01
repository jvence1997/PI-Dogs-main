import style from './landing.module.css';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className={style.div}>
            <Link to='/home' >
                <button className={style.button}>START</button>
            </Link>
        </div>
    );
};

export default Landing;