import { SelectContainer } from './components/StartPage/SelectsContainer/SelectsContainer';
import { ButtonsContainer } from './components/StartPage/ButtonsContainer/ButtonsContainer';
import { NumberOfQuestionsContainer } from './components/StartPage/NumberInputContainer/NumberInputContainer';
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
