import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App";
import "./main.css";

import {BrowserRouter} from "react-router-dom";

document.getElementById("root").style.height = `${window.innerHeight}px`;
const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
