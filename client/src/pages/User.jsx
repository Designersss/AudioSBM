import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchOneUser} from "../https/userApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const User = observer(() => {
    const {id} = useParams()
    const {user} = useContext(Context)
    const [userOne, setUserOne] = useState({})
    useEffect(() => {
        fetchOneUser(id).then(data => setUserOne(data))
    }, [])
    return (
        <div className='container'>
            {userOne.name || 'NoName'}
        </div>
    );
});

export default User;