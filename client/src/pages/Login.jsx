import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {LOGIN_ROUTER, REGISTRATION_ROUTER} from "../utils/const";

const Login = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTER
    return (
        <div className='container'>
            <div className='flex justify-center items-center'>
                <form className='mt-64 w-80 p-4 bg-[#0F0F0F] rounded-lg' action="">
                    <h3 className='flex text-[#484848] justify-center pb-10 text-lg'>{isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h3>
                    <div className='justify-between items-center'>
                        <span>Введите адресс эл.почты</span>
                        <input type="text" placeholder='@pochta.com' className='w-full mt-2 mb-8 bg-[#1B1B1B] px-3 py-1 rounded-lg outline-0'/>
                    </div>
                    <button className='bg-[#0057BA] py-1 rounded-lg w-full'>Продолжить</button>
                    <hr className='my-4'/>
                    <div>
                        {isLogin
                            ?
                            <p className='flex text-[13px] justify-end text-[#2F2F2F]'>Нет аккаунта?<Link className='text-[#6C6C6C]' to={REGISTRATION_ROUTER}> Регистрарция!</Link></p>
                            :
                            <p className='flex text-[13px] justify-end text-[#2F2F2F]'>Есть аккаунт?<Link className='text-[#6C6C6C]' to={LOGIN_ROUTER}> Вход!</Link></p>
                        }

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;