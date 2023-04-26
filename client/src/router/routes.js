import {
    ADMIN_ROUTER,
    ALBUM_ROUTER,
    ALL_MUSIC_ROUTER, ALL_MUSIC_ROUTER_GENRES, ERROR,
    GENRES_ROUTER, LOGIN_ROUTER,
    MAIN_ROUTER,
    MUSIC_ROUTER,
    PROD_ROUTER, REGISTRATION_ROUTER
} from "../utils/const";
import Admin from "../pages/Admin";
import Main from "../pages/Main";
import Music from "../pages/Music";
import AllMusic from "../pages/AllMusic";
import Album from "../pages/Album";
import Prod from "../pages/Prod";
import Genres from "../pages/Genres";
import Login from "../pages/Login";
import User from "../pages/User";

export const publicRoutes = [
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
    },
    {
        path: ERROR,
        Component: Login
    },
]

export const authRoutes = [
    {
        path: ADMIN_ROUTER,
        Component: Admin
    },
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: MUSIC_ROUTER + '/:id',
        Component: Music
    },
    {
        path: PROD_ROUTER + '/:id',
        Component: User
    },
    {
        path: ALL_MUSIC_ROUTER_GENRES + '/:genre',
        Component: AllMusic
    },
    {
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
    },
    {
        path: ALBUM_ROUTER,
        Component: Album
    },
    {
        path: GENRES_ROUTER,
        Component: Genres
    },
    {
        path: PROD_ROUTER,
        Component: Prod
    },
    {
        path: REGISTRATION_ROUTER,
        Component: Login
    },
    {
        path: LOGIN_ROUTER,
        Component: Login
    },
]