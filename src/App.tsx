import { SelectContainer } from './components/SelectContainer';
import { ButtonsContainer } from './components/ButtonsContainer';
import { NumberOfQuestionsContainer } from './components/NumberInputContainer';
import './App.css';

function App() {

  return (
    <>
      <div className='start-container'>
        <NumberOfQuestionsContainer />
        <SelectContainer />
        <ButtonsContainer />
      </div>

    </>
  )
}

export default App
