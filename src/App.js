
import { useState,} from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter, Routes, Route }  from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert =  (message, type)=>{
    setAlert({
      msg: message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }



  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#6e0e0e';
      document.body.style.backgroundColor = '#1a1c1e';
      showAlert("Dark Mode has enable", "success");
      document.title = "TextUtils - Dark Mode";

    //   setInterval(() => {
    //     document.title = "Textutils-Amazing"
    //   }, 2000);
    //   setInterval(() => {
    //     document.title = "Install Textutils Now"
    //   }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has enable", "success");
      document.title = "TextUtils - Light Mode";
    }
   
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
         {/* <Routes>
          <Route path="/" element={ <TextForm showAlert={showAlert} heading= "Enter the text to analyze bellow" mode={mode}/>} />
          <Route path="/about" element={<About />} />
        </Routes> */}
        <TextForm showAlert={showAlert} heading= "Enter the text to analyze bellow" mode={mode}/>
      
      </div>
      {/* </BrowserRouter> */}
      
    </>
  );
}

export default App;
