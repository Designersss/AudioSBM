import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {fetchMusic} from "../https/musicApi";
import {observer} from "mobx-react-lite";
import MusicOne from "./MusicOne";

const Recommendations = observer (({text, music, numOne, NumTwo}) => {
    useEffect(() => {
        fetchMusic().then(data => music.setMusic(data))
    }, [])
    const navigate = useNavigate()
    return (
        <div>
            <h2>{text}</h2>
            <div className='grid grid-cols-5 gap-5'>
                {music.music.slice(3, 13).map(music =>
                    <div key={music.id}>
                        <MusicOne music={music} />
                    </div>
                )}
            </div>
        </div>
    );
});

export default Recommendations;