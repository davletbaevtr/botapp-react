import './App.css';
import Router from "./router/router";
import Footer from "./components/UI/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Router/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
