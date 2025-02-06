import { useState } from 'react';
import ArcanasDrawing from './components/ArcanasDrawing';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import { Instructions } from './components/Instructions/Instructions';
import MajorArcanaDrawing from './components/MajorArcanasDrawing';
import './styles/App.css';

function App() {
  const [isMajorArcanas, setIsMajorArcanas] = useState<boolean>();
  const [isDrawing, setIsDrawing] = useState(false);

  const onMajorArcanas = (value: boolean) => {
    setIsMajorArcanas(value);
    setIsDrawing(true);
  };

  return (
    <>
      <Header />

      <main>
        {isDrawing ? (
          <>
            <div className='selector'>
              <div className='drawSelector'>
                {isMajorArcanas ? <MajorArcanaDrawing /> : <ArcanasDrawing />}
              </div>

              <button onClick={() => setIsDrawing(false)}>
                Revenir à la sélection des tirages
              </button>
            </div>
          </>
        ) : (
          <>
            <Instructions />

            <div className='button-container'>
              <button onClick={() => onMajorArcanas(true)}>
                Tirage en croix
              </button>
              <button onClick={() => onMajorArcanas(false)}>
                Tirage à 3 cartes
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
