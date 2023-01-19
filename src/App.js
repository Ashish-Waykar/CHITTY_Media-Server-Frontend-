import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Home/>
    </BrowserRouter>
  );
}

export default App;
