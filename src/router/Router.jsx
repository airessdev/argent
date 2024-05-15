import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from '../pages/Home/Home'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate replace to="/Home" />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;