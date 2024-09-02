/**
 * retourne le dernier arcane tiré
 * @param cardDeck les cartes tirées
 * @returns 
 */

export const drawMajorArcana = (cardDeck: number[]):number =>{
    const majorArcana = cardDeck.reduce((prev, curr) => prev + curr, 0);

    if (majorArcana >21) {
        // Max 21 arcanes majeurs
        const firstNum = Math.floor(majorArcana /10);
        const lastNum = majorArcana %10;
        return firstNum + lastNum;
    } else {
        return majorArcana;
    }
};