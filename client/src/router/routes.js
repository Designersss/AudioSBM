import {ADMIN_ROUTER, ALL_MUSIC_ROUTER, MAIN_ROUTER, MUSIC_ROUTER} from "../utils/const";
import Admin from "../pages/Admin";
import Main from "../pages/Main";
import Music from "../pages/Music";
import AllMusic from "../pages/AllMusic";

export const publicRoutes = [
    {
        path: MAIN_ROUTER,
        Component: Main
    },
    {
        path: MUSIC_ROUTER + '/:id',
        Component: Music
    },
    {
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
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
        path: ALL_MUSIC_ROUTER,
        Component: AllMusic
    },
]