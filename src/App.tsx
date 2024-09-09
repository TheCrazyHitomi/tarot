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
      <h1>Arcana</h1>

      {isDrawing ? (
        <>
          {isMajorArcanas ? <MajorArcanaDrawing/> : <ArcanasDrawing/>}
          <button onClick={() => setIsDrawing(false)}>Revenir à la sélection des tirages</button>
        </>
      ) :(
        <>
        <button onClick={() => handleSelection(true)}>Tirage en croix</button>
        <button onClick={() => handleSelection(false)}>Tirage à 3 cartes</button>
        </>
      )}
    </>
  );
}

export default App;
