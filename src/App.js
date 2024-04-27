import './App.css';
import Router from "./router/router";
import Footer from "./components/UI/Footer";
import {BrowserRouter} from "react-router-dom";
import {useTelegram} from "./hooks/useTelegram";
import {BACKGROUND_BLUE, LIGHT_GRAY} from "./utils/colors";

function App() {
    const {tg} = useTelegram();
    tg.setHeaderColor(LIGHT_GRAY);
    tg.setBackgroundColor(BACKGROUND_BLUE);
    tg.expand();

    return (
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    );
}

export default App;
