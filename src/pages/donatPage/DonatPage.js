import './donatPage.scss';
import {Watch} from "react-loader-spinner";
import PopupRegister from "../../components/popupRegister/PopupRegister";
import LoaderRegister from "../../components/loaderRegister/LoaderRegister";
import {useNavigate} from "react-router";
import {useState} from "react";
import iconLike from '../../image/iconLike.svg';
import iconLikeActive from  '../../image/iconLikeActive.svg';
export default function DonatPage({handleExitPopupDonat, popupDonatActive}){
    const navigate = useNavigate();
    const [likeIsActive, setLikeIsActive] = useState(false);
    const handleClickExitPopup = e => {
        if(e.target === e.currentTarget) {
            handleExitPopupDonat();
        }
    }

    const handleMainPageClick = () => {
        navigate('/');
    }
    const handleActiveIconLike = () => {
        setLikeIsActive(true);
    }
    return (
        <div className={`donat ${popupDonatActive ? 'donat_active' : ''}`} onClick={handleClickExitPopup}>
            <div className='donat__container'>
{/*                <Watch
                    height="80"
                    width="80"
                    radius="48"
                    color="white"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />*/}
                <a className='donat__iconLike' href='https://pay.cloudtips.ru/p/b7d425cd' target='_blank' onClick={handleActiveIconLike}></a>
                <p className='donat__iconText'>нажми чтобы помочь</p>
                <p className='donat__text'>Ваши  вложения не только поддерживают нас, но и являются важной составляющей нашего успеха. как вы можете помочь нам продолжать наше дело.</p>
            </div>
        </div>
    )
/*    return (
        <div className='donatPage'>
            <div className='donatPage__container'>
                <div className='donatPage__infoBlock'>
                    <a className='donatPage__likeLink' href='https://pay.cloudtips.ru/p/b7d425cd' target='_blank' onClick={handleActiveIconLike}>
                        <div>
                            <div className='donatPage__iconLike'></div>
                            <p className='donatPage__iconText'>нажми чтобы помочь</p>
                        </div>
                    </a>
                    <div className='donatPage__info'>
                        <h2 className='donatPage__title'>Участие в развитии комикса</h2>
                        <p className='donatPage__text'>Комикс ТОБА  - это совместное творчество, в котором каждый из вас играет ключевую роль. Ваши  вложения не только поддерживают нас, но и являются важной составляющей нашего успеха. как вы можете помочь нам продолжать наше дело:</p>
                        <ul className='donatPage__list'>
                            <li className='donatPage__item'>
                                <div className='donatPage__iconCircle'></div>
                                <p className='donatPage__itemText'>Денежное Пожертвование: Даже небольшая сумма поможет в развитии комикса. Ваши денежные вклады позволяют нам развивать проект, улучшать качество контента и достигать новых вершин.</p>
                            </li>
                            <li className='donatPage__item'>
                                <div className='donatPage__iconCircle'></div>
                                <p className='donatPage__itemText'>Распространение Информации: Расскажите о нас своим друзьям, коллегам и знакомым. Помощь в распространении нашего проекта в социальных сетях и сообществах помогает нам достичь большей аудитории.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='donatPage__mainBack' onClick={handleMainPageClick}>
                    <div className='donatPage__mainBackIcon'></div>
                    <p className='donatPage__mainBackText'>в начало</p>
                </div>
            </div>
        </div>
    );*/
}
