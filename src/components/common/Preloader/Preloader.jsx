import React from 'react';
import preloader from '../../../assets/img/Magnify-1s-200px.svg';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <div >
            <img src={preloader} className={s.preloader}/>
        </div>
    )
}

export default Preloader;