import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import MusicPagesAll from "../component/MusicPagesAll";
import {fetchOneMusicGenre} from "../https/musicApi";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {ALL_MUSIC_ROUTER, ALL_MUSIC_ROUTER_GENRES} from "../utils/const";
import Genre from "./Genre";

const AllMusic = observer(() => {
    const navigate = useNavigate()
    const location = useLocation()
    const {music} = useContext(Context)
    return (
        <div className='container'>
            <h2 className='text-2xl mt-5'>Треки</h2>
            <div className='bg-[#0F0F0F] w-full rounded-2xl h-20 mt-5'>
                <select name="Жанры" id="" className='text-black'>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                    <option className='text-black' value="All"></option>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                </select>
                <select name="" id="" className='text-black'>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                </select>
                <select name="" id="" className='text-black'>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                    <option className='text-black' value="All">Поиск по жанрам</option>
                </select>
                <button onClick={() => navigate(ALL_MUSIC_ROUTER_GENRES + '/Dabstep')}>asd</button>
            </div>
            <div className='mt-5'>
                {location.pathname === ALL_MUSIC_ROUTER_GENRES + '/Dabstep'
                    ?
                    <div>
                        <Genre music={music} />
                    </div>
                    :
                    <div>
                        <MusicPagesAll music={music} text={''} />
                    </div>
                }

            </div>
        </div>
    );
});

export default AllMusic;