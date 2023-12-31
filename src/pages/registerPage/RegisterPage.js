import './registerPage.scss';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import * as api from "../../utils/api";
import LoaderRegister from "../../components/loaderRegister/LoaderRegister";
import PopupRegister from "../../components/popupRegister/PopupRegister";
import LoaderMain from "../../components/loaderMain/LoaderMain";
import registerImage from "../../image/register-bg.jpg";

export default function RegisterPage() {
    const navigate = useNavigate();
    const [onLoader, setOnLoader] = useState(false);
    const [isCheckLogin, setIsCheckLogin] = useState(false);
    const [isCheckEmail, setIsCheckEmail] = useState(false);

    const [imagesLoaded, setImagesLoaded] = useState(true);

    const [user, setUser] = useState({
        name: '',
        surname: '',
        login: '',
        email: '',
        password: '',
        password_confirmation: '',
        consent: false,
        agreement: false,
    });

    const [registerPopupText, setRegisterPopupText] = useState(' ')
    /*const [registerPopupIsError, setRegisterPopupIsError] = useState(false);*/
    const [registerPopupIsOpen, setRegisterPopupIsOpen] = useState(false);

    useEffect(() => {
        const register = new Image();
        register.src = registerImage;
        register.onload = () => {
            setImagesLoaded(false);
        };
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('RegUser'))
        if (user !== null || undefined) {
            setUser(user);
        }
    }, []);

    const handleNextPageClick = (isLogin = false, isEmail = false) => {
        if(isLogin === false && isEmail === false){
            navigate('/register-password');
        }
    }

    function handleRegisterPopupOpen(){
        setRegisterPopupIsOpen(true);
    }
    function handleRegisterPopupExit(){
        setRegisterPopupIsOpen(false);
    }

    function handleCheckUser(login, email) {
        Promise.all([api.checkUniqueLogin(login), api.checkUniqueEmail(email)])
            .then(([isLogin, isEmail]) => {
                setIsCheckLogin(isLogin);
                setIsCheckEmail(isEmail);
                localStorage.setItem('RegUser', JSON.stringify(user));
                handleNextPageClick(isLogin, isEmail);
            })
            .catch((err) => {
                handleRegisterPopupOpen();
                if (err instanceof TypeError && err.message === 'Failed to fetch') {
                    // Обработка ошибки, если нет интернет-соединения
                    console.error('Нет интернет-соединения');
                    setRegisterPopupText('Нет интернет-соединения')
                } else {
                    console.error('Необработанная ошибка:', err);
                    setRegisterPopupText(`Необработанная ошибка: ${err}`)
                }
            })
            .finally(() => setOnLoader(false));
    }

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value });
    }
    const handleMainPageClick = () => {
        navigate('/');
        localStorage.removeItem('RegUser');
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setOnLoader(true);
        handleCheckUser(user.login, user.email);
    }

    return (
        <>
            {
                imagesLoaded ? (
                        <LoaderMain />
                    ) : (
                        <div className='registerPage'>
                            {onLoader
                                ?
                                <LoaderRegister />
                                :
                                <>
                                    <PopupRegister
                                        registerPopupText={registerPopupText}
                                        handleRegisterPopupOpen={handleRegisterPopupOpen}
                                        handleRegisterPopupExit={handleRegisterPopupExit}
                                        registerPopupIsOpen={registerPopupIsOpen}
                                        registerPopupIsError={true}/>
                                    <div className='registerPage__formContainer'>
                                        <div className='registerPage__register'>
                                            <form className='registerPage__form' onSubmit={handleSubmitForm} action="" method="POST" id='registerForm'>
                                                <h2 className='registerPage__title'>Регистрация учетной записи</h2>
                                                <p className='registerPage__subtitle'>Уже есть учетная запись? Тогда переходи сюда >>></p>
                                                <div className='registerPage__blockName'>
                                                    <input
                                                        className='registerPage__input'
                                                        onChange={handleChangeInput}
                                                        type="text"
                                                        name="name"
                                                        id='registerPage__name'
                                                        placeholder='Имя...'
                                                        value={user.name}
                                                        required
                                                    />
                                                    <input
                                                        className='registerPage__input'
                                                        onChange={handleChangeInput}
                                                        type="text"
                                                        name="surname"
                                                        id='registerPage__surname'
                                                        placeholder='Фамилия...'
                                                        value={user.surname}
                                                        required
                                                    />
                                                </div>
                                                {isCheckLogin ?
                                                    <p style={{color: "red"}} className='registerPage__titleText'>Такой логин уже существует</p>
                                                    :
                                                    <p className='registerPage__titleText'>Как к Вам обращаться?</p>
                                                }
                                                <input
                                                    className='registerPage__input'
                                                    onChange={handleChangeInput}
                                                    type="text"
                                                    name="login"
                                                    id='registerPage__login'
                                                    placeholder='логин'
                                                    value={user.login}
                                                    required
                                                />
                                                {isCheckEmail ?
                                                    <p style={{color: "red"}} className='registerPage__titleText'>Такая почта уже существует</p>
                                                    :
                                                    <p className='registerPage__titleText'>Почта</p>
                                                }
                                                <input
                                                    className='registerPage__input'
                                                    onChange={handleChangeInput}
                                                    type="email"
                                                    name="email"
                                                    id='registerPage__email'
                                                    placeholder='email'
                                                    value={user.email}
                                                    required
                                                />
                                                <div className='registerPage__btnContainer'>
                                                    <button
                                                        className='registerPage__submit'
                                                        type='submit'
                                                        form='registerForm'
                                                    >Далее
                                                    </button>
                                                </div>
                                                <div className='registerPage__footer'></div>
                                            </form>
                                            <div className='registerPage__speedReg'>
                                                <h2 className='registerPage__title registerPage__title_left'>Быстрая регистрация<br/> через сервисы</h2>
                                                <ul className='registerPage__list'>
                                                    <li className='registerPage__item'>
                                                        <div className='registerPage__iconGoogle'></div>
                                                        <a className='registerPage__linkText' href='https://animics.ru/api/oauth/google/redirect'>присоединиться через Google</a>
                                                    </li>
                                                    <li className='registerPage__item'>
                                                        <div className='registerPage__iconVk'></div>
                                                        <a className='registerPage__linkText' href='https://animics.ru/api/oauth/vkontakte/redirect'>присоединиться через ВКонтаке</a>
                                                    </li>
                                                    <li className='registerPage__item'>
                                                        <div className='registerPage__iconYandex'></div>
                                                        <a className='registerPage__linkText' href='https://animics.ru/api/oauth/yandex/redirect'>присоединиться через Яндекс</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='registerPage__mainBack' onClick={handleMainPageClick}>
                                            <div className='registerPage__mainBackIcon'></div>
                                            <p className='registerPage__mainBackText'>в начало</p>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                )
            }
        </>

    );
}
