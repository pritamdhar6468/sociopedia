import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Homepage from 'scenes/Homepage';
import Loginpage from 'scenes/Loginpage';
import Profilepage from 'scenes/Profilepage';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from './theme';
import state from 'state';


function App() {


  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return <div className="app"> 
    
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/home" element={<Homepage/>} />
            <Route path="/profile/:userId" element={<Profilepage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
   
      </div>;
}

export default App;
