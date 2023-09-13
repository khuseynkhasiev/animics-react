import './mainPage.scss';
export default function MainPage() {
    return (
        <div className="mainPage">
            <div className="mainPage__bgOne"></div>
            <div className="mainPage__bgCenter"></div>
            <div className="mainPage__bgTwo"></div>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item">
                            Регистрация
                        </li>
                        <li className="header__item">
                            Обратная связь
                        </li>
                        <li className="header__item">
                            Донат
                        </li>
                        <li className="header__item">
                            QR-код
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <h1 className="main__title">ТОБА</h1>
                <h2 className="main__subtitle">ИНТЕРАКТИРОВАННЫЙ АНИМИРОВАННЫЙ КОМИКС</h2>
                <div className="main__info">
                    <p className="main__text main__text_type_leftWidth">Представь что ты в мире,  где передовые <br/>технологии стали частью повседневной жизни...</p>
                    <p className="main__text">Мощные компьютеры, кибернетические улучшения, виртуальная реальность и искусственный интеллект переплетаются в футуристическом сюжете, мегаполисы будущего, где небоскребы пронизаны рекламой, а улицы оживают множеством разнообразных персонажей.</p>
                    <p className="main__text main__text_type_rigth">Этот мир полон движения, шума и неожиданных поворотов., борьба за контроль над технологическими ресурсами, конфликты между мегакорпорациями, правительствами и хакерскими<br/> группировками</p>
                    <div className="main__textRigthBlock">
                        <p className="main__text main__text_type_rightWidth">...Это приводит к философским <br/> размышлениям, не так ли ?</p>
                    </div>
                    <div className="main__infoContainer">
                        <h3 className="main__infoTitle">СТАНЬ ЧАСТЬЮ ВСЕЛЕННОЙ КИБЕРПАНКА ВМЕСТЕ С <span className="main__infoTitle_type_size">ТОБА</span></h3>
                        <div className="main__qr"></div>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="" className="footer__link">@mail/toba.ru</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">@telegram/toba</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">@telegram/toba</a>
                    </li>
                    <li className="footer__item">
                        <a href="" className="footer__link">@telegram/kamilla</a>
                    </li>
                </ul>
                <p className="footer__text">
                    ТОБА, 2023, ANIMICS
                </p>
            </footer>
        </div>
    );
}
