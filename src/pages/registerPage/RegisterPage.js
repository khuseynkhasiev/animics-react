import './registerPage.scss';
import {useNavigate} from "react-router";
import {useState} from "react";
export default function RegisterPage() {
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]:value });
    }
    const handleMainPageClick = () => {
        navigate('/');
    }
    const handleNextPageClick = (e) => {
        e.preventDefault();
        navigate('/register-password');
    }
    return (
        <div className='registerPage'>
            <div className='registerPage__container'>
                <div className='registerPage__formContainer'>
                    <form className='registerPage__form' onSubmit={handleNextPageClick} action="" method="POST" id='registerForm'>
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
                                required
                            />
                            <input
                                className='registerPage__input'
                                onChange={handleChangeInput}
                                type="text"
                                name="surname"
                                id='registerPage__surname'
                                placeholder='Фамилия...'
                                required
                            />
                        </div>
                        <p className='registerPage__titleText'>Как к Вам обращаться?</p>
                        <input
                            className='registerPage__input'
                            onChange={handleChangeInput}
                            type="text"
                            name="login"
                            id='registerPage__login'
                            placeholder='логин'
                            required
                        />
                        <p className='registerPage__titleText'>Почта</p>
                        <input
                            className='registerPage__input'
                            onChange={handleChangeInput}
                            type="email"
                            name="email"
                            id='registerPage__email'
                            placeholder='email'
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
                    <div className='registerPage__mainBack' onClick={handleMainPageClick}>
                        <div className='registerPage__mainBackIcon'></div>
                        <p className='registerPage__mainBackText'>в начало</p>
                    </div>
                    <div className='registerPage__speedReg'>
                        <h2 className='registerPage__title registerPage__title_left'>Быстрая регистрация<br/> через сервисы</h2>
                        <ul className='registerPage__list'>
                            <li className='registerPage__item'>
                                <div className='registerPage__iconGoogle'></div>
                                <p className='registerPage__linkText'>присоединиться через Google</p>
                            </li>
                            <li className='registerPage__item'>
                                <div className='registerPage__iconVk'></div>
                                <p className='registerPage__linkText'>присоединиться через ВКонтаке</p>
                            </li>
                            <li className='registerPage__item'>
                                <div className='registerPage__iconYandex'></div>
                                <p className='registerPage__linkText'>присоединиться через Яндекс</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
