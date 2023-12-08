import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Home} from './components/Home';
import { Biography } from './components/Biography';
import { Diagnosis } from './components/Diagnosis';
import {Treatment} from './components/Treatment';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className = "App">
      <NavBar/>
      <Home/>
      <Biography/>
      <Diagnosis/>
      <Treatment/>
    </div>
  );
}

export default App;
