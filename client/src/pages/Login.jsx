import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTER, MAIN_ROUTER, REGISTRATION_ROUTER} from "../utils/const";
import {login, registration} from "../https/userApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {all} from "axios";

const Login = observer (() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTER
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const click = async (e) => {
        e.preventDefault()
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
                console.log(data)
            } else {
                data = await registration(email, password, name)
                console.log(data)
            }
            user.setUser(data)
            user.setIsAuth(true)
            history(MAIN_ROUTER)
            console.log(user.user + 'asd' + user.isAuth)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <div className='container'>
            <div className='flex justify-center items-center'>
                <form className='mt-64 w-80 p-4 bg-[#0F0F0F] rounded-lg' action="">
                    <h3 className='flex text-[#484848] justify-center pb-10 text-lg'>{isLogin ? 'ВХОД' : 'РЕГИСТРАЦИЯ'}</h3>
                    <div className='justify-between items-center'>
                        <div>
                            <span>Введите адресс эл.почты</span>
                            <input
                                type="text"
                                placeholder='@pochta.com'
                                className='w-full mt-2 mb-8 bg-[#1B1B1B] px-3 py-1 rounded-lg outline-0'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        {
                            isLogin
                                ?
                                <div></div>
                                :
                                <div>
                                    <span>Введите ваш никнейм</span>
                                    <input
                                        type="text"
                                        placeholder='nickname'
                                        className='w-full mt-2 mb-8 bg-[#1B1B1B] px-3 py-1 rounded-lg outline-0'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                        }

                        <div>
                            <span>Введите пароль</span>
                            <input
                                type='text'
                                placeholder='1234'
                                className='w-full mt-2 mb-8 bg-[#1B1B1B] px-3 py-1 rounded-lg outline-0'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className='bg-[#0057BA] py-1 rounded-lg w-full' onClick={click}>Продолжить</button>
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
});

export default Login;