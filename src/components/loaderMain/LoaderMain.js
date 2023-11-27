import {Triangle} from "react-loader-spinner";
import './loaderMain.scss';
export default function LoaderMain(){
    return (
        <div className='loaderMain'>
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
