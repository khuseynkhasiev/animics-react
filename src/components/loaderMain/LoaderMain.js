import {Triangle} from "react-loader-spinner";
import './loaderMain.scss';
import Header from "../header/Header";
export default function LoaderMain({handleOpenPopupQR}){
    return (
        <div className='loaderMain'>
            <Header handleOpenPopupQR={handleOpenPopupQR}/>
            <div className='loaderMain__container'>
                <Triangle
                    height="200"
                    width="200"
                    color="white"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            </div>
        </div>
    )
}
