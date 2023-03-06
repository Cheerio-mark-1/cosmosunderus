import React, { useEffect } from 'react'
import axios from '../API/axios';

const Register = () => {
    async function getData(signal) {
        try {
            const response = await axios.get('/')
            const data  = response.data
            console.log(data);
        }
        catch (err) {
            if (!err?.response) {
                console.log('No Server Response');
            } else if (err.response?.status === 400) {
                console.log('Missing Username or Password');
            } else if (err.response?.status === 401) {
                console.log('Unauthorized');
            } else {
                console.log('Login Failed');
            }
        }


    }
    useEffect(() => {
        const controller = new AbortController();

        getData(controller.signal)

        return () => {
            controller.abort();
        }

    }, [])
    return (
        <div>Register</div>
    )
}

export default Register