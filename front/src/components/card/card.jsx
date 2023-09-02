import style from './card.module.css';

const Card = (props) => {
    return (
        <section className={style.card}>

            <img src={props.image} alt="dog" className={style.image} />
            <h1>name={props.name}</h1>
            <p>id={props.id}</p>
            <p>minHeight={props.minHeight}</p>
            <p>maxHeight={props.maxHeight}</p>
            <p>minWeight={props.minWeight}</p>
            <p>maxWeight={props.maxWeight}</p>
            <p>life_span={props.life_span}</p>
            <p>temperament={props.temperament}</p>

        </section>
    )
}

export default Card;