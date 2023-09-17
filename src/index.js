import React from 'react';
import ReactDOM from 'react-dom/client';

import ThemeProvider from "./providers/ThemeProvider";
import {RouterProvider} from "react-router-dom";
import {router} from "./routing/router";
import { Provider } from 'react-redux';
import './index.css';
import {store} from "./redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider>
            <div className={'container'}>
                <RouterProvider router={router}/>
            </div>
        </ThemeProvider>
     </Provider>

);