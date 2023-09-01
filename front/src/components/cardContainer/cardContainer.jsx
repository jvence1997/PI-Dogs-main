import Card from "../card/card";
import style from './cardContainer.module.css';
import { useSelector} from "react-redux";

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
                        minHeight={e.minHeight}
                        maxHeight={e.maxHeight}
                        minWeight={e.minWeight}
                        maxWeight={e.maxWeight}
                        life_span={e.life_span}
                    />
                )
            })}

        </div>
    )
}


export default CardContainer;