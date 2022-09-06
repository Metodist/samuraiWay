import React from "react";
import {Post} from "../Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div>
               <h3>My posts</h3>
            </div>
            <textarea></textarea>
            <div><button>Add post</button></div>

            <Post message="text 1" likeCount={1}/>
            <Post message="text 2" likeCount={2}/>
        </>
    )
}