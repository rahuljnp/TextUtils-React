//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);
const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2500);
}
//console.log("Mode changed to= " + mode);
  const toggleMode = () => {  
    //setMode(mode === 'light' ? 'dark' : 'light');
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'; 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'; 
    }
    console.log("Mode changed to " + mode);
  }
  
  return ( 
    <div className="App">
<Router basename={process.env.PUBLIC_URL}>
    <Navbar title="TextUtils" abouttext="About TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
         <Routes> 
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
          <Route path="/About" element={<About heading="About TextUtils" showAlert={showAlert} mode={mode} />} />
       </Routes>
       
       
</Router>  
</div>  
  );
}
export default App;
