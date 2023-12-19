import './mainPage.scss';
import PopupQR from "../../components/popupQR/PopupQR";
import {useState, useEffect} from "react";
import LoaderMain from "../../components/loaderMain/LoaderMain";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import backgorunOneImage from "../../image/main-bg-one.gif";
import backgorunTwoImage from "../../image/main-bg-two.gif";
import backgorunOneJpg from "../../image/main-bg-one.jpg";
import backgorunTwoJpg from "../../image/main-bg-two.jpg";
import DonatPage from "../donatPage/DonatPage";
export default function MainPage() {
    const [popupQrActive, setPopupQrActive] = useState(false);
    const [popupDonatActive, setPopupDonatActive] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(true);
    const [imagesGifLoaded, setImagesGifLoaded] = useState(true);

    useEffect(() => {
        const imageOne = new Image();
        const imageTwo = new Image();

        const loadImages = () => {
            imageOne.onload = imageTwo.onload = () => {
                setImagesGifLoaded(false);
            }
            imageOne.onerror = imageTwo.onerror = () => {
                setImagesGifLoaded(false);
            }

            imageOne.src = backgorunOneImage;
            imageTwo.src = backgorunTwoImage;
        }
        loadImages();
    }, [])

    const handleOpenPopupQR = () => {
        setPopupQrActive(true);
    }
    const handleExitPopupQR = () => {
        setPopupQrActive(false);
    }

    const scrollTop = () => {
        window.scroll(0, 0)
    }
    const handleOpenPopupDonat = () => {
        scrollTop();
        setPopupDonatActive(true);
    }

    const handleExitPopupDonat = () => {
        scrollTop();
        setPopupDonatActive(false);
    }

    useEffect(() => {
        const image1 = new Image();
        image1.src = backgorunOneJpg;
        image1.onload = () => {
            const image2 = new Image();
            image2.src = backgorunTwoJpg;
            image2.onload = () => {
                setImagesLoaded(false);
            };
        };
    }, []);
/*    useEffect(() => {
        const image1 = new Image();
        image1.src = backgorunOneImage;
        image1.onload = () => {
            const image2 = new Image();
            image2.src = backgorunTwoImage;
            image2.onload = () => {
                setImagesLoaded(false);
            };
        };
    }, []);*/

    return (
        <>
            <Header
                handleOpenPopupQR={handleOpenPopupQR}
                handleOpenPopupDonat={handleOpenPopupDonat}
                handleExitPopupDonat={handleExitPopupDonat}
                handleExitPopupQR={handleExitPopupQR}/>
            {imagesLoaded ? (
                <LoaderMain />
            ) : (
/*                <div className="mainPage">
                    <div className="mainPage__bgOne" style={ imagesGifLoaded ? {
                        backgroundImage: `url(${backgorunOneJpg})`
                    } :
                        {
                            backgroundImage: `url(${backgorunOneImage})`
                        }
                    }>

                    </div>
                    <div className="mainPage__bgTwo" style={ imagesGifLoaded ? {
                            backgroundImage: `url(${backgorunTwoJpg})`
                    } :
                        {
                            backgroundImage: `url(${backgorunTwoImage})`
                        }
                    }>
                </div>*/
                <div className="mainPage">
                    <div className="mainPage__bgOne" style={ imagesGifLoaded ?
                        {
                            background: `linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), url(${backgorunOneJpg}) lightgray 50% no-repeat`,
                            backgroundSize: 'cover',
                        }
                            :
                        {
                            background: `linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), url(${backgorunOneImage}) lightgray 50% no-repeat`,
                            backgroundSize: 'cover',
                        }
                    }>

                    </div>
                    <div className="mainPage__bgTwo" style={ imagesGifLoaded ? {
                            background: `linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), url(${backgorunTwoJpg}) lightgray 50% no-repeat`,
                            backgroundSize: 'cover',
                        } :
                        {
                            background: `linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 29.28%), url(${backgorunTwoImage}) lightgray 50% no-repeat`,
                            backgroundSize: 'cover',
                        }
                    }>
                    </div>
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
                    <PopupQR popupQrActive={popupQrActive} handleExitPopupQR={handleExitPopupQR}/>
                    <DonatPage popupDonatActive={popupDonatActive} handleExitPopupDonat={handleExitPopupDonat}/>
                </div>
            )}
{/*            <PopupQR popupQrActive={popupQrActive} handleExitPopupQR={handleExitPopupQR}/>
            <DonatPage popupDonatActive={popupDonatActive} handleExitPopupDonat={handleExitPopupDonat}/>*/}
        </>
    );
}
