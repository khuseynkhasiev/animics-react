import './popupRegister.scss';
import iconError from '../../image/popup-error-icon.svg'
import iconSuccess from '../../image/popup-access-icon.svg';
import {useEffect} from "react";
export default function PopupRegister(props){
    const {
        handleRegisterPopupExit,
        registerPopupText,
        registerPopupIsError,
        registerPopupIsOpen
    } = props;

    const handleClickExitPopup = e => {
/*        if(e.target === e.currentTarget) {
            handleRegisterPopupExit();
        }*/
        handleRegisterPopupExit();
    }

    useEffect(() => {

    }, [registerPopupIsError])

    return (
        <div className={`register ${registerPopupIsOpen ? 'register_active' : ''}`} onClick={handleClickExitPopup}>
            <div className='register__container'>
                <div className='register__block'>
                    <div className='register__icon' style={registerPopupIsError ? {backgroundImage: `url(${iconError})`} : {backgroundImage: `url(${iconSuccess})`}}></div>
                    <p className='register__register-text'> {registerPopupIsError ? 'ОШИБКА!' : 'УСПЕХ!'} </p>
                </div>
                <p className='register__text'>{registerPopupText}</p>
            </div>
        </div>
    )
}
