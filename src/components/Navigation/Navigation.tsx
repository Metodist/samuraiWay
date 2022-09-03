import React from "react";
import style from "./Navigation.module.css"

export const Navigation = () => {
    return (
        <div className={style.navigation}>
            <div><a href="/profile">Profile </a></div>
            <div><a href="/dialogs">Dialogs</a></div>
            <div><a href="/news">News</a></div>
            <div><a href="/music">Music </a></div>
            <div><a href="/settings">Settings </a></div>
        </div>
    )


}
