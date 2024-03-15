import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navigationbar} from './components/Navigationbar';
import { Contact } from './components/Contact';
//import { Routes } from './components/Routes';

function App() {
  return (
    <BrowserRouter>
     <Navigationbar></Navigationbar>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
    
    </BrowserRouter>
          
          
   
  );
}

export default App;
