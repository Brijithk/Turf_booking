import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from "./pages/login/login";
import Home from './pages/home/home';
import Register from "./pages/register/register";
import CompleteRegistration from './pages/CompleteRegistration/completeRegistration';
import { SlotBookingFinal } from './pages/SlotBookingFinal/SlotBookingFinal';
import Otp from './pages/otp/otp';
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/otp" element={<Otp />} />
                  <Route path="/completeRegistration" element={<CompleteRegistration />} />
                   <Route path="/slotBookingFinal" element={<SlotBookingFinal />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;