import './popupQR.scss';
export default function PopupQR({popupQrActive, handleExitPopupQR}){

    const handleClickExitPopup = e => {
        if(e.target === e.currentTarget) {
            handleExitPopupQR();
        }
    }
    return (
        <div className={`popupQR${popupQrActive ? ' popupQR_active' : ''}`} onClick={handleClickExitPopup}>
            <div className="popupQR__bg"></div>
        </div>
    )
}
