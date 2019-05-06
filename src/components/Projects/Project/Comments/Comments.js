import React from 'react';

const Comments = ({commentsList, deleteCommentHandler}) => (
    commentsList.length === 0 ?
        <p>No comments yet</p> :
        <ul className="commentsList">
            {commentsList.map((item,i) => (
                <li key={i}>
                    <p>{item}</p>
                    <button onClick={() => deleteCommentHandler(i)}>Delete</button>
                </li>
            ))}
        </ul>
);

export default Comments;