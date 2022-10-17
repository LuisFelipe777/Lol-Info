import "./styles.css";
import { VscSearch } from "react-icons/vsc";
export default function Home() {
    return (
        <div className="home-contain">
            <div className="cards-contain" >
                <div className="search-contain">
                    <div className="search">
                        <input type="text" placeholder="Procurar Campeão" />
                        <button className="btn-search" type="button"><VscSearch color="#fff" size={24} /></button>
                    </div>
                </div>
                <div className="cards"></div>
            </div>
        </div>
    );
}