import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Temp1(props) {
    const API_SERVER = process.env.REACT_APP_API_SERVER;
    const [temp, setTemp] = useState();
    useEffect(() => {
        axios({
            method: 'get',
            url: API_SERVER + '/temp',
        })
            .then((res) => {
                console.log(res.data);
                setTemp(res.data);
            })
            .catch();
    }, []);
    return (
        <div>
            <h1>Temp1로 진입</h1>
            <p>{temp}</p>
        </div>
    );
}

export default Temp1;
