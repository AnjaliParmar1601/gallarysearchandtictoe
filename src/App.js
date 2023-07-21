import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Route , Routes} from "react-router-dom";
// import Gallary from './components/Gallary';
import Home from './components/Home';
import Tictoe from './components/Tictoe';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/gallary" element={<Gallary />}></Route> */}
      <Route path="/tictoe" element={<Tictoe/>}></Route>
    </Routes>
   </BrowserRouter>    
  );
}

export default App;
