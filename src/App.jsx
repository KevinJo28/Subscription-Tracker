 
import Header from './componets/Header';
import FormAddMoney from './componets/FormAddMoney';
import './App.css'
import { useState } from 'react';
import MainControl from './componets/MainControl';

function App() {
  const [count, setCount] = useState("");
  const [isValid, setIsValid] = useState(false);
  const componet = isValid ? (
    <MainControl count={count} />
  ) : (
    <FormAddMoney setCount={setCount} setIsValid={setIsValid} />
  );
 

  return (
    <div className='App'>
    
      <Header className="header" />
      {componet}
      
    </div>
  )
}

export default App
