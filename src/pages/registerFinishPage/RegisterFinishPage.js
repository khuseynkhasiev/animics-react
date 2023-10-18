import './registerFinishPage.scss';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import PopupRegister from "../../components/popupRegister/PopupRegister";
import * as api from "../../utils/api";
import {register} from "../../utils/api";
export default function RegisterFinishPage() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() - 14;
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [consent, setConsent] = useState(false);

    const [errorTextActive, setErrorTextActive] = useState(false);
    const [errorTextDateActive, setErrorTextDateActive] = useState(false);


    const [registerPopupText, setRegisterPopupText] = useState(' ')
    const [registerPopupIsError, setRegisterPopupIsError] = useState(false);
    const [registerPopupIsOpen, setRegisterPopupIsOpen] = useState(false);
    const [registerPopupMainNavigate, setRegisterPopupMainNavigate] = useState(true)

    function handleRegisterPopupOpen(){
        setRegisterPopupIsOpen(true);
    }
    function handleRegisterPopupExit(){
        setRegisterPopupIsOpen(false);
        if(registerPopupMainNavigate) {
            navigate('/');
            localStorage.removeItem('RegUser');
        }
    }

    function handleRegister(user) {
        return api.register(user)
            .then((data) => {
                // Обработка успешного ответа сервера
                handleRegisterPopupOpen();
                setRegisterPopupMainNavigate(true)
                setRegisterPopupIsError(false);
                console.log(data.message);
                setRegisterPopupText('Для завершения регистрации Вам необходимо подтвердить электронный адрес. Письмо мы отправили, ожидайте.')
            })
            .catch((err) => {
                handleRegisterPopupOpen();
                setRegisterPopupMainNavigate(false)
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
    }



    useEffect(() => {
        const year = +date.slice(0, 4);
        const month = +date.slice(6,7);
        const day = +date.slice(8,10);

        if (year > currentYear ) {
            setErrorTextDateActive(true);
        } else if(year < currentYear) {
            setErrorTextDateActive(false);
        } else if(year === currentYear) {
            if(month > currentMonth) {
                setErrorTextDateActive(true);
            } else if(month < currentMonth) {
                setErrorTextDateActive(false);
            } else if(month === currentMonth) {
                if(day > currentDay) {
                    setErrorTextDateActive(true);
                } else if(day < currentDay){
                    setErrorTextDateActive(false);
                } else if(day === currentDay) {
                    setErrorTextDateActive(false);
                }
            }
        }
    }, [date])
    const handleBackPageClick = () => {
        navigate('/register-password');
    }

    const handleChangeValueInputDate = (e) => {
        setDate(e.target.value);
    }

    const handleChangeValueInputAgreement = (e) => {
        setAgreement(e.target.checked)
    }
    const handleChangeValueInputConsent = (e) => {
        setConsent(e.target.checked)
    }

    function addValueRegUser () {
        const user = JSON.parse(localStorage.getItem('RegUser'));
        localStorage.setItem('RegUser', JSON.stringify({...user, date, agreement, consent}));
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(agreement){
            setErrorTextActive(false);
            if(!errorTextDateActive) {
                addValueRegUser();
                const user = JSON.parse(localStorage.getItem('RegUser'));
                handleRegister(user);
                setErrorTextActive(false);
            }
        } else {
            setErrorTextActive(true);
        }

    }
    return (
        <div className='registerFinishPage'>
            <PopupRegister
                registerPopupText={registerPopupText}
                handleRegisterPopupOpen={handleRegisterPopupOpen}
                handleRegisterPopupExit={handleRegisterPopupExit}
                registerPopupIsOpen={registerPopupIsOpen}
                registerPopupIsError={registerPopupIsError}/>
            <div className='registerFinishPage__formContainer'>
                <div className='registerFinishPage__content'>
                    <h2 className='registerFinishPage__title'>Финиш!</h2>
                    <p className='registerFinishPage__subtitle'>Вы это сделали!</p>
                    <div className="registerFinishPage__flexBox">
                        <form className='registerFinishPage__form' id='registerFinishPage' action="" method="POST" onSubmit={handleSubmitForm}>
                            <p className='registerFinishPage__titleText'>Когда Вы родились?</p>
                            <input
                                className='registerFinishPage__input'
                                type="date"
                                id='registerFinishPage__date'
                                name='date'
                                placeholder='дд.мм.гггг.'
                                onChange={handleChangeValueInputDate}
                                required
                            />
                            <div className="registerFinishPage__inputContainer">
                                <input
                                    className="registerFinishPage__inputCheckbox"
                                    type="checkbox"
                                    name="agreement"
                                    id='agreement'
                                    onChange={handleChangeValueInputAgreement}
                                />
                                <label className='registerFinishPage__labelCheckbox' htmlFor='agreement'>какое то очень длинное пользовательсоке соглашение о том что передаются и обрабатываются персональные данные</label>
                            </div>
                            <div className="registerFinishPage__inputContainer">
                                <input
                                    className="registerFinishPage__inputCheckbox"
                                    type="checkbox"
                                    name="consent"
                                    id='consent'
                                    onChange={handleChangeValueInputConsent}
                                />
                                <label className='registerFinishPage__labelCheckbox' htmlFor='consent'>даю согласие на то чтобы получать оповещения и рссылки на почту/телефон</label>
                            </div>
                            {errorTextActive && <p className='registerFinishPage__errorText'>Необходимо принять пользовательское соглашение!</p>}
                            {errorTextDateActive && <p className='registerFinishPage__errorText'>Вам должно быть 14+ лет</p>}
                        </form>
                        <div className="registerFinishPage__qrBlock">
                            <div className='registerFinishPage__qrBlockBg'></div>
                            <p className="registerFinishPage__qrText">Осталось скачать наше приложение...</p>
                            <p className="registerFinishPage__qrSubtext">погрузись в другую реальность...</p>
                        </div>
                    </div>
                    <div className='registerFinishPage__btnContainer'>
                        <button
                            className='registerFinishPage__submit'
                            type='button'
                            onClick={handleBackPageClick}
                        >Назад</button>
                        <button
                            className='registerFinishPage__submit'
                            type='submit'
                            form='registerFinishPage'
                        >Завершить</button>
                    </div>
                    <div className='registerFinishPage__footer'></div>
                </div>
            </div>
        </div>
    );
}
