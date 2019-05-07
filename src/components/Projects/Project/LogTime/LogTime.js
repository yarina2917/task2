import React, {useState} from 'react';
import {logTime} from '../../../../services/projects';

const LogTime = ({projectId}) => {

    const [comment, setComment] = useState('');
    const [hours, setHours] = useState('');
    const [date, setDate] = useState('');
    const [activity, setActivity] = useState('Development');

    const submitHandler = (e) => {
        e.preventDefault();
        const body = {time_entry: {
            spent_on: date,
            hours: hours,
            activity_id: 9,
            comments: comment
        }};
        logTime(body, projectId).then(res => {
            setComment('');
            setHours('');
            setDate('');
        }, err => {
            console.log(err)
        });
    };

    const checkValidity = () => {
        return !(comment.trim() && hours.trim() && date.trim());
    };

    return (
        <form onSubmit={submitHandler} className="formLogTime">
            <ul>
                <li>
                    <label htmlFor="comment">Comment</label>
                    <input
                        type="text"
                        id="comment"
                        value={comment}
                        onChange={(e) => {setComment(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="hours">Hours</label>
                    <input
                        type="text"
                        id="hours"
                        value={hours}
                        onChange={(e) => {setHours(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => {setDate(e.target.value)}}/>
                </li>
                <li>
                    <label htmlFor="activity">Activity</label>
                    <select
                        defaultValue={activity}
                        name="select" id="activity"
                        onChange={(e) => {setActivity(e.target.value)}}
                    >
                        <option value="value1">Development</option>
                        <option value="value2">Design</option>
                        <option value="value3">Management</option>
                        <option value="value4">Testing</option>
                    </select>
                </li>
            </ul>
            <button disabled={checkValidity()}>Submit</button>
        </form>
    )
};

export default LogTime;