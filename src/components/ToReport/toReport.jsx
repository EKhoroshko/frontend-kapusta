import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ToReportsIcon } from '../../assets/toReports.svg';
import style from './ToReports.module.scss';

function ToReports() {
    return (
        <NavLink to="/reports" className={style.container}>
            <p className={style.text}>Перейти к отчётам</p>
            <ToReportsIcon className={style.icon} />
        </NavLink>
    );
}

export default ToReports;