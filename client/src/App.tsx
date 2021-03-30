import React from 'react';
import EffectSelector from './components/EffectSelector'
import Canvas from './components/Canvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  const [effect, setEffect] = React.useState<string>("");
  const handleSelectEffect = (e: string) => {
    setEffect(e)
  };

  return (
    <div className="App">
      <EffectSelector 
        selectEffect={handleSelectEffect} />
      <Canvas effect={effect}/>
    </div>
  );
}

export default App;
