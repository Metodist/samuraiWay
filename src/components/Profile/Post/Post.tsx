import React from "react";
import style from "./Post.module.css"

type propsPostType={
    message: string
    likeCount: number
}

export const Post = (props: propsPostType) => {
    return (
        <div className={style.post}>
            <img src="https://i.pinimg.com/originals/48/44/c9/4844c9b4ccd66c4513cef55ab32a93c9.png" alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>like {props.likeCount}</span>
                <button>like</button>
            </div>
        </div>
    )
}