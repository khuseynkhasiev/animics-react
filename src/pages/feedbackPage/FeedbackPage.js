import './feedbackPage.scss';
import {useNavigate} from "react-router";
import {useState} from "react";
import * as api from "../../utils/api";
import PopupRegister from "../../components/popupRegister/PopupRegister";

export default function FeedbackPage() {
    const navigate = useNavigate();

    const [registerPopupText, setRegisterPopupText] = useState(' ')
    const [registerPopupIsError, setRegisterPopupIsError] = useState(false);
    const [registerPopupIsOpen, setRegisterPopupIsOpen] = useState(false);
    const [registerPopupMainNavigate, setRegisterPopupMainNavigate] = useState(true)

    const [feedbackMessage, setFeedBack] = useState({ });

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

    const handleChangeInputValueForm = (e) => {
        const {name, value} = e.target;
        setFeedBack({...feedbackMessage, [name]: value});
    }
    const handleClickBackMainPage = () => {
        navigate('/');
    }
    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(feedbackMessage);
        /*e.target.reset();*/
        sendMessage(event);

    }

    function sendMessage(event){
        api.sendMessageSupportEmail(feedbackMessage)
            .then((data) => {
                // Обработка успешного ответа сервера
                handleRegisterPopupOpen();
                setRegisterPopupMainNavigate(true)
                setRegisterPopupIsError(false);
                setRegisterPopupText('Ваше сообщение успешно отправлено')
                console.log(data.message);
                event.target.reset();
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

    return (
        <div className='feedbackPage'>
            <PopupRegister
                registerPopupText={registerPopupText}
                handleRegisterPopupOpen={handleRegisterPopupOpen}
                handleRegisterPopupExit={handleRegisterPopupExit}
                registerPopupIsOpen={registerPopupIsOpen}
                registerPopupIsError={registerPopupIsError}/>
            <div className='feedbackPage__formContainer'>
                <form
                    className='feedbackPage__form'
                    action=""
                    method="POST"
                    id='feedbackForm'
                    onSubmit={handleSubmitForm}
                >
                    <h2 className='feedbackPage__title'>Обратная связь</h2>
                    <p className='feedbackPage__subtitle'>Поделитесь своими впечатлениями о нашем комиксе. Что вам понравилось больше всего? Какие персонажи вас заинтересовали? Есть ли идеи по улучшению? У вас есть идеи для новых сюжетов или персонажей? Или если у вас возникли проблемы с использованием нашего комикс-создателя, наши специалисты по технической поддержке всегда готовы помочь вам решить их. Дайте нам знать
                        Мы всегда готовы воплотить новые идеи в жизнь.</p>
                    <p className='feedbackPage__titleText'>Имя
                        <span className='feedbackPage__titleText_lightText'> (Как к Вам лучше обращаться?)</span>
                    </p>
                    <input
                        className='feedbackPage__input'
                        type="text"
                        id='feedbackPage__name'
                        name='name'
                        onChange={handleChangeInputValueForm}
                        required
                    />
                    <p className='feedbackPage__titleText'>Почта
                        <span className='feedbackPage__titleText_lightText'> (Это необходимо чтобы Мы могли с Вами связаться)</span>
                    </p>
                    <input
                        className='feedbackPage__input'
                        type="email"
                        id='feedbackPage__email'
                        name='email'
                        onChange={handleChangeInputValueForm}
                        required
                    />
                    <p className='feedbackPage__titleText'>Ваше сообщение</p>
                    <input
                        className='feedbackPage__input'
                        type="text"
                        id='feedbackPage__password'
                        name='message'
                        onChange={handleChangeInputValueForm}
                        required
                    />
                    <div className='feedbackPage__btnContainer'>
                        <button
                            className='feedbackPage__submit'
                            type='submit'
                        >Отправить</button>
                    </div>
                </form>
                <div className='feedbackPage__mainBack' onClick={handleClickBackMainPage}>
                    <div className='feedbackPage__mainBackIcon'></div>
                    <p className='feedbackPage__mainBackText'>в начало</p>
                </div>
            </div>
        </div>
    );
}
