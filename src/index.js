import React from 'react';
import ReactDOM from 'react-dom/client';
import Omakuva from "./omakuva.js";
import Header from "./header.js";

import "./style.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout.js";
import Home from "./pages/home.js";
import CV from "./pages/cv.js";
import Contact from "./pages/contact.js";
import NoPage from "./pages/noPage.js";

const myPage = <div>
<Header/>
<BrowserRouter>
      <Routes>
        <Route path="/Portfolio" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CV" element={<CV />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myPage);
