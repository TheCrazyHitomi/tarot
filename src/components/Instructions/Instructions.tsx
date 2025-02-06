import './Instructions.css';
import { crossDrawingData } from './SubInstructions/data/crossDrawingData';
import { threeCardDrawData } from './SubInstructions/data/threeCardDrawData';
import { SubInstructions } from './SubInstructions/SubInstructions';

export const Instructions = () => {
  return (
    <ol className='intructions'>
      <li>
        <h2>Le Tirage en Croix (ou « Tirage en croix celtique »)</h2>
        <p>
          Le tirage en croix est une méthode très populaire pour obtenir des
          réponses précises à des questions spécifiques. Le principe est simple
          : tu tires 5 cartes qui forment une croix, chacune représentant un
          aspect de la question posée. Voici comment ça fonctionne :
        </p>

        <div className='sub-instruction'>
          <ul>
            {crossDrawingData.map((item) => (
              <SubInstructions item={item} />
            ))}
          </ul>

          <div className='cross-drawing-layout'>
            <div className='instruction-card card-1'>1</div>
            <div className='instruction-card card-2'>2</div>
            <div className='instruction-card card-3'>3</div>
            <div className='instruction-card card-4'>4</div>
            <div className='instruction-card card-5'>5</div>
          </div>
        </div>
      </li>

      <li>
        <h2>Le Tirage à 3 Cartes</h2>
        <p>
          Le tirage à 3 cartes est beaucoup plus simple et rapide. Il est
          souvent utilisé pour obtenir une vue d'ensemble sur une situation ou
          une question spécifique. Les trois cartes représentent :
        </p>

        <div className='sub-instruction'>
          <ul>
            {threeCardDrawData.map((item) => (
              <SubInstructions item={item} />
            ))}
          </ul>
          <div className='three-card-draw-layout'>
            <div className='instruction-card'>1</div>
            <div className='instruction-card'>2</div>
            <div className='instruction-card'>3</div>
          </div>
        </div>
      </li>
    </ol>
  );
};
