import './mainPage.scss';
import PopupQR from "../../components/popupQR/PopupQR";
import {useState, useEffect} from "react";
import LoaderMain from "../../components/loaderMain/LoaderMain";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import backgorunOneImage from "../../image/main-bg-two.gif";
import backgorunTwoImage from "../../image/main-bg-one.gif";
import DonatPage from "../donatPage/DonatPage";
export default function MainPage() {
    const [popupQrActive, setPopupQrActive] = useState(false);
    const [popupDonatActive, setPopupDonatActive] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleOpenPopupQR = () => {
        setPopupQrActive(true);
        disableVerticalScroll()
    }
    const handleExitPopupQR = () => {
        setPopupQrActive(false);
        enableVerticalScroll()
    }

    const handleOpenPopupDonat = () => {
        setPopupDonatActive(true);
        disableVerticalScroll()
    }

    const handleExitPopupDonat = () => {
        setPopupDonatActive(false);
        enableVerticalScroll()
    }

    // Заблокировать вертикальный скролл
    function disableVerticalScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    // Разблокировать вертикальный скролл
    function enableVerticalScroll() {
        window.onscroll = null;
    }


    useEffect(() => {
        const image1 = new Image();
        image1.src = backgorunOneImage;
        image1.onload = () => {
            const image2 = new Image();
            image2.src = backgorunTwoImage;
            image2.onload = () => {
                setImagesLoaded(true);
            };
        };
    }, []);

    return (
            <div style={{backgroundColor: "black"}}>
                {imagesLoaded ? (
                    <>
                        <Header handleOpenPopupQR={handleOpenPopupQR} handleOpenPopupDonat={handleOpenPopupDonat}/>
                        <div className="mainPage">
                            <div className="mainPage__bgOne"></div>
                            <div className="mainPage__bgCenter"></div>
                            <div className="mainPage__bgTwo"></div>
                            <div className="title">
                                <h1 className="title__title">ТОБА</h1>
                                <h2 className="title__subtitle">ИНТЕРАКТИРОВАННЫЙ АНИМИРОВАННЫЙ КОМИКС</h2>
                            </div>
                            <main className="main">
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
                            <Footer />
                        </div>
                    </>
                ) : (
                    <LoaderMain handleOpenPopupQR={handleOpenPopupQR}/>
                )}
                <PopupQR popupQrActive={popupQrActive} handleExitPopupQR={handleExitPopupQR}/>
                <DonatPage popupDonatActive={popupDonatActive} handleExitPopupDonat={handleExitPopupDonat}/>
            </div>
    );
}
