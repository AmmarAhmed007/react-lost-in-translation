import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './views/Profile';
import Startup from './views/Startup';
import Translation from './views/Translation';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Startup /> } />
          <Route path="/translation" element= { <Translation /> } />
          <Route path="/profile" element={ <Profile /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
