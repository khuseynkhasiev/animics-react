import './passwordSocialPage.scss';
import { useNavigate } from "react-router";
import { useState } from "react";


export default function PasswordSocialPage() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('RegUser'));

    const [password, setPassword] = useState(user.password);
    const [passwordRepeat, setPasswordRepeat] = useState(user.password);

    const errorMessage = document.querySelector('.passwordPage__subtext');
    const [activeError, setActiveError ] = useState(true)

    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleInputPasswordValue = (e) => {
        setPassword(e.target.value);
    }
    const handleInputPasswordRepeatValue = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const handleBackPageClick = () => {
        navigate(-1);
        /*        navigate('/register');*/
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
                navigate('/register-social-finish');
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
        <div className='passwordPage'>
            <div className='passwordPage__formContainer'>
                <form className='passwordPage__form' action="" method="POST" onSubmit={handleNextPageClick}>
                    <h2 className='passwordPage__title'>Следующий шаг</h2>
                    <p className='passwordPage__subtitle'>Осталось совсем немного...</p>
                    <p className='passwordPage__titleText'>Придумайте пароль</p>
                    <div className="passwordPage__passwordContainer">
                        <input
                            className='passwordPage__input'
                            type={showPassword ? "text" : "password"}
                            id='passwordPage__password'
                            name='password'
                            placeholder='пароль'
                            minLength={8}
                            maxLength={30}
                            value={password}
                            onChange={handleInputPasswordValue}
                            required
                        />
                        <a href="#" className={showPassword ? "passwordPage__password-control_view" : "passwordPage__password-control"} onClick={togglePasswordVisibility}></a>
                    </div>
                    <p className='passwordPage__titleText'>Повторите введенный пароль</p>
                    <div className="passwordPage__passwordContainer">
                        <input
                            className='passwordPage__input'
                            type={showRepeatPassword ? "text" : "password"}
                            id='passwordPage__repeatPassword'
                            name='repeat-password'
                            placeholder='пароль'
                            minLength={8}
                            maxLength={30}
                            value={passwordRepeat}
                            onChange={handleInputPasswordRepeatValue}
                            required
                        />
                        <a href="#" className={showRepeatPassword ? "passwordPage__password-control_view" : "passwordPage__password-control"} onClick={toggleRepeatPasswordVisibility}></a>
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
    );
}
