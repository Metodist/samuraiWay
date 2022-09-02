import React from "react";
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div>
                My posts
            </div>
            <textarea></textarea>
            <button>Add post</button>

            <Post message="text 1" likeCount={1}/>
            <Post message="text 2" likeCount={2}/>
        </>
    )
}