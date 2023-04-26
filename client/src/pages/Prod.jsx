import React, {useContext, useEffect} from 'react';
import {fetchAllUser} from "../https/userApi";
import {fetchServicesAll} from "../https/servicesApi";
import {Context} from "../index";
import {PROD_ROUTER, REACT_APP_API_URL} from "../utils/const";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const Prod = observer(() => {
    const {user} = useContext(Context)
    useEffect(() => {
        fetchAllUser().then(users => user.setUsersAll(users))
    }, [])
    return (
        <div className='container'>
            <div className='flex items-center mt-8 mb-3'>
                <span className='text-2xl'>Продюссеры</span>
                <div className='bg-[#1B1B1B] w-full h-0.5 ml-5' ></div>
            </div>
            <div className='flex grid grid-cols-5 gap-8 mt-10'>
                {user.usersAll.map(user =>
                    <Link to={PROD_ROUTER + '/' + user.id} key={user.id} className='flex w-full py-10 bg-[#121212] rounded-lg justify-center items-center transition hover:bg-[#1B1B1B] shadow-lg'>
                        <div className='flex uppercase'>{user.name || 'NoName'}</div>
                    </Link>
                )}
            </div>
        </div>
    );
});

export default Prod;