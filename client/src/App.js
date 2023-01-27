import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import homepage from 'scenes/homepage';
import loginpage from 'scenes/loginpage';
import profilepage from 'scenes/profilepage';

function App() {
  return <div className="app"> 
    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<loginpage/>} />
            <Route path="/home" element={<homepage/>} />
            <Route path="/profile/:userId" element={<profilepage/>} />
        </Routes>
      </BrowserRouter>
   
      </div>;
}

export default App;
