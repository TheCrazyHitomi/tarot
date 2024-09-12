import { useEffect, useState } from "react";
import { API_ENDPOINT, CARDS_ENDPOINT } from "../config";
import { getApi } from "../helpers/fetch-api";

export interface CardData {
    name: string;
    keywords: string[];
    description: string;
    image: string;
}

const Cards =(props: { id: number}) => {

    const {id} = props;
    const [ cardData, setCardData ] = useState<CardData>();
    const [isFlipped, setIsFlipped] = useState(false); // État pour savoir si la carte est retournée

    useEffect(() =>{
        getApi(`${CARDS_ENDPOINT}${id}`).then((data) => setCardData(data));
    }, [id]);

// Fonction qui gère le flip
const handleFlip = () => {
    setIsFlipped(!isFlipped); // Change l'état isFlipped
};

    return (
        <li>
            <div className="card-scene" onClick={handleFlip}>
                <div className={`card ${isFlipped ? 'card--flipped' : 'card--unflip'}`}>
                <div className="frontCard">
                    <h3 className="cardName">{cardData?.name}</h3>
                    <img
                        className="cardPic"
                        src={`${API_ENDPOINT}${cardData?.image}`}
                        alt={`${cardData?.name}`}
                />
                </div>
                <div className="backCard">
                    <span><h4 className="description">{cardData?.keywords}</h4></span>
                </div>
                </div>
            </div>

        </li>
    );
};



//     return (
//         <li>
//             <div id="front" className="frontCard">
//                 <h3 className="cardName">{cardData?.name}</h3>
//                 <img className="cardPic"
//                     src={`${API_ENDPOINT}${cardData?.image}`} 
//                     alt={`${cardData?.name}`} 
//                     />
//             </div>
//             <div id="back" className="backCard">
//                 <span>{cardData?.description}</span>
//             </div>
//             {}

//         </li>
//     );
// };

export default Cards;