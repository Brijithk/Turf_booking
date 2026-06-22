import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/login/login";
import Home from './pages/home/home';
import Register from "./pages/register/register";

import Otp from './pages/otp/otp';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/otp" element={<Otp />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;