import { SelectContainer } from './components/SelectContainer';
import { ButtonsContainer } from './components/ButtonsContainer';
import './App.css';
import { NumberInput } from './components/NumberInput';

function App() {

  return (
    <>
      <div className='start-container'>
        <NumberInput />
        <SelectContainer />
        <ButtonsContainer />
      </div>

    </>
  )
}

export default App
