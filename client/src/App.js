import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import homepage from 'scenes/homepage';
import loginpage from 'scenes/loginpage';
import profilepage from 'scenes/profilepage';
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
            <Route path="/" element={<loginpage/>} />
            <Route path="/home" element={<homepage/>} />
            <Route path="/profile/:userId" element={<profilepage/>} />
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
   
      </div>;
}

export default App;
