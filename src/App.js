import './vendor/normalize.css';
import './App.css';
import './vendor/fonts/font.css';
import Poster from "./pages/posterPage/PosterPage";
import MainPage from "./pages/mainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";
import PasswordPage from "./pages/passwordPage/PasswordPage";
import PasswordFinishPage from "./pages/registerFinishPage/RegisterFinishPage";
import FeedbackPage from "./pages/feedbackPage/FeedbackPage";
import * as api from "./utils/api";

function App() {
    function handleRegister(user){
        return api.register(user)
            .then((data) => console.log(data))
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
                console.log(`Ошибка: ${err.json().message}`);
            })
    }

  return (
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/register-password' element={<PasswordPage />}/>
          <Route path='/register-finish' element={<PasswordFinishPage handleRegister={handleRegister}/>}/>
          <Route path='/feedback' element={<FeedbackPage/>}/>
      </Routes>
  );
}

export default App;
