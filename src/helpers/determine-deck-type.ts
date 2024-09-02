/**
 * retourne un tableau de différente longueur en fonction de si ce sont les arcanes majeurs ou tout les arcanes
 * @param isMajorArcanaOnly 
 * @returns 
 */


export const determineDeckType = (isMajorArcanaOnly: boolean) =>{
    return Array.from({ length: isMajorArcanaOnly ? 22 : 78}).map(
        (_, index) => index
    );
};