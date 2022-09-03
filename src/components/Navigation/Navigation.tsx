import React from "react";
import style from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.NavLink} >Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.NavLink}>Dialogs</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.NavLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.NavLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.NavLink}>Settings</NavLink>
            </div>
        </div>
    )


}
