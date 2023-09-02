import Card from "../card/card";
import style from './CardHome.module.css';
import { useSelector } from "react-redux";

const CardContainer = () => {

    const allDogs = useSelector(state => state.allDogs);

    return (
        <div className={style.CardContainer}>
            {allDogs.map((e) => {
                return (
                    <Card
                        key={e.id}
                        id={e.id}
                        name={e.name}
                        image={e.image}
                        temperament={e.temperament}
                        maxWeight={e.maxWeight}
                    />
                )
            })}

        </div>
    )
};

export default CardContainer;