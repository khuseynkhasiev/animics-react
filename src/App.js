import './vendor/normalize.css';
import './App.css';
import './vendor/fonts/font.css';
import Poster from "./pages/posterPage/PosterPage";
import MainPage from "./pages/mainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";
import PasswordPage from "./pages/passwordPage/PasswordPage";
import PasswordFinishPage from "./pages/registerFinish/RegisterFinishPage";

function App() {
  return (
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/register-password' element={<PasswordPage />}/>
          <Route path='/register-finish' element={<PasswordFinishPage/>}/>
      </Routes>
  );
}

export default App;
