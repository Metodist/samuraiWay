import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + " " + style.active}>
                   <NavLink to="/dialogs/1">name 1</NavLink>
                </div>
                <div className={style.dialog}>
                   <NavLink to="/dialogs/2">name 2</NavLink>
                </div>
                <div className={style.dialog}>
                   <NavLink to="/dialogs/3">name 3</NavLink>
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>text 1</div>
                <div className={style.message}>text 2</div>
                <div className={style.message}>text 3</div>

            </div>
        </div>
    )
}
