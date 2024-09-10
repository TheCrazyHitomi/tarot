import { useState, useEffect } from "react";
import { determineDeckType } from "../helpers/determine-deck-type";
import { drawCard } from "../helpers/draw-card";
import { drawMajorArcana } from "../helpers/draw-major-arcana";
import { shuffleCards } from "../helpers/shuffle-cards";
import Cards from "./Cards";
import LittleCardDisplay from "./LittleCardDisplay";

const MajorArcanaDrawing = () => {

    const [cardDraw, setCardDraw] = useState<number[]>([]);
    const [lastMajorArcana, setLastMajorArcana] = useState<number>();

    const majorArcanas = determineDeckType(true);

    const [cards, setCards] = useState<number[]>(majorArcanas);

    // possibilité de mélanger le jeu de cartes
    const [canShuffle, setCanShuffle] = useState<boolean>(true);

    // possibilité de tirer une carte
    const [canDraw, setCanDraw] = useState<boolean>(true);

    const handleDraw = () => {
        const newCardDrawing = drawCard(cards);
        const newCardDraw: number[] = [...cardDraw];
        newCardDraw.push(newCardDrawing.drawCard);
        setCardDraw(newCardDraw);
        setCards(newCardDrawing.newCards);
        setCanShuffle(false);
    };

    const handleShuffle = () =>{
        const newDeck = shuffleCards(cards);
        setCards(newDeck);
    };

    const handleDrawLastMajorArcana = () =>{
        const card = drawMajorArcana(cardDraw);
        setLastMajorArcana(card);
    };

    useEffect(() => {
        if (cardDraw.length >=4) {
            setCanDraw(false);
        }
    }, [cardDraw]);

    return (
        <>
            <h2>Tirage en croix</h2>

            <div className="littleCards-maj">
                {cards.map((card) => (
                    <LittleCardDisplay id={card}/>
                ))}
            </div>

            {canDraw ? (
                <button onClick={handleDraw}>tirer</button>
            ): (
                <button onClick={handleDrawLastMajorArcana}>tirer l'arcane majeur</button>
            )}

            <button onClick={handleShuffle} disabled={!canShuffle}>mélanger</button>

            {cardDraw?.length || lastMajorArcana ? (
                <>
                <div className="cross">
                    <p>Cartes tirées</p>


                        <div className="tarot-layout">
                            {/* Disposition des cartes en croix */}
                            {cardDraw[0] && (
                                <div className="cards card1">
                                    <Cards id={cardDraw[0]} />
                                </div>
                            )}
                            {cardDraw[1] && (
                                <div className="cards card2">
                                    <Cards id={cardDraw[1]} />
                                </div>
                            )}
                            {cardDraw[2] && (
                                <div className="cards card3">
                                    <Cards id={cardDraw[2]} />
                                </div>
                            )}
                            {cardDraw[3] && (
                                <div className="cards card4">
                                    <Cards id={cardDraw[3]} />
                                </div>
                            )}
                            {lastMajorArcana && (
                                <div className="cards card5">
                                    <Cards id={lastMajorArcana} />
                                </div>
                            )}
                        </div>
                </div>
                </>
            ) : (
                ""
            )}
        </>
    );
};



        
            {/* {cardDraw?.length ?(
                <>
                    <p>Cartes tirées</p>

                    <ul className="cards-maj">
                        {cardDraw.map((card) => {
                            return <Cards id={card} />;
                        })}
                    </ul>
                </>
            ):(
                ""
            )}
            {lastMajorArcana ? (
                <>
                    <p>Synthèse</p>
                    <div className="cards">
                    <Cards id={lastMajorArcana} />
                    </div>
                </>
            ):(
                
                ""
            )}
        </>
    );
}; */}

export default MajorArcanaDrawing;