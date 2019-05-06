import React, {useState, useEffect} from 'react';
import {getProjects} from '../../services/projects';
import { Link } from "react-router-dom";
import './Projects.scss'

const Projects = ({match}) => {
    const [projectsList, setProjectsList] = useState([]);

    useEffect(() => {
        getProjects().then(res => {
            setProjectsList(res.data.projects);
        })
    },[]);

    return (
        <div className="projects">
            <h2>List of projects</h2>
            <ul className="projectsList">
                {projectsList.map(item => (
                    <li key={item.name}>
                        <Link to={`${match.url}/${item.identifier}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Projects;