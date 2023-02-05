import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Profile from './components/Profile/profile';
import Signin from './components/Signin/signin';
import Signup from './components/Signup/signup';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/"element={<Home/>}/>
    <Route exact path="/profile"element={<Profile/>}/>
    <Route exact path="/signin"element={<Signin/>}/>
    <Route exact path="/signup"element={<Signup/>}/>
    {/* <Route exact path="/"element={<Home/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
