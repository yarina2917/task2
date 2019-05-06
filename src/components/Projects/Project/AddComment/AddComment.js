import React, {useState} from 'react';

const AddComment = ({addCommentHandler}) => {
    const [comment, setComment] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addCommentHandler(comment);
        setComment('');
    };

    return (
      <form onSubmit={submitHandler} className="addCommentForm">
          <textarea
              value={comment}
              onChange={(e) => {setComment(e.target.value)}}></textarea>
          <button disabled={comment.trim() === ''}>Add comment</button>
      </form>
    )
};

export default AddComment;