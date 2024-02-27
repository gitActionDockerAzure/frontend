import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Temp2(props) {
    const API_SERVER = process.env.REACT_APP_API_SERVER;
    const [temp2, setTemp2] = useState();
    useEffect(() => {
        axios({
            method: 'get',
            url: API_SERVER + '/temp2',
        })
            .then((res) => {
                console.log(res.data);
                setTemp2(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <h1>/temp2 경로로 진입</h1>
            <p>{temp2}</p>
            <Link to="/temp">temp.js 로 이동</Link>
        </div>
    );
}

export default Temp2;
