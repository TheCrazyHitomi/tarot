import { useState } from 'react';
import './App.css';
import ArcanasDrawing from './components/ArcanasDrawing';
import MajorArcanaDrawing from './components/MajorArcanasDrawing';


function App() {

  const[isMajorArcanas , setIsMajorArcanas] = useState<boolean>();
  const [isDrawing, setIsDrawing] = useState(false);

  const handleSelection = (value:boolean) => {
    setIsMajorArcanas(value);
    setIsDrawing(true);
  };

  return (
    <>
      <h1>ARcAnA</h1>

      <div className='container'>
        {isDrawing ? (
          <>
            <div className='selector'>
              <div className='drawSelector'>
                {isMajorArcanas ? <MajorArcanaDrawing/> : <ArcanasDrawing/>}
              </div>
              <button onClick={() => setIsDrawing(false)}>Revenir à la sélection des tirages</button>
            </div>
          </>
        ) :(
          <>
          <div className='drawExplanation'>
            <h3>1. Le Tirage en Croix (ou « Tirage en croix celtique »)</h3>

              <h4>Le tirage en croix est une méthode très populaire pour obtenir des réponses précises à des questions spécifiques. Le principe est simple : tu tires 5 cartes qui forment une croix, chacune représentant un aspect de la question posée. Voici comment ça fonctionne :</h4>
            
            <div className='drawSample'>
              <ul>
                  <li><em><strong>Carte 1 : La Situation Actuelle</strong> (ou le Pour)</em>
                <br/>
                <br/>Cette carte symbolise l’état actuel de la situation ou la personne qui pose la question. Elle peut également indiquer les forces qui soutiennent la personne.</li>
                  <li><em><strong>Carte 2 : Les Obstacles</strong> (ou le Contre)</em>
                <br/>
                <br/>Cette carte montre ce qui bloque ou ce qui pourrait poser des problèmes. Elle peut révéler des peurs, des doutes ou des influences extérieures négatives.</li>
                  <li><em><strong>Carte 3 : Les Ressources et le Conseils </strong>(ou l’inconscient)</em>
                <br/>
                <br/>Cette carte représente ce qui est à la base de la situation. Cela peut inclure des ressources cachées, des conseils utiles, ou des choses dont la personne n’est pas encore consciente.</li>
                  <li><em><strong>Carte 4 : Les Influences Futures</strong> (ou le résultat à court terme)</em>
                <br/>
                <br/>Ici, tu découvres ce qui est à venir dans la situation. Cela peut être une action à entreprendre ou une énergie qui va entrer en jeu très bientôt.</li>
                  <li><em><strong>Carte 5 : La Synthès</strong> (ou le Résultat final)</em>
                <br/>
                <br/>C’est LA carte qui donne le résultat global du tirage. Elle résume l’ensemble de la situation et offre une direction finale ou un résultat probable.</li>
              </ul>
              <div className='tarot-layout-sample'>
                <div className="cardSample card1">1</div>
                <div className="cardSample card2">2</div>
                <div className="cardSample card3">3</div>
                <div className="cardSample card4">4</div>
                <div className="cardSample card5">5</div>
              </div>
            </div>

            <h3>2. Le Tirage à 3 Cartes</h3>

              <h4>Le tirage à 3 cartes est beaucoup plus simple et rapide. Il est souvent utilisé pour obtenir une vue d’ensemble sur une situation ou une question spécifique. Les trois cartes représentent :</h4>
            
            <div className='drawSample'>
              <ul>
                  <li>Passé, Présent, Futur</li>
                <br/>
                <li>Blocages, Opportunités, Voie à suivre</li>
                <br/>
                <li>Situation de départ, ce dont on a besoin, Conseil</li>
                <br/>
                <li>Les circonstances, ce qui est important, le resultat</li>
                <br/>
                <li>Ce que dit le corps, ce que dit le coeur, ce que dit l'esprit</li>
                <br/>
              </ul>
              <div className='tarot-sample'>
                <div className="cardSample">1</div>
                <div className="cardSample">2</div>
                <div className="cardSample">3</div>
              </div>
            </div>
            
            <div>
              <button onClick={() => handleSelection(true)}>Tirage en croix</button>
              <button onClick={() => handleSelection(false)}>Tirage à 3 cartes</button>
            </div>
          </div>
          </>
      )}
      </div>
      <footer>
        Made with love by <a href="https://github.com/TheCrazyHitomi">theCrazyHitomi</a><sup>®</sup> | 2024
      </footer>
    </>
  );
}

export default App;
