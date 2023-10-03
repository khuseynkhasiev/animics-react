import './feedbackPage.scss';
import {useNavigate} from "react-router";
import {useState} from "react";
export default function FeedbackPage() {
    const navigate = useNavigate();

    const [feedbackMessage, setFeedBack] = useState({ });

    const handleChangeInputValueForm = (e) => {
        const {name, value} = e.target;
        setFeedBack({...feedbackMessage, [name]: value});
    }
    const handleClickBackMainPage = () => {
        navigate('/');
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(feedbackMessage);
        e.target.reset();
    }
    return (
        <div className='feedbackPage'>
{/*
            <div className='feedbackPage__container'>
*/}
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
{/*
            </div>
*/}
        </div>
    );
}
