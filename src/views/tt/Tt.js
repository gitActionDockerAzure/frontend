import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Tt(props) {
    const API_SERVER = process.env.REACT_APP_API_SERVER;
    const [temp2, setTemp2] = useState();
    useEffect(() => {
        axios({
            method: 'get',
            url: API_SERVER + '/tt',
        })
            .then((res) => {
                console.log(res.data);
                setTemp2(res.data);
            })
            .catch();
    }, []);
    return (
        <div>
            <h1>/ 경로로 진입</h1>
            <p>{temp2}</p>
        </div>
    );
}

export default Tt;
