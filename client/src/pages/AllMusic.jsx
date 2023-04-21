import React, {useContext} from 'react';
import {Context} from "../index";
import MusicPagesAll from "../component/MusicPagesAll";

const AllMusic = () => {
    const {music} = useContext(Context)
    return (
        <div className='container'>
            <MusicPagesAll music={music} text={''} />
        </div>
    );
};

export default AllMusic;