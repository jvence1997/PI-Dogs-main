import style from './card.module.css';
import { Link, NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <section className={style.card}>
            <NavLink to='/detail' key={props.id} className={style.link}>
                <img src={props.image} alt="dog" className={style.image} />
                <h1>name={props.name}</h1>
                <p>id={props.id}</p>
                <p>minHeight={props.minHeight}</p>
                <p>maxHeight={props.maxHeight}</p>
                <p>minWeight={props.minWeight}</p>
                <p>maxWeight={props.maxWeight}</p>
                <p>life_span={props.life_span}</p>
            </NavLink>
        </section>
    )
}

export default Card;