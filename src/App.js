import './vendor/normalize.css';
import './App.css';
import './vendor/fonts/font.css';
import Poster from "./pages/posterPage/PosterPage";
import MainPage from "./pages/mainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";

function App() {
  return (
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
      </Routes>
  );
}

export default App;
