import './registerPage.scss';
export default function RegisterPage() {
    return (
        <div className='registerPage'>
            <div className='registerPage__container'>
                <div className='registerPage__formContainer'>
                    <form className='registerPage__form' action="" method="POST">
                        <h2 className='registerPage__title'>Регистрация учетной записи</h2>
                        <p className='registerPage__subtitle'>Уже есть учетная запись? Тогда переходи сюда >>></p>
                        <div className='registerPage__blockName'>
                            <input className='registerPage__input' type="text" id='registerPage__name' placeholder='Имя...'/>
                            <input className='registerPage__input' type="text" id='registerPage__surname' placeholder='Фамилия...'/>
                        </div>
                        <p className='registerPage__titleText'>Как к Вам обращаться?</p>
                        <input className='registerPage__input' type="text" id='registerPage__login' placeholder='логин'/>
                        <p className='registerPage__titleText'>Почта</p>
                        <input className='registerPage__input' type="email" id='registerPage__email' placeholder='email'/>
                        <div className='registerPage__btnContainer'>
                            <button className='registerPage__submit' type='submit'>Далее</button>
                        </div>
                        <div className='registerPage__footer'></div>
                    </form>
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
