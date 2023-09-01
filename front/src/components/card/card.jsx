import style from './card.module.css';
import {Link} from 'react-router-dom';

const Card = (props) => {
    return (
        <div className={style.card}>
            <Link to='/detail'>
                <h1>name={props.name}</h1> 
            </Link>
                <p>id={props.id}</p>    
                <p>user name={props.username}</p>   
                <p>email={props.email}</p>    
                <p>phone={props.phone}</p>    
        </div>
    )
}

export default Card;