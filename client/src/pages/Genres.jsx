import React from 'react';
import {Link} from "react-router-dom";
import {GENRES_ROUTER} from "../utils/const";
import sad from "../img/main/sad music 1.png";
import hyperpop from "../img/main/hyperpop 4.png";
import trap from "../img/main/trap 4.png";

const Genres = () => {
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-xl'>Жанры</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5'></div>
            </div>
            <div className='grid grid-cols-6 gap-10'>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={sad} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>SAD MUSIC</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={hyperpop} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>HYPERPOP</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>TRAP</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Арт-панк</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Альтернативный рок</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Панк рок</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Джаз-блюз</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Мемфис Блюз</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Колыбельные</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Авангард</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Барокко</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Пение</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Минимализм</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Опера</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Органум</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Соната</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Водевиль</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Американа</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Hellbilly Music</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Nashville Sound</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Прогрессивный</span>
                </Link>
                <Link to={GENRES_ROUTER}>
                    <img className='rounded-xl' src={trap} alt=""/>
                    <span className='flex justify-center mt-5 text-[16px] '>Брейккор</span>
                </Link>
            </div>
        </div>
    );
};

export default Genres;