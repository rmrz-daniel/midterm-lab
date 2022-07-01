import './App.css';
import { BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate,
 } from 'react-router-dom';
import Students from './Components/Students';
import TestPage from './Components/TestPage';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Students/>}/>
        <Route path="/test" element={<TestPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
