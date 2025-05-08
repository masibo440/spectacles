import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Getspectacles from './components/Getspectacles';
import Addspectacles from './components/Addspectacles';
import Signin from './components/Signin';
import Signup from './components/Signup';
import"bootstrap/dist/js/bootstrap.min.js";
import Mpesapayment from './components/Mpesapayment';
import Aboutus from './components/Aboutus';
import Chatus from './components/Chatus';


function App() {
  
  return (
  
    <Router>
       <div className="App">
      <header className="App-header">
       <h1>Optical Shop</h1>
      </header>
      <nav>
        {/* <Link to={'/'} className='links'>Get spectacles</Link>
        <Link to={'/addspectacles'} className='links'>Add spectacles</Link>
        <Link to={'/signin'} className='links'>Signin</Link>
        <Link to={'/signup'} className='links'>Signup</Link> */}
      </nav>
      <Routes>
        <Route path='/' element={<Getspectacles/>}/>
        <Route path='/addspectacles' element={<Addspectacles/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/mpesapayment' element={<Mpesapayment/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/chatus' element={<Chatus/>}/>
      </Routes>
    </div>  
    </Router>
    
  );
}

export default App;
