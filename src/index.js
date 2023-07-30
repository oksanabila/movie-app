import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from "./providers/ThemeProvider";
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <div className={'container'}>
            <RouterProvider router={router}/>
        </div>
    </ThemeProvider>
);
