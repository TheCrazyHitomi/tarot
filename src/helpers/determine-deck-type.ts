/**
 * retourne un tableau de différente longueur en fonction de si ce sont les arcanes majeurs ou tout les arcanes
 * @param isMajorArcanaOnly 
 * @returns 
 */


export const determineDeckType = (isMajorArcanaOnly: boolean) =>{
    return Array.from({ length: isMajorArcanaOnly ? 22 : 78}).map(
        (_value:unknown, index:number) => index // value est vide donc spécification avec un "_" au début de la variable car elle n'est pas utilisée
    );
};