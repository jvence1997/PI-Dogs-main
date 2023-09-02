import style from "./home.module.css";
import { useDispatch } from "react-redux";
import CardContainer from "../../components/cardSimple/CardsHome";

const Home = () => {
    return (
        <div className={style.home}>
            <h1 className={style.title}>Welcome to the Dog App</h1>
            <CardContainer />
        </div>
    );
};
    
export default Home;