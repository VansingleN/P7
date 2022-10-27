import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import Home from "../screens/Home/Home"
import Fiche from "../screens/Fiche/Fiche"
import Apropos from "../screens/Apropos/Apropos"
import Error from "../screens/Error/Error"

function Router() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Fiche/*" element={<Error />} />
                <Route path="/Fiche/:id" element={<Fiche />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router