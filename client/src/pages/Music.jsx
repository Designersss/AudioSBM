import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {fetchOneMusic} from "../https/musicApi";
import {MAIN_ROUTER, REACT_APP_API_URL} from "../utils/const";
import Player from "../component/player/Player";
import useSound from "use-sound";
import Comments from "../component/Comments";
import Recommendations from "../component/Recommendations";
import {Context} from "../index";


const Music = () => {
    const {music} = useContext(Context)
    const {id} = useParams()
    const [musicOne, setMusic] = useState({})
    useEffect(() => {
        fetchOneMusic(id).then(data => setMusic(data))
    }, [])
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound('http://localhost:5050/3088c381-0aaf-40cb-8ff8-cc8804855aa5.mp3');
    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    });
    const sec = duration / 1000;
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    const time = {
        min: min,
        sec: secRemain
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);
    const [seconds, setSeconds] = useState();

    const [commentsText, setCommentsText] = useState('')
    const [comm, setComm] = useState([])
    const goCom = () => {
        setComm([...comm, commentsText])
        setCommentsText('')
    }

    return (
        <div className='container'>
            <div className='flex mt-10'>
                <div className='block w-72'>
                    <div>
                        <img className='w-72 rounded-lg' src={REACT_APP_API_URL + musicOne.img} alt=""/>
                        <p className='flex text-center justify-center text-[#9B9B9B] mt-4 text-lg'>{musicOne.name}</p>
                    </div>
                    <div className='mt-5 border border-[#1B1B1B] p-5 leading-8'>
                        <p className='text-[#404040]'>BPM: <span>{musicOne.BPM}</span></p>
                        <p className='text-[#404040]'>Публикация: <span>{date + '.' + month + '.' + year}</span></p>
                        <p className='text-[#404040]'>Прослушиваний: <span>{musicOne.listens}</span></p>
                    </div>
                </div>
                <div className='block w-full ml-5'>
                    <div className='flex w-full px-5 h-16 bg-[#1B1B1B] rounded-lg items-center justify-between'>
                        <div className='flex relative'>
                            <img className='w-14 h-14 py-2 rounded-2xl' src={REACT_APP_API_URL + musicOne.img} alt=""/>
                            <div className='absolute bg-[#000] w-full'></div>
                            <button onClick={playingButton} className='absolute flex mt-5 ml-5'>
                                {isPlaying
                                    ?
                                    <svg width="11" height="12" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.70563 13.1783H1.13576C0.508497 13.1783 0 12.6698 0 12.0426V1.1465C0 0.519239 0.508497 0.0107422 1.13576 0.0107422H3.70563C4.33289 0.0107422 4.84139 0.519239 4.84139 1.1465V12.0426C4.84139 12.6698 4.33289 13.1783 3.70563 13.1783Z" fill="white"/>
                                        <path d="M11.8638 13.1676H9.29396C8.6667 13.1676 8.1582 12.6591 8.1582 12.0318V1.13576C8.1582 0.508497 8.6667 0 9.29396 0H11.8638C12.4911 0 12.9996 0.508497 12.9996 1.13576V12.0318C12.9996 12.6591 12.4911 13.1676 11.8638 13.1676Z" fill="white"/>
                                    </svg>
                                    :
                                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.54678 0.0770397L10.7227 5.50737C11.0925 5.72629 11.0925 6.27371 10.7227 6.49263L1.54678 11.923C1.17689 12.1419 0.714355 11.8682 0.714355 11.4303V0.569666C0.714355 0.13183 1.17665 -0.141878 1.54678 0.0770397Z" fill="#F1F1F1"/>
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className='-ml-80 flex items-center'>
                            <p className='flex justify-center text-[12px] text-[#9B9B9B] uppercase'>{musicOne.name}</p>
                            <span className='text-[#9B9B9B] ml-2'>•</span>
                            <p className='flex justify-center text-[12px] text-[#9B9B9B] uppercase ml-2'>{musicOne.BPM + 'BPM'}</p>
                            <span className='text-[#9B9B9B] ml-2'>•</span>
                            <div className="flex text-[12px]uppercase ml-2">
                                <p className='text-[#9B9B9B]'>
                                    {currTime.min}:{currTime.sec}
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <button  className='mr-5'>
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 16L7.695 14.849C3.06 10.7771 0 8.09155 0 4.79564C0 2.11008 2.178 0 4.95 0C6.516 0 8.019 0.706267 9 1.82234C9.981 0.706267 11.484 0 13.05 0C15.822 0 18 2.11008 18 4.79564C18 8.09155 14.94 10.7771 10.305 14.8578L9 16Z" fill="#9B9B9B"/>
                                </svg>
                            </button>
                            <button>
                                <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1651 13.2966C13.448 13.2966 12.8061 13.578 12.317 14.0216L5.58204 10.1043C5.63064 9.88723 5.66825 9.66856 5.66825 9.44283C5.66825 9.2171 5.62986 8.99921 5.58204 8.78132L12.2409 4.90087C12.7488 5.37114 13.4205 5.66503 14.1651 5.66503C15.735 5.66503 17 4.40237 17 2.8325C17 1.26577 15.7342 0 14.1651 0C12.5983 0 11.3326 1.26577 11.3326 2.83175C11.3326 3.06059 11.371 3.27536 11.4188 3.49325L4.75985 7.37682C4.25118 6.90423 3.58029 6.61108 2.8349 6.61108C1.26502 6.61108 0 7.8761 0 9.44283C0 11.0096 1.26502 12.2754 2.8349 12.2754C3.57947 12.2754 4.25118 11.9814 4.75906 11.5112L11.4822 15.4371C11.436 15.637 11.407 15.8454 11.407 16.0532C11.407 17.5737 12.6461 18.8105 14.1643 18.8105C15.684 18.8105 16.9239 17.5745 16.9239 16.0532C16.9239 14.5319 15.6848 13.2966 14.1651 13.2966Z" fill="#9B9B9B"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-4 mt-5 gap-4'>
                        <div>
                            <button className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5'>
                                <p className='text-[#4E4E4E]'>Mp3</p>
                                <span className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.price}RUB</span>
                            </button>
                            <button className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 mt-2'>
                                <p className='text-[#4E4E4E]'>WAV</p>
                                <span className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.price}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button className='justify-between w-full h-full bg-[#121212] rounded-lg items-center px-4 py-3.5'>
                                <p className='text-[#4E4E4E]'>Коммерческий лизинг</p>
                                <span className='flex justify-center bg-[#181818] text-[#7B7B7B] rounded-lg p-2 mt-5'>{musicOne.price}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5'>
                                <p className='text-[#4E4E4E]'>Трекаут</p>
                                <span className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.price}RUB</span>
                            </button>
                            <button className='flex justify-between w-full bg-[#121212] rounded-lg items-center px-4 py-3.5 mt-2'>
                                <p className='text-[#4E4E4E]'>Премиум</p>
                                <span className='bg-[#181818] text-[#7B7B7B] rounded-lg p-2'>{musicOne.price}RUB</span>
                            </button>
                        </div>
                        <div>
                            <button className='justify-between w-full h-full bg-[#121212] rounded-lg items-center px-4 py-3.5'>
                                <p className='text-[#4E4E4E]'>Перейти к покупке</p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#1B1B1B] w-full h-0.5 mt-5' ></div>
                        <p className='text-[#4B4B4B] mt-2'>Перед нажатием на “перейти к покупке” прочитайте <Link className='text-[#A4A4A4]' to={MAIN_ROUTER}>инструкцию</Link> о том, как происходит покупка на нашем сайте</p>
                    </div>
                    <div className='flex items-center mt-8'>
                        <span className='text-xl'>Коментарии</span>
                        <div className='bg-[#1B1B1B] w-full h-0.5 ml-5' ></div>
                    </div>
                    <div className='mt-5'>
                        <textarea className='flex outline-0 rounded-lg bg-[#0F0F0F] w-full h-20 px-5 py-3'
                                  placeholder='Введите текст..'
                                  value={commentsText}
                                  onChange={e => setCommentsText(e.target.value)}
                        />
                        <button className='bg-[#1B1B1B] rounded-lg py-2 px-10 mt-3' onClick={goCom}>Отправить</button>
                    </div>
                    <div>
                        {comm.map(text =>
                            <Comments text={text} />
                        )}
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <div className='flex items-center mt-8 mb-3'>
                    <span className='text-xl'>Рекомендации</span>
                    <div className='bg-[#1B1B1B] w-full h-0.5 ml-5' ></div>
                </div>
                <Recommendations music={music} text=''/>
            </div>
        </div>
    );
};

export default Music;