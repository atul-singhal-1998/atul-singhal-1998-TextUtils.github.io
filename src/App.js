import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'Black';
      document.body.style.color = 'White';
      console.log(mode)
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'White';
      document.body.style.color = 'Black';
      console.log(mode)
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000)
    
  }
  return (
    <>
    <Navbar title="TextUtils" about="About Us" toggleMode={toggleMode} mode={mode} />
    <Alert alert={alert}/>
    <TextForm showAlert={showAlert} heading="Text Utils - Customise Your Text Here"/>
    </>
  );
}

export default App;
