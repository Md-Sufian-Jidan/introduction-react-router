import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts);
    return (
        <div>
            <h1>posts : {posts.length}</h1>
            <div className="users">
                {
                    posts.map((post)=> <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;