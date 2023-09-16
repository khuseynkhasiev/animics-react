import './passwordPage.scss';
import {useNavigate} from "react-router";
import {useState} from "react";

export default function PasswordPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();

    const handleBackPageClick = () => {
        navigate('/register');
    }

    const handleInputPasswordValue = (e) => {
        setPassword(e.target.value);
    }
    const handleInputPasswordRepeatValue = (e) => {
        setPasswordRepeat(e.target.value);
    }

    const handleNextPageClick = (e) => {
        e.preventDefault();
        if(password === passwordRepeat) {
            console.log(password);
            console.log(passwordRepeat);
            navigate('/register-finish');
        }
        alert('пароли не совпадают')
    }
    return (
        <div className='passwordPage'>
            <div className='passwordPage__container'>
                <div className='passwordPage__formContainer'>
                    <form className='passwordPage__form' action="" method="POST" onSubmit={handleNextPageClick}>
                        <h2 className='passwordPage__title'>Следующий шаг</h2>
                        <p className='passwordPage__subtitle'>Осталось совсем немного...</p>
                        <p className='passwordPage__titleText'>Придумайте пароль</p>
                        <input
                            className='passwordPage__input'
                            type="password"
                            id='passwordPage__password'
                            name='password'
                            placeholder='пароль'
                            minLength={3}
                            maxLength={30}
                            onChange={handleInputPasswordValue}
                            required
                        />
                        <p className='passwordPage__titleText'>Повторите введеный пароль</p>
                        <input
                            className='passwordPage__input'
                            type="password"
                            id='passwordPage__repeatPassword'
                            name='repeat-password'
                            placeholder='повторите пароль'
                            minLength={3}
                            maxLength={30}
                            onChange={handleInputPasswordRepeatValue}
                            required
                        />
                        <p className='passwordPage__subtext'>здесь мелким шрифтом можно указать параметры пароля</p>
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
        </div>
    );
}
