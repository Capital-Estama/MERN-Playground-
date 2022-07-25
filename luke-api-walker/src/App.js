import './App.css';
import Form from './components/Form';
import { Link, Routes, Route } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Err from './components/Err';

function App() {
  return (
    <div className="App">
      <Form />
      <Routes>
       

        <Route path="/people/:id" element={<People />}/>
        <Route path="/planets/:id" element={<Planets />}/>
          
        <Route path={"/*"} element={<Err/>}/>
        
      </Routes>
    </div>
  );
}

export default App;