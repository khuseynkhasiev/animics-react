import './passwordPage.scss';
import { useNavigate } from "react-router";
import {useEffect, useState} from "react";
import LoaderMain from "../../components/loaderMain/LoaderMain";
import registerImage from "../../image/register-bg.jpg";

export default function PasswordPage() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('RegUser'));

    const [password, setPassword] = useState(user.password);
    const [passwordRepeat, setPasswordRepeat] = useState(user.password);

    const errorMessage = document.querySelector('.passwordPage__subtext');
    const [activeError, setActiveError ] = useState(true)

    const [showPassword, setShowPassword] = useState(true);
    const [showRepeatPassword, setShowRepeatPassword] = useState(true);

    const [imagesLoaded, setImagesLoaded] = useState(true);

    useEffect(() => {
        const register = new Image();
        register.src = registerImage;
        register.onload = () => {
            setImagesLoaded(false);
        };
    }, []);

    const handleInputPasswordValue = (e) => {
        setPassword(e.target.value);
    }
    const handleInputPasswordRepeatValue = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const handleBackPageClick = () => {
        navigate('/register');
    }

    function hasUpperCaseAndLowerCase(str) {
        return /[A-Z]/.test(str) && /[a-z0-9]/.test(str);
    }

    function addValueRegUser () {
        localStorage.setItem('RegUser', JSON.stringify({...user, password: password, password_confirmation: passwordRepeat }));
    }

    const checkSubmitPasswordValue = () => {
        if (hasUpperCaseAndLowerCase(password) && hasUpperCaseAndLowerCase(passwordRepeat)) {
            if (password === passwordRepeat) {
                setActiveError(true);
                addValueRegUser();
                navigate('/register-finish');
            } else {
                setActiveError(false);
                errorMessage.classList.add('passwordPage__subtext_error');
            }
        } else {
            setActiveError(true);
            errorMessage.classList.add('passwordPage__subtext_error');
        }
    }

    const handleNextPageClick = (e) => {
        e.preventDefault();
        checkSubmitPasswordValue();
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    }

    return (
        <>
            {
                imagesLoaded ? (
                    <LoaderMain />
                ) : (
                    <div className='passwordPage'>
                        <div className='passwordPage__formContainer'>
                            <form className='passwordPage__form' action="" method="POST" onSubmit={handleNextPageClick}>
                                <h2 className='passwordPage__title'>Следующий шаг</h2>
                                <p className='passwordPage__subtitle'>Осталось совсем немного...</p>
                                <p className='passwordPage__titleText'>Придумайте пароль</p>
                                <div className="passwordPage__passwordContainer">
                                    <input
                                        className='passwordPage__input'
                                        type={showPassword ? "password" : "text"}
                                        id='passwordPage__password'
                                        name='password'
                                        placeholder='пароль'
                                        minLength={8}
                                        maxLength={30}
                                        value={password}
                                        onChange={handleInputPasswordValue}
                                        required
                                    />
                                    <div className={showPassword ? "passwordPage__password-control_view" : "passwordPage__password-control"} onClick={togglePasswordVisibility}></div>
                                </div>
                                <p className='passwordPage__titleText'>Повторите введенный пароль</p>
                                <div className="passwordPage__passwordContainer">
                                    <input
                                        className='passwordPage__input'
                                        type={showRepeatPassword ? "password" : "text"}
                                        id='passwordPage__repeatPassword'
                                        name='repeat-password'
                                        placeholder='пароль'
                                        minLength={8}
                                        maxLength={30}
                                        value={passwordRepeat}
                                        onChange={handleInputPasswordRepeatValue}
                                        required
                                    />
                                    <div className={showRepeatPassword ? "passwordPage__password-control_view" : "passwordPage__password-control"} onClick={toggleRepeatPasswordVisibility}></div>
                                </div>
                                {activeError ?
                                    <p className='passwordPage__subtext '>Пароль должен быть не меньше 8 символов, содержать символ верхнего и нижнего регистра</p>
                                    :
                                    <p className='passwordPage__subtext '>Пароли не совпадают</p>
                                }
                                <div className='passwordPage__btnContainer'>
                                    <button
                                        className='passwordPage__submit'
                                        type='button'
                                        onClick={handleBackPageClick}
                                    >Назад</button>
                                    <button
                                        className='passwordPage__submit'
                                        type='submit'
                                    >Далее</button>
                                </div>
                                <div className='passwordPage__footer'></div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    );
}
