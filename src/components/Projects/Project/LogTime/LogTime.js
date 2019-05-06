import React, {useState} from 'react';
import {logTime} from '../../../../services/projects';

const LogTime = ({projectId}) => {

    const [comment, setComment] = useState('');
    const [hours, setHours] = useState('');
    const [date, setDate] = useState('');
    const [activity, setActivity] = useState('Development');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(projectId);
        const body = {time_entry: {
            project_id: projectId,
            spent_on: date,
            hours: hours,
            activity_id: 9,
            comments: comment
        }};
        logTime(body).then(res => {
            console.log(res)
        }, err => {
            console.log(err)
        });
    };

    return (
        <form onSubmit={submitHandler} className="formLogTime">
            <ul>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input required={comment === ''} type="text" id="comment" onChange={(e) => {setComment(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="hours">Hours</label>
                    <input required={hours === ''} type="text" id="hours" onChange={(e) => {setHours(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="date">Date</label>
                    <input required type="date" id="date" onChange={(e) => {setDate(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="activity">Activity</label>
                    <select defaultValue={activity} name="select" id="activity" onChange={(e) => {setActivity(e.target.value)}}>
                        <option value="value1">Development</option>
                        <option value="value2">Design</option>
                        <option value="value3">Management</option>
                        <option value="value4">Testing</option>
                    </select>
                </li>
            </ul>
            <button>Submit</button>
        </form>
    )
};

export default LogTime;