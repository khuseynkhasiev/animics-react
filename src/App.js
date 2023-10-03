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
import {useState} from "react";

function App() {
/*    const [registerPopupText, setRegisterPopupText] = useState(' ')
    const [registerPopupIsError, setRegisterPopupIsError] = useState(false);
/!*    function handleRegister(user){
        return api.register(user)
            .then((data) => {
                console.log(data);
                console.log(data.message);
            })
            .catch((err) => {
                console.log(err.code);
                console.log(err.errors)
                console.log(err.errors.login[0])
                console.log(err.errors.email[0])
            })
    }*!/
function handleRegister(user) {
        return api.register(user)
            .then((data) => {
                // Обработка успешного ответа сервера
                setRegisterPopupIsError(false);
                console.log(data.message);
                setRegisterPopupText('Для завершения регистрации Вам необходимо подтвердить электронный адрес. Письмо мы отправили, ожидайте.')
            })
            .catch((err) => {
                setRegisterPopupIsError(true);
                if (err instanceof TypeError && err.message === 'Failed to fetch') {
                    // Обработка ошибки, если нет интернет-соединения
                    console.error('Нет интернет-соединения');
                    setRegisterPopupText('Нет интернет-соединения')
                } else if (err instanceof Response) {
                    // Обработка ошибки, если пришел ответ от сервера с ошибкой
                    err.json()
                        .then((errorData) => {
                            if (errorData && errorData.errors) {
                                // Если сервер вернул ошибки валидации формы
                                const loginError = errorData.errors.login ? errorData.errors.login[0] : '';
                                const emailError = errorData.errors.email ? errorData.errors.email[0] : '';
                                console.error(`${loginError} ${emailError}`);
                                setRegisterPopupText(`${loginError} ${emailError}`)
                            } else {
                                console.error(`Ошибка сервера. Код: ${err.status}, Текст: ${err.statusText}`);
                                setRegisterPopupText(`Ошибка сервера. Код: ${err.status}, Текст: ${err.statusText}`)
                            }
                        })
                        .catch((jsonErr) => {
                            console.error('Ошибка разбора JSON:', jsonErr);
                            setRegisterPopupText(`Ошибка разбора JSON:, ${jsonErr}`)
                        });
                } else {
                    console.error('Необработанная ошибка:', err);
                    setRegisterPopupText(`Необработанная ошибка: ${err}`)
                }
            });
    }*/

    return (
      <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/register-password' element={<PasswordPage />}/>
          <Route path='/register-finish' element={<PasswordFinishPage/>}/>
          <Route path='/feedback' element={<FeedbackPage/>}/>
      </Routes>
  );
}

export default App;
