import { commentData } from "../mocks/commentData"

const Comment = ({ data }) => {
    const { name, desc } = data
    return (
        <div className="flex my-2 ">
            <img className="h-12" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" alt="user" />
            <div className="py-1 ps-2">
                <h1>{name}</h1>
                <p>{desc} </p>
            </div>
        </div>
    )
}

const CommentList = ({ comments }) => {
    return (
        <div>
            {
                comments.map((comment, i) => (
                    <div key={i + comment.name}>
                        <Comment data={comment} />
                        <div className="mx-6 ps-4 border border-l-2 border-y-0 border-r-0 border-l-slate-800 ">
                            <CommentList comments={comment.replies} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


const CommentBox = () => <CommentList comments={commentData} />

export default CommentBox;


