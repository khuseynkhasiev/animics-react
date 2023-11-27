import './registerSocialPage.scss';
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import * as api from "../../utils/api";
import LoaderRegister from "../../components/loaderRegister/LoaderRegister";
import PopupRegister from "../../components/popupRegister/PopupRegister";
import { useParams } from 'react-router-dom';
import registerSocialImage from "../../image/register-bg.jpg";


export default function RegisterSocialPage() {
    const { social, state } = useParams();
    const navigate = useNavigate();
    const [onLoader, setOnLoader] = useState(false);
    const [isCheckLogin, setIsCheckLogin] = useState(false);
    const [isCheckEmail, setIsCheckEmail] = useState(false)

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
        uuid: state
    });

    const [registerPopupText, setRegisterPopupText] = useState(' ')
    const [registerPopupIsOpen, setRegisterPopupIsOpen] = useState(false);

    useEffect(() => {
        const register = new Image();
        register.src = registerSocialImage;
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
            navigate('/register-social-password');
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
        <div className='registerSocialPage'>
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
                        <div className='registerSocialPage__formContainer'>
                            <div className='registerSocialPage__register'>
                                <form className='registerSocialPage__form' onSubmit={handleSubmitForm} action="" method="POST" id='registerForm'>
                                    <h2 className='registerSocialPage__title'>Регистрация учетной записи</h2>
                                    <p className='registerSocialPage__subtitle'>Уже есть учетная запись? Тогда переходи сюда >>></p>
                                    <div className='registerSocialPage__blockName'>
                                        <input
                                            className='registerSocialPage__input'
                                            onChange={handleChangeInput}
                                            type="text"
                                            name="name"
                                            id='registerSocialPage__name'
                                            placeholder='Имя...'
                                            value={user.name}
                                            required
                                        />
                                        <input
                                            className='registerSocialPage__input'
                                            onChange={handleChangeInput}
                                            type="text"
                                            name="surname"
                                            id='registerSocialPage__surname'
                                            placeholder='Фамилия...'
                                            value={user.surname}
                                            required
                                        />
                                    </div>
                                    {isCheckLogin ?
                                        <p style={{color: "red"}} className='registerSocialPage__titleText'>Такой логин уже существует</p>
                                        :
                                        <p className='registerSocialPage__titleText'>Как к Вам обращаться?</p>
                                    }
                                    <input
                                        className='registerSocialPage__input'
                                        onChange={handleChangeInput}
                                        type="text"
                                        name="login"
                                        id='registerSocialPage__login'
                                        placeholder='логин'
                                        value={user.login}
                                        required
                                    />
                                    {isCheckEmail ?
                                        <p style={{color: "red"}} className='registerSocialPage__titleText'>Такая почта уже существует</p>
                                        :
                                        <p className='registerSocialPage__titleText'>Почта</p>
                                    }
                                    <input
                                        className='registerSocialPage__input'
                                        onChange={handleChangeInput}
                                        type="email"
                                        name="email"
                                        id='registerSocialPage__email'
                                        placeholder='email'
                                        value={user.email}
                                        required
                                    />
                                    <div className='registerSocialPage__btnContainer'>
                                        <button
                                            className='registerSocialPage__submit'
                                            type='submit'
                                            form='registerForm'
                                        >Далее
                                        </button>
                                    </div>
                                    <div className='registerSocialPage__footer'></div>
                                </form>
                            </div>
                            <div className='registerSocialPage__mainBack' onClick={handleMainPageClick}>
                                <div className='registerSocialPage__mainBackIcon'></div>
                                <p className='registerSocialPage__mainBackText'>в начало</p>
                            </div>
                        </div>
                    </>
                }
        </div>
    );
}
