import React, {useContext, useEffect} from 'react';
import Recommendations from "../component/Recommendations";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import MusicPagesAll from "../component/MusicPagesAll";
import {Link} from "react-router-dom";
import {ALL_MUSIC_ROUTER, MAIN_ROUTER, MUSIC_ROUTER, PROD_ROUTER, REACT_APP_API_URL} from "../utils/const";
import MusicOne from "../component/MusicOne";
import {fetchAllUser} from "../https/userApi";

const Main = observer (() => {
    const {music} = useContext(Context)
    const {user} = useContext(Context)
    useEffect(() => {
        fetchAllUser().then(users => user.setUsersAll(users))
    }, [])
    return (
        <div className='container'>
            <div className='block mt-5'>
                <h2 className='flex justify-center text-lg text-[#9B9B9B] uppercase'>
                    Популярное от
                    <Link to={MAIN_ROUTER} className='font-["Bebas Neue"]'>AUDIO<span className='text-[#0077FF]'>SBM</span></Link>
                </h2>
                <div className='flex w-[880px] m-auto mt-10'>
                    {music.music.slice(0, 3).map(music =>
                        <div key={music.id}>
                            <Link to={MUSIC_ROUTER + '/' + music.id} key={music.id} className='block ml-16'>
                                <img className='rounded-lg h-52 w-52' src={REACT_APP_API_URL +  music.img} alt=""/>
                                <div className='flex justify-center mt-2'>
                                    <p className='text-[#fff] uppercase'>{music.name}</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-20'>
                <div className='flex items-center mt-8 mb-3 items-center'>
                    <Link to={ALL_MUSIC_ROUTER} className='text-xl transition-[.3s] hover:text-[22px]'>Треки</Link>
                    <svg className='ml-3 ' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <Recommendations numOne={0} NumTwo={10} music={music} text='' />
            </div>
            <div className='mt-20'>
                <div className='flex items-center mt-8 mb-3 items-center'>
                    <Link to={PROD_ROUTER}  className='text-xl transition-[.3s] hover:text-[22px]'>Продюсеры</Link>
                    <svg className='ml-3' width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6.5 7L12 1" stroke="#33333A"/>
                    </svg>
                </div>
                <div className='flex grid grid-cols-5 gap-8'>
                    {user.usersAll.slice(0, 5).map(user =>
                        <div className='block'>
                            <img className='w-40 h-40 rounded-full' src={REACT_APP_API_URL + user.img} alt=""/>
                            <div className='flex justify-center mt-5'>{user.name || 'NoName'}</div>
                        </div>
                    )}
                </div>
            </div>
            <div>

            </div>
        </div>
    );
});

export default Main;