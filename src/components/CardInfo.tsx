import React from "react";

const CardInfo = (props: { description:string, handleClick:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void}) =>{
    const { description, handleClick } = props;


    return(
        <div className="backdrop">
                <div className="modal">
                    <p>{description}</p>
                    <button onClick={(e)=>handleClick(e)}>Fermer</button>
                </div>
        </div>
    );
};

export default CardInfo;