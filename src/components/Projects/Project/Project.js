import React, {useState, useEffect} from 'react';
import IssuesTable from './IssuesTable/IssuesTable';
import LogTime from './LogTime/LogTime';
import AddComment from './AddComment/AddComment';
import Comments from './Comments/Comments';
import {getIssues} from '../../../services/projects';
import './Project.scss'

const Project = (props) => {
    const [issuesList, setIssuesList] = useState([]);
    const [commentsList, setCommentsList] = useState([]);
    const projectName = props.match.params.projectId;
    const projectId = props.location.id;

    useEffect(() => {
        getIssues(projectName)
            .then(res => {
                setIssuesList(res.data.issues);
            });

        const checkComments = localStorage.getItem(`comments-${projectName}`);
        if (checkComments !== null) {
            setCommentsList(JSON.parse(checkComments))
        }
    },[]);

    const addCommentHandler = (comment) => {
        const newArray = [...commentsList];
        newArray.push(comment);
        setCommentsList(newArray);
        localStorage.setItem(`comments-${projectName}`, JSON.stringify(newArray));
    };

    const deleteCommentHandler = (i) => {
        const newArray = [...commentsList];
        newArray.splice(i, 1);
        setCommentsList(newArray);
        localStorage.setItem(`comments-${projectName}`, JSON.stringify(newArray));
    };

    return (
        <div className="project">
            <h2>{projectName}</h2>
            <h3>Issues</h3>
            <IssuesTable issuesList={issuesList}/>
            <h3>Log time</h3>
            <LogTime projectId={projectId}/>
            <h3>Comments</h3>
            <AddComment addCommentHandler={addCommentHandler}/>
            <Comments commentsList={commentsList} deleteCommentHandler={deleteCommentHandler}/>
        </div>
    )
};

export default Project;