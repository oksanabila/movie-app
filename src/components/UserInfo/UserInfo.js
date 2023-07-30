import React from 'react';

import avatar from '../../img/avatar.png'
import css from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={css.wrap}>
            <img src={avatar} className={css.img}/>
            <div>Estelle Collins</div>
        </div>
    );
};

export {UserInfo};
