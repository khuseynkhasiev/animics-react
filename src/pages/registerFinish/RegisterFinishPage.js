import './registerFinishPage.scss';
import {useNavigate} from "react-router";
export default function RegisterFinishPage() {
    const navigate = useNavigate();

    const handleBackPageClick = () => {
        navigate('/register-password');
    }
    const handleMainPageClick = () => {
        navigate('/');
    }
    return (
        <div className='registerFinishPage'>
            <div className='registerFinishPage__container'>
                <div className='registerFinishPage__formContainer'>
                    <h2 className='registerFinishPage__title'>Финиш!</h2>
                    <p className='registerFinishPage__subtitle'>Вы это сделали!</p>
                    <div className="registerFinishPage__flexBox">
                        <form className='registerFinishPage__form' action="" method="POST">
                            <p className='registerFinishPage__text'>(следующие поля не являются обязательными к заполнению)</p>
                            <p className='registerFinishPage__titleText'>Когда Вы родились?</p>
                            <input
                                className='registerFinishPage__input'
                                type="date"
                                id='registerFinishPage__date'
                                name='date'
                                placeholder='дд.мм.гггг.'
                            />
                            <div className="registerFinishPage__inputContainer">
                                <input
                                    className="registerFinishPage__inputCheckbox"
                                    type="checkbox"
                                    name="agreement"
                                    id='agreement'
                                    value="yes"/>
                                <label className='registerFinishPage__labelCheckbox' htmlFor='agreement'>какое то очень длинное пользовательсоке соглашение о том что передаются и обрабатываются персональные данные для чего то тамкакое то очень длинное пользовательсоке соглашение о том что передаются и обрабатываются персональные данные для чего то тамкакое то очень длинное пользовательсоке соглашение о том что передаются и обрабатываются персональные данные </label>
                            </div>
                            <div className="registerFinishPage__inputContainer">
                                <input
                                    className="registerFinishPage__inputCheckbox"
                                    type="checkbox"
                                    name="consent"
                                    id='consent'
                                    value="yes"/>
                                <label className='registerFinishPage__labelCheckbox' htmlFor='consent'>даю согласие на то чтобы получать оповещения и рссылки на почту/телефон и что то в этом родедаю согласие на то чтобы получать оповещения и рссылки на почту/телефон и что то в этом родедаю согласие на то чтобы получать оповещения и рссылки на почту/телефон и что то в этом родедаю согласие на то чтобы получать оповещения и рссылки на почту/телефон и что то в этом роде</label>
                            </div>
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
                            onClick={handleMainPageClick}
                        >Завершить</button>
                    </div>
                    <div className='registerFinishPage__footer'></div>
                </div>
            </div>
        </div>
    );
}
