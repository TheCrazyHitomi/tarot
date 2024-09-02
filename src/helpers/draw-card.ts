import { takeARandomCard } from "./take-random-cards";


export const tempCards: number[] = [
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
];


/**
 * prends un jeu de carte4 en paramètre
 * tire une carte du jeu de carte
 * retourne le nouveau jeu de cartes et la carte tirée
 * @param cards 
 * @returns 
 */

export const drawCard = (
    cards: number[]): {drawCard:number; newCards:number[]} => {
        const cardsLength = cards.length;

    // tirer une carte au hasard dans le jeu de cartes
    const cardToDraw = takeARandomCard(cardsLength); // index de la carte tirée
    const drawCard = cards[cardToDraw]; // carte tirée
    
    // supprimer la carte de ce jeu de cartes
    const cardIndexToDelete = cards.findIndex((card) => card === drawCard);
    const newCards = [...cards];

    newCards.splice(cardIndexToDelete, 1);

    return {
        drawCard,
        newCards,
    };
};



