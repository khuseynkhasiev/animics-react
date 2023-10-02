import {Watch} from "react-loader-spinner";
import './loaderRegister.scss';
export default function LoaderRegister(){
    return (
        <div className='loaderRegister'>
            <div className='loaderRegister__container'>
                <Watch
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
