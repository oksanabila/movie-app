import React from 'react';

import { ThemeContext, themes } from '../../contexts/ThemeContext'
import {UserInfo} from "../UserInfo/UserInfo";
import Toggle from '../Toggle/Toggle'
import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={css.header}>
                <div className={css.logoWrap}>
                    <div className={css.logo}></div>
                </div>
                <div className={css.toggleWrap}>
                    <ThemeContext.Consumer>
                        {({ theme, setTheme }) => (
                            <Toggle
                                onChange={() => {
                                    if (theme === themes.light) setTheme(themes.dark)
                                    if (theme === themes.dark) setTheme(themes.light)
                                }}
                                value={theme === themes.dark}
                            />
                        )}
                    </ThemeContext.Consumer>
                </div>
                <UserInfo/>
            </div>


        </>

    );
};

export {Header};

