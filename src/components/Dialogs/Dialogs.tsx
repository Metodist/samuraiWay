import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogsPropsType = {
    id: number
    name: string
}

type messagePropsType = {
    message: string
}

const DialogsItem = (props: dialogsPropsType) => {
    let id = "/dialogs/" + props.id
    let name = props.name
    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={id}>{name}</NavLink>
        </div>
    )
}

const Message = (props: messagePropsType) => {
    let message = props.message
    return (
        <div className={style.message}>{message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogItems}>
                <DialogsItem id={1} name={"name 1"}/>
                <DialogsItem id={2} name={"name 2"}/>
                <DialogsItem id={3} name={"name 3"}/>
            </div>
            <div className={style.messages}>
                <Message message={"text 1"}/>
                <Message message={"text 2"}/>
                <Message message={"text 3"}/>
            </div>
        </div>
    )
}
