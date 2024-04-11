import {ASSISTANT_ROUTE, ABOUT_APP_ROUTE, MAIN_ROUTE} from "../utils/consts";
import assistant from "../pages/assistant/assistant";
import about_app from "../pages/about_app/about_app";
import main from "../pages/main/main";

export const routes = [
    {
        path: MAIN_ROUTE,
        component: main,
        exact: true
    },
    {
        path: ASSISTANT_ROUTE,
        component: assistant,
        exact: true
    },
    {
        path: ABOUT_APP_ROUTE,
        component: about_app,
        exact: true
    },
]