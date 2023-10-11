import './header.scss';
import {useNavigate} from "react-router";
export default function Header({handleOpenPopupQR, handleOpenPopupDonat, handleExitPopupQR, handleExitPopupDonat}){
    const navigate = useNavigate();
    const handleClickRegisterPage = () => {
        navigate('/register');
    }
    const handleClickFeedbackPage = () => {
        navigate('/feedback');
    }

    const handleClickOpenPopupDonat = () => {
        handleExitPopupQR();
        handleOpenPopupDonat();
    }

    const handleClickDonatPage = () => {
        navigate('/donat')
    }

    const handleClickOpenPopupQR = () => {
        handleExitPopupDonat();
        handleOpenPopupQR()
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__list">
                    <li className="header__item" onClick={handleClickRegisterPage}>
                        Регистрация
                    </li>
                    <li className="header__item" onClick={handleClickFeedbackPage}>
                        Обратная связь
                    </li>
                    <li className="header__item" onClick={handleClickOpenPopupDonat}>
                        Донат
                    </li>
      {/*              <li className="header__item" onClick={handleClickOpenPopupDonat}>
                        <a className="header__link" href='https://pay.cloudtips.ru/p/b7d425cd' target='_blank'>Донат</a>
                    </li>*/}
                    <li className="header__item" onClick={handleClickOpenPopupQR}>
                        QR-код
                    </li>
                </ul>
            </nav>
        </header>
    )
}
