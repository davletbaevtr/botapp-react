import main_footer_icon from '../assets/footer_icons/main_footer_icon.svg'
import assistant_footer_icon from '../assets/footer_icons/assistent_footer_icon.svg'

export const MAIN_ROUTE = '/main/'
export const API_URL = 'http://127.0.0.1:8000/'

export const ASSISTANT_ROUTE = '/assistant/'

export const ABOUT_APP_ROUTE = '/about/'
export const NavRoutes = [
    {
        path: MAIN_ROUTE,
        name: 'Главная',
        icon: main_footer_icon
    },
    {
        path: ASSISTANT_ROUTE,
        name: 'Ассистент',
        icon: assistant_footer_icon
    },
    {
        path:  ABOUT_APP_ROUTE,
        name: 'О приложении',
        icon: main_footer_icon
    }
]