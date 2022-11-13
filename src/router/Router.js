import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Home from "../screens/Home/Home"
import Logement from "../screens/Logement/Logement"
import Apropos from "../screens/Apropos/Apropos"
import Error from "../screens/Error/Error"

// Fonction permettant de gérer les routes du site avec React Router, notamment en y incluant systématiquement "Header" et "Footer"
function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/*" element={<Error />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="*" element={<Error />} />
                <Route path="/404" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router