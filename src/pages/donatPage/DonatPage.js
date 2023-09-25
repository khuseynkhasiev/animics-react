import './donatPage.scss';
import {Watch} from "react-loader-spinner";
export default function DonatPage({handleExitPopupDonat, popupDonatActive}){

    const handleClickExitPopup = e => {
        if(e.target === e.currentTarget) {
            handleExitPopupDonat();
        }
    }
    return (
        <div className={`donat ${popupDonatActive ? 'donat_active' : ''}`} onClick={handleClickExitPopup}>
            <div className='donat__container'>
                <Watch
                    height="80"
                    width="80"
                    radius="48"
                    color="white"
                    ariaLabel="watch-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                <p className='donat__text'>Мы работаем над созданием специальной страницы для того, чтобы Вам было удобнее внести свой вклад и поддержать наш проект.</p>
                <p className='donat__text'>Скоро она будет доступна</p>
            </div>
        </div>
    )
}
