import './vendor/normalize.css';
import './App.css';
import './vendor/fonts/font.css';
import MainPage from "./pages/mainPage/MainPage";
import {Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage/RegisterPage";
import PasswordPage from "./pages/passwordPage/PasswordPage";
import PasswordFinishPage from "./pages/registerFinishPage/RegisterFinishPage";
import FeedbackPage from "./pages/feedbackPage/FeedbackPage";
import NotFound from "./pages/notFound/NotFound";
import RegisterSocialPage from "./pages/registerSocialPage/RegisterSocialPage";
import PasswordSocialPage from "./pages/passwordSocialPage/PasswordSocialPage";
import PasswordSocialFinishPage from "./pages/registerSocialFinishPage/RegisterSocialFinishPage";

function App() {
    return (
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/register-password' element={<PasswordPage />}/>
          <Route path='/register-finish' element={<PasswordFinishPage />}/>
          <Route path='/registration/oauth/:type/:id' element={<RegisterSocialPage />}/>
          <Route path='/register-social-password' element={<PasswordSocialPage />}/>
          <Route path='/register-social-finish' element={<PasswordSocialFinishPage />}/>
          <Route path='/feedback' element={<FeedbackPage/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
  );
}

export default App;
