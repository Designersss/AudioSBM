import React from 'react';
import {Link} from "react-router-dom";
import {MUSIC_ROUTER, REACT_APP_API_URL} from "../utils/const";
import {observer} from "mobx-react-lite";

const MusicOne = observer (({music}) => {
    return (
        <Link to={MUSIC_ROUTER + '/' + music.id} key={music.id} className='block'>
            <img className='rounded-lg h-40 w-full' src={REACT_APP_API_URL +  music.img} alt=""/>
            <div className='text-[13px] mt-2'>
                <p className='text-[#9B9B9B]'>{music.name}</p>
                <span className='text-[#9B9B9B]'>{music.BPM}</span>
            </div>
        </Link>
    );
});

export default MusicOne;