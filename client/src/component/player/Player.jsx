import React, {useEffect, useState} from 'react';
import '../../styles/player.scss'
import useSound from "use-sound";
import {observer} from "mobx-react-lite";
import imgs from '../../img/main/sad music 1.png'
const Player = observer (({img, name, music}) => {
    // const music = {id: 1, name: 'AUDIO', artist: 'Walmery', listens: '0', price: 1000, genre: 'Dabstep', BPM: '100', trackMp: 'http://localhost:5050/3088c381-0aaf-40cb-8ff8-cc8804855aa5.mp3', img: 'http://localhost:5050/f7dd95b2-7ba0-43a7-a8b3-412ef419f707.jpg'}
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound('http://localhost:5050/3088c381-0aaf-40cb-8ff8-cc8804855aa5.mp3');
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
    return (
        <div className='flex items-center'>
            <div>
                <img className='w-10 h-10 py-2 rounded-lg' src={imgs} alt=""/>
            </div>
            <div className='flex items-center'>
                <button className='ml-3'>
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.93261 9.23074L0.889724 5.35193C0.60582 5.19556 0.60582 4.80455 0.889724 4.64818L7.93261 0.769367C8.21652 0.612997 8.57153 0.808502 8.57153 1.12124L8.57153 8.87886C8.57153 9.1916 8.2167 9.38711 7.93261 9.23074Z" fill="#F1F1F1"/>
                        <rect y="0.714233" width="1.42857" height="8.57143" fill="#F1F1F1"/>
                    </svg>
                </button>
                <button onClick={playingButton} className='ml-3'>
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
                <button className='ml-3'>
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.924565 0.769262L7.96745 4.64807C8.25136 4.80444 8.25136 5.19545 7.96745 5.35182L0.924565 9.23063C0.640661 9.387 0.285645 9.1915 0.285645 8.87876V1.12114C0.285645 0.808398 0.640479 0.612892 0.924565 0.769262Z" fill="#F1F1F1"/>
                        <rect x="7.42822" y="0.714233" width="1.42857" height="8.57143" fill="#F1F1F1"/>
                    </svg>
                </button>
            </div>
            <div className='block ml-5'>
                <p className='flex justify-center -mb-4 text-[12px] text-[#A7A7A7]'>{name || 'Audio'}</p>
                <div className="flex text-[12px] text-[#9B9B9B] -mb-2.5 justify-end">
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                </div>
                <input type='range' min="0"
                       max={duration / 1000}
                       default="0"
                       value={seconds}
                       onChange={(e) => {
                           sound.seek([e.target.value]);
                       }}
                       className='range w-24 h-0.5 bg-[#fff] rounded-lg cursor-pointer'
                ></input>
            </div>
        </div>
    );
});

export default Player;