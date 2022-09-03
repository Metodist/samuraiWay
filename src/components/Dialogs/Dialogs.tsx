import React from "react";
import style from "./Dialogs.module.css"


export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <div className={style.dialog + " " + style.active}>name 1</div>
                <div className={style.dialog}>name 2</div>
                <div className={style.dialog}>name 3</div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>text 1</div>
                <div className={style.message}>text 2</div>
                <div className={style.message}>text 3</div>

            </div>
        </div>
    )
}
