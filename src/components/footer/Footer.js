import "./footer.scss";
export default function Footer() {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__item">
                    <a
                        href="mailto:x-toba@mail.ru"
                        className="footer__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        x-toba@mail.ru
                    </a>
                </li>
                <li className="footer__item">
                    <a
                        href="https://t.me/+u7C8phOj2S4wN2Zi"
                        className="footer__link"
                    >
                        animics-toba
                    </a>
                </li>
                <li className="footer__item">
                    <a
                        href="https://t.me/Arsamurzaev"
                        className="footer__link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        руководитель проекта
                    </a>
                </li>
            </ul>
            <p className="footer__text">ТОБА, 2023, ANIMICS</p>
            <p className="footer__text"><a className="footer__text-link" href="https://kreati.ru/" target='_blank'>Разработка сайта</a></p>
        </footer>
    );
}
