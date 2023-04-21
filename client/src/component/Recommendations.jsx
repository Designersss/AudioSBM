import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MUSIC_ROUTER, REACT_APP_API_URL} from "../utils/const";
import {fetchMusic} from "../https/musicApi";
import {observer} from "mobx-react-lite";
import NavBar from "./navigation/NavBar";

const Recommendations = observer (({text, music}) => {
    useEffect(() => {
        fetchMusic().then(data => music.setMusic(data))
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <h2>{text}</h2>
            <div className='grid grid-cols-5 gap-5'>
                {music.music.map(music =>
                    <Link to={MUSIC_ROUTER + '/' + music.id} key={music.id} className='block'>
                        <img className='rounded-lg h-40 w-full' src={REACT_APP_API_URL +  music.img} alt=""/>
                        <div className='text-[13px] mt-2'>
                            <p className='text-[#9B9B9B]'>{music.name}</p>
                            <span className='text-[#9B9B9B]'>{music.BPM}</span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
});

export default Recommendations;