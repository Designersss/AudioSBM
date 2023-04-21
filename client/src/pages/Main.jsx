import React, {useContext} from 'react';
import Recommendations from "../component/Recommendations";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Main = observer (() => {
    const {music} = useContext(Context)
    return (
        <div className='container'>
            <Recommendations music={music} text='Рекомендации' />
        </div>
    );
});

export default Main;