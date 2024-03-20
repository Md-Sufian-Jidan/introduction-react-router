import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {postId} = useParams();
    const navigate = useNavigate();
    const {id , title, body} = postDetails;
    console.log(postId)

    const handleGoBack = () => {
        navigate(-1) // -1 is for go previous one 
    }

    return (
        <div>
            <h4>Post detail about : {id}</h4>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go Back</button>

        </div>
    );
};

export default PostDetails;