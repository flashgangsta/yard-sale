import React from 'react';
import {Route, Routes} from "react-router-dom";
import PageMain from "./pages/page_main";
import PageAbout from "./pages/page_about";
import PageProduct from "./pages/page_product";
import Page404 from "./pages/page_404";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PageMain />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/product/:id" element={<PageProduct />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default Router;